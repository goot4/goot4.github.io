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
    name: 'Daka App (手机/电脑端 网页)',
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
    name: 'Kanban App (电脑端网页)',
    description: '一个功能完备, 风格优美, 使用简单的看板App. 这个项目展示了如何拖拽网页元素, 如何做数据的编辑, 呈现, 保存和如何做风格统一的UI. ',
    keywords: 'Keywords: React SPA, Tailwindcss, daisyui, dnd-kit, gh-pages.',
    code: 'https://github.com/goot4/my-kanban-app',
    projectUrl: 'https://kanban.zeeebrag.pro/',
    date: '2024-04'
  },

]