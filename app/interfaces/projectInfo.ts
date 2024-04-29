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
    name: 'My Spotify App (PC Web)',
    description: 'This project are made as my first react app project. It\'s a song search tool.',
    keywords: 'Keywords: React, SPA(single page app), Spotify API, CSS Module.',
    code: 'https://github.com/goot4/my-spotify-app',
    projectUrl: 'https://goot4.github.io/my-spotify-app/',
    date: '2024-04'
  },
  {
    id: randomUUID(),
    name: 'Kanban App (PC Web)',
    description: '一个功能完备, 风格优美, 使用简单的看板App. 这个项目展示了如何拖拽网页元素, 如何做数据的编辑, 呈现, 保存和如何做风格统一的UI. ',
    keywords: 'Keywords: React SPA, Tailwindcss, daisyui, dnd-kit, gh-pages.',
    code: 'https://github.com/goot4/my-kanban-app',
    projectUrl: 'https://kanban.zeeebrag.pro/',
    date: '2024-04'
  },

]