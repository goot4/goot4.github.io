---
title: Claude Code Browser-use Skill
date: 2025-12-23 02:00:00 +0800
category:
tags:
---

TL;DR: I use Claude Code's skill system to replace Playwright MCP for browser automation, based on Armin Ronacher's implementation. Same functionality, but without MCP eating up your context (Playwright MCP is about 16k tokens in context).

## Why This Approach Works

The skill-based browser automation has several advantages over MCP:

- **Context efficiency**: No MCP server preoccupying your context window
- **Customizable**: You can modify the skills to fit your exact needs
- **Simple and transparent**: The code is straightforward enough to read and understand completely

## The Difficult Part

The main challenge for me is managing the Chrome profile. So far, I have only modified the profile management related code.

However, Armin's code provides a solid starting point. You can copy it, start using it immediately, then gradually understand what you need and what you don't. From there, customize it to your own version.

## How I Use It

I keep things simple:

- I put the skill in my user skill directory (`~/.claude/skills/`)
- I avoid plugins/marketplaces or complex setups — they feel overcomplicated for this use case
- I can change the logging behavior and tweak the code at any time to fit my specific needs

I don't think I need to publish my own version. The best approach is to start with Armin's code and customize from there.

## Summary

I think skills are really useful and I like their transparency. You have full control over what a skill does. You don't need a lot of skills copied from other people — you just need good skills that you actually need and fully understand.

## References

### Articles

- [What if You Don't Need MCP?](https://mariozechner.at/posts/2025-11-02-what-if-you-dont-need-mcp/) — Mario Zechner's exploration of simpler alternatives to MCP for agent-browser interaction
- [Agents are Hard](https://lucumr.pocoo.org/2025/11/21/agents-are-hard/) — Armin Ronacher's insights on the challenges of building reliable AI agents

### Source Code

- [mitsuhiko/agent-commands](https://github.com/mitsuhiko/agent-commands) — Armin Ronacher's original implementation of CDP-based browser tools for AI agents
- [badlogic/pi-skills](https://github.com/badlogic/pi-skills) — Mario Zechner's collection of agent skills