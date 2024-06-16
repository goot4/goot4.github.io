import { randomUUID } from "node:crypto";

export type ProjectInfo = {
  id: string;
  name: string;
  description: string;
  keywords: string;
  code: string;
  projectUrl: string;
  date: string;
}

export const projects: ProjectInfo[] = [
  {
    id: randomUUID(),
    name: 'AI聊天APP (模仿ChatGPT)',
    description: '使用OpenRouter提供的人工智能模型和API, 实现常见的AI聊天功能',
    keywords: 'Keywords: React, Nextjs, Open Router, Material UI.',
    code: 'https://github.com/goot4/chatgpt-mock.git',
    projectUrl: 'https://chatgpt-mock.onrender.com',
    date: '2024-06'
  },
  {
    id: randomUUID(),
    name: '今天喝什么? (手机/电脑端 网页)',
    description: '咖啡知识相关的科普网站, 同时支持中英双语言',
    keywords: 'Keywords: React, Nextjs, dynamic routes, middle ware, daisyui, next-intl.',
    code: 'https://github.com/goot4/what-to-drink.git',
    projectUrl: 'https://drink.zeeebrag.pro/',
    date: '2024-06'
  },
  {
    id: randomUUID(),
    name: '租房还是买房?计算工具 (手机/电脑端 网页)',
    description: '配合科普文章做的租售比计算工具, 主要使用数据可视化技术',
    keywords: 'Keywords: React, Nextjs, daisyui, EChart.',
    code: 'https://github.com/goot4/buy-or-rent-calculator.git',
    projectUrl: 'https://buyorrent.zeeebrag.pro/',
    date: '2024-05'
  },
  {
    id: randomUUID(),
    name: '打卡工具 (手机/电脑端 网页)',
    description: '这是一个工具类App, 具体功能是记录,管理打卡和对打卡数据的统计以及可视化展示.',
    keywords: 'Keywords: React, Nextjs, ShadcnUI, EChart.',
    code: 'https://github.com/goot4/my-daka-app',
    projectUrl: 'https://daka.zeeebrag.pro/',
    date: '2024-05'
  },
  {
    id: randomUUID(),
    name: 'My Spotify App (电脑端网页)',
    description: '我做的第一个React App项目. 这是一个歌曲搜索工具.',
    keywords: 'Keywords: React, SPA(single page app), Spotify API, CSS Module.',
    code: 'https://github.com/goot4/my-spotify-app',
    projectUrl: 'https://goot4.github.io/my-spotify-app/',
    date: '2024-04'
  },
  {
    id: randomUUID(),
    name: '看板工具 (电脑端网页)',
    description: '一个功能完备, 风格优美, 使用简单的看板App. 这个项目展示了如何拖拽网页元素, 如何做数据的编辑, 呈现, 保存和如何做风格统一的UI. ',
    keywords: 'Keywords: React SPA, Tailwindcss, daisyui, dnd-kit, gh-pages.',
    code: 'https://github.com/goot4/my-kanban-app',
    projectUrl: 'https://kanban.zeeebrag.pro/',
    date: '2024-04'
  },
]

export const experimental: ProjectInfo[] = [
  {
    id: randomUUID(),
    name: 'Next App Route',
    description: '对Nextjs App Router的实验项目, 内容包括: 用not-found, error, loading文件进行对应路由功能.',
    keywords: 'Keywords: Next App Router',
    code: 'https://github.com/goot4/next-app-route-experimental.git',
    projectUrl: 'https://next-app-route-experimental.onrender.com',
    date: '2024-05'
  },
  {
    id: randomUUID(),
    name: 'React State Management',
    description: '我的第一个实验项目, 内容包括:\n 1. 一个使用Context和Reducer的样例;\n 2. 使用shadcnUI进行主题切换;\n 3. 使用Render.com进行静态部署;',
    keywords: 'Keywords: React Context/Reducer, Dark Mode, Static Deployment',
    code: 'https://github.com/goot4/react-state-management.git',
    projectUrl: 'https://react-state-management-3pxy.onrender.com',
    date: '2024-05'
  },
]