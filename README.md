<div align="center">

# トウカンノ（toukanno）

**Lead Engineer / Full-Stack Builder / Product-minded Architect**

Electron, Web, AI integration, and automation — end-to-end from concept to production.

構想から実装・運用まで一人でやり切るフルスタックエンジニアです。
設計・開発・自動化・AI連携を横断して、プロダクトを出荷します。

[![GitHub](https://img.shields.io/badge/GitHub-toukanno-181717?style=flat-square&logo=github)](https://github.com/toukanno)

</div>

---

## Core Strengths

Domains I own end-to-end — from design through deployment and operations.

実装だけでなく、設計・構築・運用まで一貫して担当できる領域です。

| Domain | Level | Focus |
|--------|-------|-------|
| Full-Stack Development | Expert | PHP / Laravel / Node.js / React / TypeScript — Web and desktop |
| AI Integration | Expert | Multi-provider LLM orchestration, prompt engineering, AI-native UX |
| Automation | Expert | CI/CD pipelines, autonomous content generation, zero-touch operations |
| Desktop & Mobile | Strong | Electron + Capacitor cross-platform architecture |
| Infrastructure | Strong | Docker, Linux, Git — build and deploy pipelines |
| Product Delivery | Practical | Requirements to shipping, including build tooling and distribution |

---

## Tech Stack

<table>
<tr>
<td valign="top" width="20%">

**Backend**
- PHP
- Laravel
- Node.js
- C#
- Python

</td>
<td valign="top" width="20%">

**Frontend**
- React
- TypeScript
- Electron
- Tailwind CSS

</td>
<td valign="top" width="20%">

**Template / CMS**
- Smarty
- ESNA

</td>
<td valign="top" width="20%">

**AI**
- OpenAI / Anthropic
- OpenRouter
- Whisper
- LLM Pipeline

</td>
<td valign="top" width="20%">

**Infrastructure**
- Docker
- Linux
- Git
- GitHub Actions
- Vercel

</td>
</tr>
</table>

---

## Featured Projects

### RainbowMD — AI Markdown Editor

**Challenge:** Existing markdown editors lack AI writing support and cross-platform consistency.

既存のエディタは AI 補助がなく、プラットフォームごとに別アプリが必要だった。

**What I built:** A real-time markdown editor with pluggable AI providers, designed to run natively on Windows, Mac, Linux, and Android from a single codebase.

AI プロバイダーを切り替え可能なリアルタイムエディタを、1つのコードベースで4プラットフォーム対応で構築。

**Architecture:**
- Electron + Capacitor for cross-platform desktop/mobile from one source
- Provider-agnostic AI layer supporting OpenAI, Anthropic, and OpenRouter
- Custom rendering engine built on marked.js for real-time preview

**Result:** A single codebase serving 4 platforms with seamless AI-assisted writing.

設計から実装、ビルド、配布まで一人で完結。クロスプラットフォーム設計の実践例。

[![Repo](https://img.shields.io/badge/source-markdown--electron-blue?style=flat-square&logo=github)](https://github.com/toukanno/markdown-electron)

---

### Video Auto Editor — AI Video Pipeline

**Challenge:** Manual video production (scripting, voiceover, subtitles, rendering, publishing) takes hours per video.

動画制作の全工程（台本・音声・字幕・レンダリング・投稿）が手作業で、1本あたり数時間かかっていた。

**What I built:** An end-to-end automated pipeline that generates scripts via LLM, synthesizes voice, auto-generates subtitles with Whisper, renders video with FFmpeg, and publishes to YouTube/TikTok — zero manual steps.

LLM で台本生成 → 音声合成 → Whisper で字幕 → FFmpeg でレンダリング → 自動投稿。手動ゼロの完全パイプラインを構築。

**Architecture:**
- v1: Laravel backend — server-side batch processing (FFmpeg + Whisper + LLM)
- v2: Electron + React desktop app — local-first with full GUI control
- Modular pipeline: each stage (script, voice, subtitle, render, publish) runs independently

**Result:** Reduced per-video production time from hours to minutes. Two architecture iterations informed by real usage.

実運用から得た知見で v1 → v2 にアーキテクチャを刷新。設計判断の根拠を実績で持っている。

[![v1](https://img.shields.io/badge/v1-Laravel-red?style=flat-square&logo=laravel)](https://github.com/toukanno/video-auto-editor-1)
[![v2](https://img.shields.io/badge/v2-Electron-blue?style=flat-square&logo=electron)](https://github.com/toukanno/video-auto-editor-2)

---

### AI Automation Platform

**Challenge:** Staying current with AI trends and evaluating app ideas is time-consuming and inconsistent.

AI トレンドの追跡やアイデア評価を人手でやると、時間がかかり品質もばらつく。

**What I built:** A fully autonomous pipeline running on GitHub Actions — daily AI trend summaries, weekly app idea generation with automated scoring, and structured reports. No manual intervention required.

GitHub Actions で毎日・毎週自動実行。AI トレンド要約 + アプリアイデア生成 + 自動スコアリング。完全無人運用。

**Architecture:**
- OpenRouter multi-model pipeline for generation and evaluation
- GitHub Actions scheduled workflows (daily / weekly)
- Structured output to versioned markdown for full traceability

**Result:** Continuous, zero-touch intelligence gathering running autonomously since deployment.

デプロイ後は一切手を加えず稼働中。自動化の設計力と運用設計の実例。

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

変化に耐えられる設計を最初から意識しています。短期実装ではなく長期運用を前提に設計します。

> Implementation isn't done when it runs — it's done when it's operationalized.

「動いた」で終わりではなく、運用に乗せて初めて完成と考えます。

> UI is not decoration — it's a tool that accelerates decision-making.

UI は見た目ではなく、ユーザーの意思決定を速くする道具です。

---

<div align="center">

**If it can be automated, it should be.**

自動化できるものは、すべて自動化する。

</div>
