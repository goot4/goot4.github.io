---
title: Weekly Digest 13
date: 2025-08-22 23:00:00 +0800
category: digest
tags:
  - reading
---
## AI

### Evaluation
#### [Asymmetry of verification and verifier’s law](https://www.jasonwei.net/blog/asymmetry-of-verification-and-verifiers-law)
How to do things becomes less relevant if we can set a good verification/evaluation against the output of LLM, then let LLMs figure out how to do it.

### Context
#### [Google AI DEV - Long context](https://ai.google.dev/gemini-api/docs/long-context#long-form-text)

> ⁠⁠In cases where you might have multiple "needles" or specific pieces of information you are looking for, the model does not perform with the same accuracy. Performance can vary to a wide degree depending on the context.⁠⁠ ⁠⁠This is important to consider as there is an inherent tradeoff between getting the right information retrieved and cost. You can get ~99% on a single query, but you have to pay the input token cost every time you send that query. So for 100 pieces of information to be retrieved, if you needed 99% performance, you would likely need to send 100 requests.⁠⁠

Use single purpose request to get better and more stable performance.

#### [How Long Contexts Fail](https://www.dbreunig.com/2025/06/22/how-contexts-fail-and-how-to-fix-them.html)

> If models start to misbehave long before their context windows are filled, what’s the point of super large context windows? In a nutshell: summarization and fact retrieval. If you’re not doing either of those, be wary of your chosen model’s distraction ceiling.

#### [How to Fix Your Context](https://www.dbreunig.com/2025/06/26/how-to-fix-your-context.html)

> The key insight across all the above tactics is that context is not free. Every token in the context influences the model’s behavior, for better or worse. The massive context windows of modern LLMs are a powerful capability, but they’re not an excuse to be sloppy with information management.