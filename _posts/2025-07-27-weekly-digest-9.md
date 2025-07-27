---
title: Weekly Digest 9
date: 2025-07-27 23:00:00 +0800
category: digest
tags:
  - reading
---
## AI
Some terms:
- **Temperature**: control the level of randomness and creativity in the output. Happened before Top-p. The range of 0 to 2 is common practical limit for it to be useful.
- **Top-p** (Nucleus Sampling): It works by sampling from the smallest possible set of tokens whose cumulative probability adds up to p.
- **Zero-shot Prompting / Few-shot Prompting**: refers to the number of examples in the prompts.

### Coding
#### [Nobody knows how to build with AI yet](https://worksonmymachine.substack.com/p/nobody-knows-how-to-build-with-ai)
>We're in a moment where every developer is simultaneously an expert (at their own weird process) and a complete beginner (at whatever comes next). Where four days of work can produce what used to take months. ⁠⁠Where the main skill is explaining what you want to something that types faster than you can think.

In this fast-paced era, experience get outdated too fast, the first step to adapt to it is to accept this fact.
### Local LLM
#### [How to run an LLM on your laptop](https://simonwillison.net/2025/Jul/18/how-to-run-an-llm-on-your-laptop/#atom-everything)
It's really easy now to do this thing, and I think it's a good and fun way to learn more about AI.
- Ollama - cli, docker-like model management
- LM Studio - user-friendly GUI
- LLM Farm - run models on iphone

### Context
Model training and context engineering are two total different things, though they are both related to AI. I feel like that Model training is like build operating system / Infrastructure, where as context engineering is a new kind of software engineering.

My interest is always engineering, whether it is related to AI or not.

#### [Context Engineering for AI Agents: Lessons from Building Manus](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus)
- **In-context learning**: llm learn how to perform a task or adapt its behavior based solely on the info provided in the input prompt.

Useful workaround to build agent systems based on state-of-the-art model abilities. But I am afraid these experience won't age well considering AI model's fast upgrading speed. But it still a must-read guidance if I am going to build agent systems.