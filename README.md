<div align="center">

# Masayoshi Yuto

**Lead Engineer / Full-Stack Builder / Product-minded Architect**

Electron, Web, AI integration, and automation — end-to-end from concept to production.

[![GitHub](https://img.shields.io/badge/GitHub-toukanno-181717?style=flat-square&logo=github)](https://github.com/toukanno)

</div>

---

## Core Strengths

| Domain | Level | Focus |
|--------|-------|-------|
| AI Integration | Expert | Multi-provider LLM orchestration, prompt engineering, AI-native UX |
| Automation | Expert | CI/CD pipelines, autonomous content generation, zero-touch operations |
| Full-Stack Development | Strong | React / Node.js / PHP / TypeScript across web and desktop |
| Desktop & Mobile | Strong | Electron + Capacitor cross-platform architecture |
| Product Delivery | Practical | Requirements to shipping, including build tooling and distribution |

---

## Tech Stack

<table>
<tr>
<td valign="top" width="25%">

**Backend**
- Node.js
- PHP / Laravel
- Python

</td>
<td valign="top" width="25%">

**Frontend**
- React
- TypeScript
- Tailwind CSS

</td>
<td valign="top" width="25%">

**Desktop / Mobile**
- Electron
- Capacitor
- esbuild

</td>
<td valign="top" width="25%">

**AI / Infra**
- OpenAI / Anthropic
- OpenRouter
- Docker
- GitHub Actions

</td>
</tr>
</table>

---

## Featured Projects

### RainbowMD — AI Markdown Editor

**Challenge:** Existing markdown editors lack AI writing support and cross-platform consistency.

**What I built:** A real-time markdown editor with pluggable AI providers, designed to run natively on Windows, Mac, Linux, and Android from a single codebase.

**Architecture:**
- Electron + Capacitor for cross-platform desktop/mobile from one source
- Provider-agnostic AI layer supporting OpenAI, Anthropic, and OpenRouter
- Custom rendering engine built on marked.js for real-time preview

**Result:** A single codebase serving 4 platforms with seamless AI-assisted writing.

[![Repo](https://img.shields.io/badge/source-markdown--electron-blue?style=flat-square&logo=github)](https://github.com/toukanno/markdown-electron)

---

### Video Auto Editor — AI Video Pipeline

**Challenge:** Manual video production (scripting, voiceover, subtitles, rendering, publishing) takes hours per video.

**What I built:** An end-to-end automated pipeline that generates scripts via LLM, synthesizes voice, auto-generates subtitles with Whisper, renders video with FFmpeg, and publishes to YouTube/TikTok — zero manual steps.

**Architecture:**
- v1: Laravel backend — server-side batch processing (FFmpeg + Whisper + LLM)
- v2: Electron + React desktop app — local-first with full GUI control
- Modular pipeline: each stage (script, voice, subtitle, render, publish) runs independently

**Result:** Reduced per-video production time from hours to minutes. Two architecture iterations informed by real usage.

[![v1](https://img.shields.io/badge/v1-Laravel-red?style=flat-square&logo=laravel)](https://github.com/toukanno/video-auto-editor-1)
[![v2](https://img.shields.io/badge/v2-Electron-blue?style=flat-square&logo=electron)](https://github.com/toukanno/video-auto-editor-2)

---

### AI Automation Platform

**Challenge:** Staying current with AI trends and evaluating app ideas is time-consuming and inconsistent.

**What I built:** A fully autonomous pipeline running on GitHub Actions — daily AI trend summaries, weekly app idea generation with automated scoring, and structured reports. No manual intervention required.

**Architecture:**
- OpenRouter multi-model pipeline for generation and evaluation
- GitHub Actions scheduled workflows (daily / weekly)
- Structured output to versioned markdown for full traceability

**Result:** Continuous, zero-touch intelligence gathering running autonomously since deployment.

---

## Open Source

| Project | Stack | Description |
|---------|-------|-------------|
| [RainbowMD](https://github.com/toukanno/markdown-electron) | Electron / React | AI-powered cross-platform markdown editor |
| [Video Auto Editor v2](https://github.com/toukanno/video-auto-editor-2) | Electron / React | Automated video production desktop app |
| [Video Auto Editor v1](https://github.com/toukanno/video-auto-editor-1) | PHP / Laravel | Video automation backend with FFmpeg |
| [Pokemon Battle Sim](https://github.com/toukanno/pokemon-custom-battle-simulator) | JavaScript | Custom stats & GBA-style battle simulator |

---

## GitHub Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=toukanno&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" height="170" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=toukanno&layout=compact&theme=tokyonight&hide_border=true" height="170" />

[![GitHub Streak](https://streak-stats.demolab.com?user=toukanno&theme=tokyonight&hide_border=true)](https://git.io/streak-stats)

</div>

---

## Engineering Philosophy

> Design exists to reduce the cost of future changes.

> Implementation isn't done when it runs — it's done when it's operationalized.

> UI is not decoration — it's a tool that accelerates decision-making.

---

<div align="center">

**If it can be automated, it should be.**

</div>
