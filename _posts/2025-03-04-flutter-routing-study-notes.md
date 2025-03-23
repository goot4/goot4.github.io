---
title: Flutter Routing 学习笔记
date: 2025-03-04 00:00:00 +0800
---
参考来源:
- [Flutter 官方文档](https://docs.flutter.dev/ui/navigation) 和Cookbook
- Flutter Api
- Go_Router 文档和API, [example code](https://github.com/flutter/packages/blob/main/packages/go_router/example/)

说明: 本文记录了我阅读所有相关文档后, 对重要且实用的概念的总结. 常规的路由使用方式可以通过查这些文档获得, 而本文通过理清一些关键概念, 希望可以减少读者在使用这些工具时因没有注意细节而产生的误用; 或作为自己的一个知识备忘手册.

如果想学习Flutter路由相关知识, 推荐有选择性地看所列的参考资料.
## 重要概念
- `BuildContext context`: A handle to the location of a widget in the widget tree.
	- `Navigator.of(context, bool rootNavigator=false)`: 找到最近的`NavigatorState`的instance, 通过`rootNavigator`可以找到最远的.
	- If a `BuildContext` is used across an **async gap**, consider checking `context.mounted` to determine whether the context is still valid before interacting with it.
- `Navigator`:A widget that manages a set of child widgets with a stack discipline.
	- `Navigator.push()` is wrapper of `Navigator.of(context).push()`, `pop` 同理.
	- MaterialApp 或 CupertinoApp 内部默认包含一个 Navigator，用于管理整个应用的页面导航。
	- Navigator 的底层实现是 `Overlay`.
- `Route<T>`: An abstraction for an entry managed by a `Navigator`.
	- 术语: In Flutter, _screens_ and _pages_ are called _routes_.
	- `MaterialPageRoute`: a *modal route* with transition animation.
		- `ModalRoute`: A route that blocks interaction with previous routes.
	- Use the [`Hero`](https://api.flutter.dev/flutter/widgets/Hero-class.html?_gl=1*gkmgwg*_ga*MTU4NjcyOTc3Ny4xNzM3MTgyMzgx*_ga_04YGWK0175*MTc0MDMzMTg2NC4xMy4wLjE3NDAzMzE4NjQuMC4wLjA.) widget to animate a widget from one screen to the next.
## Named Routes
如何使用 Named Route:
1. Define routes by providing additional properties to the `MaterialApp` constructor: `initialRoute` and `routes`
2. Navigate by `Navigator.pushNamed()`

`argument` parameter of `Navigator.pushNamed()` can be used to pass argument.
See [Pass arguments to a named route](https://docs.flutter.dev/cookbook/navigation/navigate-with-arguments).

**Note**: *Named Routes* is **not recommended** for most applications, because its deep link behavior is always the same (Flutter pushes a new `Route` onto the Navigator) and can't be customized.
## go_router
如果 App 有更高级的导航和路由需求(如 App 使用到多个 `Navigator`), 可以使用 go_route.

- [Child routes](https://pub.dev/documentation/go_router/latest/topics/Configuration-topic.html): To display a screen on top of another, add a child route by adding it to the parent route's `routes` list.
- [Nested navigation](https://pub.dev/documentation/go_router/latest/topics/Configuration-topic.html): To add an additional Navigator, use [ShellRoute](https://pub.dev/documentation/go_router/latest/go_router/ShellRoute-class.html) and provide a builder that returns a widget.
- Stateful nested navigation: Creates separate `Navigator`s for each of its nested branches. 不同branches的状态在切换branches的过程中都可以保留.
### 和`Navigator`的关系
- `GoRouter`维护了一个`Navigator`, 并动态构建`Navigator.pages`来管理页面堆栈.
- 如果使用`ShellRoute`, 应用中可能会存在多个`Navigator`.
	- `GoRouter` and `ShellRoute` has `NavigatorKey`
	- `GoRoute` can use `parentNavigatorKey` to specific navigator.
### Navigation
> **Prevent navigation**
>GoRouter and other Router-based APIs are not compatible with the [WillPopScope](https://api.flutter.dev/flutter/widgets/WillPopScope-class.html) widget.
>See [issue #102408](https://github.com/flutter/flutter/issues/102408) for details on what such an API might look like in go_router.

### Transition Animation
- `builder` return a `Widget`, where as `pageBuilder` return a `Page`. `Page` gives more control over the **transition animation**. `Builder` will use default transition animation depending on platforms. 有`PageBuilder`就不需要`Builder`了.
## Overlay & Dialog
- `showDialog`的底层实现是`Navigator.push()`
- Dialog的目的是显示与主要内容分开的对话框, 通常显示警告, 确认或提示信息, 交互: 会阻断与底层内容的交互, 生命周期: 短暂
- Overlay的目的是创建灵活的自定义UI元素, 交互: 比较灵活, 生命周期: 手动管理
- Although you can create an [Overlay](https://api.flutter.dev/flutter/widgets/Overlay-class.html) directly, it's most common to use the overlay created by the [Navigator](https://api.flutter.dev/flutter/widgets/Navigator-class.html) in a [WidgetsApp](https://api.flutter.dev/flutter/widgets/WidgetsApp-class.html), [CupertinoApp](https://api.flutter.dev/flutter/cupertino/CupertinoApp-class.html) or a [MaterialApp](https://api.flutter.dev/flutter/material/MaterialApp-class.html). The navigator uses its overlay to manage the visual appearance of its routes.

## Flutter Boost
本节仅作为归档与补充.

以下信息来源: Claude Chat
4个生命周期方法的调用时机:
`onForeground()`
- 当应用从后台切换到前台时调用
`onBackground()`
- 当应用切换到后台时调用
`onPageShow()`
- 当页面变为可见状态时调用
- 触发场景：
	- 页面首次打开
	- 从其他页面返回到该页面
	- 当前页面上的弹窗关闭
`onPageHide()`
- 当页面变为不可见状态时调用
- 触发场景：
    - 页面被其他页面覆盖
    - 页面被关闭
    - 在当前页面上打开弹窗
调用顺序示例:
```dart
// 1. 打开页面时
onPageShow()

// 2. 从前台切到后台时
onPageHide()
onBackground()

// 3. 从后台切回前台时
onForeground()
onPageShow()
```