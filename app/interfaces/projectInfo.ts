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
    name: 'My Spotify App',
    description: 'This project are made as my first react app project. It\'s a song search tool.',
    keywords: 'Keywords: React, SPA(single page app), Spotify API, CSS Module.',
    code: 'https://github.com/goot4/my-spotify-app',
    projectUrl: 'https://goot4.github.io/my-spotify-app/',
    date: '2024-04'
  },

]