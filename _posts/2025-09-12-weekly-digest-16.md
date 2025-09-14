---
title: Weekly Digest 16
date: 2025-09-12 23:00:00 +0800
category: digest
tags:
  - reading
---
## AI
### Nondeterminism in LLM Inference

Through the article ["Defeating Nondeterminism in LLM Inference"](https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference/#batch-invariant-matrix-multiplication-2), I learned about an underlying factor in model output instability: non-batch-invariance. This nondeterminism is determined by the underlying kernels of model inference, which is why almost all model inference providers state: "We do not guarantee that model output is deterministic."

For model users, what we can adjust are API parameters. According to the OpenAI cookbook ["How to make your completions outputs consistent with the new seed parameter"](https://cookbook.openai.com/examples/reproducible_outputs_with_the_seed_parameter?utm_source=chatgpt.com), seed and temperature are the API parameters related to model output stability. I attempted to reproduce this tutorial.

**Notes:**
- GPT-5, as a reasoning model, does not support temperature settings, with a default temperature of 1.
- The Response API no longer supports the seed parameter, and it's marked as "deprecated" in the chat completion API, suggesting that OpenAI is trying other methods to control model stability.
- Definition of output stability: For a given prompt and API parameters, the model's output should remain consistent.

**Experimental Results**
The code and results are recorded in [this GitHub gist](https://gist.github.com/goot4/5741e57f39035b1f89756b6875a909c1).

**Experimental Conclusions**
- Model output stability is related to the prompt content. Generally, more structured and fixed tasks require higher stability.
- The System fingerprint in model output is related to the model provider's backend, making it very unstable in applications with little practical use—it can be ignored.
- Providing a seed can indeed make output more stable, but it cannot guarantee stability.
- Due to multiple instability factors, we cannot conclude that lower temperature leads to more stable output. Therefore, temperature settings should be based on actual task requirements and set appropriately.
- The seed and temperature approach cannot adequately solve model stability issues. OpenAI and other providers should try other better solutions.

Overall, after testing, I believe that seed and temperature are not that effective and cannot have a decisive effect in application development. Therefore, when conducting evaluations, we should not focus on model output stability (which cannot be controlled) but rather on whether the model can consistently complete tasks.
