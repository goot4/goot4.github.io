---
title: Weekly Digest 7
date: 2025-07-13 16:09:00 +0800
category: digest
tags:
  - reading
---
## AI
### Context Engineering
*Context Engineering* is a quite popular term in the past weeks, and I have read a lot articles talking about it. Here I made a summary introducing these articles:

#### [一文看懂“提示词” vs “提示词工程” vs “上下文工程”](https://baoyu.io/blog/prompt-engineering-vs-context-engineering?__readwiseLocation=), 
Author: Baoyu

> **提示词工程是一个过程，系统化地设计、测试、优化提示词的过程。**
>
>**上下文工程（Context Engineering），就是一门为 AI 设计和构建动态上下文的学科，为大语言模型提供恰当的信息和工具，帮助模型高效完成任务。**
>
> **对于普通人来说，能写提示词就够了**，要开发 AI 应用才需要考虑提示词工程去不断优化提示词，要开发动态的 AI 智能体才需要去搞上下文工程为 AI 的上下文窗口填充恰好的信息。

#### [The New Skill in AI is Not Prompting, It's Context Engineering](https://www.philschmid.de/context-engineering)
what is included in context engineering:
- Instructions / System Prompt
- User Prompt
- State / History (short-term Memory)
- Long-Term Memory
- Retrieved Information (RAG - Retrieval Augmented Generation)
- Available Tools
- Structured Output

#### [Karpathy's tweet about context engineering](https://x.com/karpathy/status/1937902205765607626)
> art because of the guiding intuition around LLM psychology of people spirits.
>
> So context engineering is just one small piece of an emerging thick layer of non-trivial software that coordinates individual LLM calls (and a lot more) into full LLM apps. The term "ChatGPT wrapper" is tired and really, really wrong.

#### [Context Engineering for Agents](https://rlancemartin.github.io/2025/06/23/context_engineering/)
How to manage Context
- Write Context
- Select Context
- Compressing Context
- Isolating Context

### Agentic AI
#### [SaaS vs. Libraries: from humanware to machineware](https://fakepixels.substack.com/p/saas-vs-libraries-from-humanware)
AI agents are becoming the primary uses of out digital infrastructure. Based on this idea, here is what the article discussed:
- Libraries are becoming preferred architecture over api
	- Libraries grant agents **complete control**.
	- MCPs that are not build natively for AI are not good for use. 
- What the emerging agent-native stack looks like in practice.
- How this shift fundamentally changes the role of engineers are the nature of software itself.
	- Machines become the customers of products.
