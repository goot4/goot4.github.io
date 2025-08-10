---
title: Weekly Digest 11
date: 2025-08-10 23:50:00 +0800
category: digest
tags:
  - reading
---
## AI
### News
- Opus 4.1: incremental upgrade for Opus 4
- GPT-oss: best open-source model for now
- Genie 3: world models

#### [OpenAI's new open-source model is basically Phi-5](https://seangoedecke.com/gpt-oss-is-phi-5/)
"Training on synthetic data". This is a strong accusation. But OpenAI has motivation to do this.

#### [GPT-5: Key characteristics, pricing and model card](https://simonwillison.net/2025/Aug/7/gpt-5/#atom-everything)
Comprehensive overview of GPT-5.

>It’s still an LLM—it’s not a dramatic departure from what we’ve had before—but it rarely screws up and generally feels competent or occasionally impressive at the kinds of things I like to use models for.

### Prompt Injection
#### [Prompt injection and jailbreaking are not the same thing](https://simonwillison.net/2024/Mar/5/prompt-injection-jailbreaking/)
Two new terms, good to know for LLM Application Security

#### [My Lethal Trifecta talk at the Bay Area AI Security Meetup](https://simonwillison.net/2025/Aug/9/bay-area-ai/#atom-everything)
#### [The lethal trifecta for AI agents: private data, untrusted content, and external communication](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)

## Others
[A Friendly Introduction to SVG](https://www.joshwcomeau.com/svg/friendly-introduction-to-svg/): The easiest tutorial for learning SVG, the interactive diagrams are very helpful.

### Concurrent Programming
#### [Playground Wisdom: Threads Beat Async/Await](https://lucumr.pocoo.org/2024/11/18/threads-beat-async-await/)
>The worst offender here in my mind is Python. `async`/`await` has ended up with a really complex system where the language now has coroutines and real threads, different synchronization primitives for each and async tasks that end up being pinned to one OS thread. The language even has different futures in the standard library for threads and async tasks!

#### [What Color is Your Function?](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/)
This article is about why async functions can be problems. And the solution is to use threads.