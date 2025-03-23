---
title: Web前端总结
date: 2024-04-19 00:00:00 +0800
---
此报告为技术总结, 客观记录我所了解到的前端工程师可能用得上的技能, 行业发展状况以及前景. 因此会根据我的学习进度持续更新.

## 技术总结

- 基础: HTML5, CSS, Javascript, Typescript
- CSS 框架: Bootstrap, Tailwind, Sass, CSS Module
- UI框架: ShadcnUI, Radix-ui, DaisyUI, Tremor, MUI
- 前端框架: React, Next.js, React Router(Remix), Vue, Vite, Nuxt, Wordpress
- Node.js, Express.js, nginx
- 协议: HTTP, SSL
- 授权: 密码授权, API key, OAuth
- 工具:
  - Build: webpack, babel
  - 代碼優化: ESLint, Prettier
  - Topography: MDX(markdown to components)
  - 通信: Ajax, Fetch
  - 数据可视化: EChart, Visx, Tremor, Chartjs
- 部署: Vercel, Github Page(静态), Render.com
- 後端: Rest API
- 数据库: Serverless DB, PostgreSQL
- 通用类: Git, CLI, Linux, 设计模式
- 其他: Sass (Serve as a service)

**Javascript**

- Concept: Event loop (for async)
- Browser APIs: Fetch, DOM, Client-side storage


**Tailwind**

- Utility-first
- Responsive Design


**React**

- JSX: Syntax extension to describe UI
- Component: 实现 UI 独立和可重用.
- Virtual DOM: 提高性能.
- Props: 实现 Component 之间的数据交流
- Hook: 实现 UI 和数据的分离.

**Nextjs**

- 全栈框架
- 路由(route)
- 服务端渲染

## Web开发行业总结

### Web App开发与本地App开发比较

Web App开发不需要像App一样上应用商店, 不需要审核(国内网络服务器需要网络备案).

目前的Web App有着可以和本地App媲美的丰富功能和不错的性能, 而且Web App不需要更新, 因此可以很大程度取代
本地App的功能. 但Web App有着需要用户始终联网, 用户数据泄露, 服务器下线的缺点.

大体上看Web App更适用于数据管理型应用, 而本地App则更适合重视图形渲染的应用(如游戏). 但如果未来网络速度能提升
更快, 图形渲染可以放在服务器上, 用户端App只作为交互界面的话, 两者区别应该会进一步减小.


### Web独立开发

对于小型开发者来说, 做出推动行业发展(如设计新的框架)的可能性比较小, 小型开发者的优势应该是能够针对不同客户提供
定制化服务和灵活的业务结构.

面向Customer的业务比较困难, 因为除产品开发以外, 还包含市场调研, 需求分析, 产品设计, 产品开发, 产品宣传
维护和运营等一整套流程. 需要较广的人脉.

面向Business的业务相对简单, 主要负责产品设计, 开发, 与维护. 吸引客户的方式可以是一个不错的个人网站
和项目经验. 我认为是独立开发不错的出发点.

总的来说, 独立开发要求多方面的能力, 开发仅仅为其中一环.

### Web与AI

随着AI技术的发展, 未来可能会有大量的网页由AI生成, 或者为AI服务. 这可能会造成更加严重的信息大爆炸现象. 获取信息
和数据的能力会更加重要. 当然, 提升这种能力也很有可能需要AI的帮助.