---
title: 看板App开发记录
date: 2024-04-30 00:00:00 +0800
---
本文记录我开发工具类项目看板App, 学习使用DaisyUI, dnd-kit, gh-pages的过程. 主要工具包括: React, tailwindcss, daisyui, dnd-kit, gh-pages.

查看项目[网站](https://kanban.zeeebrag.pro)和[代码](https://github.com/goot4/my-kanban-app).

## 项目目标

做出一个功能完备, 风格优美, 使用简单的看板App. 因为通过做这个App可以学习如何拖拽网页元素, 如何做数据的编辑, 呈现, 保存和如何做风格统一的UI.

## 风格设计

App的风格来自网站CodeCademy, 我进行了高度重制. 对App的配色使用了Daisy的主题和主题配色框架, 避免使用直接的颜色, 使项目的风格更加统一.

## 拖拽网页元素

网页元素的拖拽是看板App的核心功能. 直接使用dnd-kit工具实现. 主要参考[源码](https://codesandbox.io/p/sandbox/lknfe?file=%2Fsrc%2Fapp.js).

同一List之内换位置和不同List之间转换使用Preset Sortable. 在DndContext中绑定事件`onDragStart`, `onDragOver`, `onDragEnd`, 在对应的事件中更新lists数据实现数据和显示同步.

需要使用DragOverlay来实现更好的拖拽体验.

### 加入Click事件冲突与解决

在card元素上使用Click事件没有效果, 可能是与onDrag相关事件冲突.

解决办法: 设置一个较短的窗口期, 在窗口期内前后触发`onDragStart`和`onDrageEnd`则视为一次点击事件, 在`onDragEnd`中添加对应的处理.

## 编辑器功能

对卡片的编辑通过调用一个全屏的编辑器实现. 调用者将信息通过props传给编辑器.

### 通过useState设置Callback

调用者需要传递Callback来处理编辑器完成的数据, 用useState设置Callback时要注意setCallback要写成`setCallback(()=> someCallback)`的形式, `setCallback(someCallback)`会立即执行`someCallback`.

### 取消编辑行为

点击编辑器周围元素视为取消的事件中, 要检测事件的`target`和`currentTarget`是否一致(因为周围元素占满全屏, 在编辑器底下也有). 而取消按钮与周围元素通用一个handler的话, 取消按钮失效(取消按钮内部存在SVG元素). 解决方案是分开使用不同的handler.


## 其他功能

- **数据存储**: 在`useEffect`中使用`localStorage`将更新的数据实时保存.
- **部署**: React app使用gh-page, 发布在subdomain 参考[教程](https://create-react-app.dev/docs/deployment/#step-2-install-gh-pages-and-add-deploy-to-scripts-in-packagejson).

## 未解决的问题

- 当card的title为两行以上的文本时的文本省略如何实现.
- 在Nextjs中实现可能存在问题(可能与useState行为有关).