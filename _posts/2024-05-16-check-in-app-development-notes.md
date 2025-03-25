---
title: 打卡App开发记录
date: 2024-05-16 00:00:00 +0800
---
本文记录我开发工具类项目打卡App. 主要工具包括: React, Nextjs, tailwindcss, shadcnUI, Echart.

查看项目[网站](https://daka.zeeebrag.pro)和[代码](https://github.com/goot4/my-daka-app).

## 项目目标

做出一个功能完备, 风格优美, 使用简单的打卡App. 通过做这个App可以学习使用ShadcnUI库, 和用Echart做数据可视化

## UI

App的大部分UI使用ShadcnUI成熟的组件进行组合, 这些组件的可自定制化程度基本能够满足需求.

**颜色主题**: 引入ShadcnUI时会引入一系列的主题颜色, 关于这些主题颜色的自定制化还未作研究. 目前使用默认. 关于明暗模式也未做具体实验.

## 数据

- **数据读取**: 在`useEffect`中使用`localStorage`将读取数据.
- **数据保存**: 在每次数据被修改之后使用`localStorage`保存数据

### 关于日期

最初日期的数据结构用的是Date, 但是Date在存储再读取后会变成string, 因此会造成数据类型上的不匹配. 因此最后选择使用number类型的TimeStamp作为日期的数据结构, 在需要展示或者做分析的时候再转换成Date类型.

## 数据可视化

使用了Echart的line-chart和heatmap两种类型的图. 使用难点在于对options的定制化, 但另一方面也说明了可定制化程度高.
## 其他

- **部署**: 使用Vercel平台

## 未解决的问题

- 一些国产手机的自带浏览器会报错
- 关于局部时间的问题可能存在bug
## Future work

- 加入夜晚模式
- 一些中文化还未完成
- 增加对已有日志的编辑
- 加入动画效果
- 增加数据的存入或转出, 或者数据的云端存储

