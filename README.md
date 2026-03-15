<div align="center">

# トウカンノ（toukanno）

### AI Engineer / System Architect / Full-Stack Builder

Building AI tools, automation systems, and production-grade software.

AI ツール・自動化システム・プロダクション品質のソフトウェアを設計・実装しています。

[![GitHub](https://img.shields.io/badge/GitHub-toukanno-181717?style=flat-square&logo=github)](https://github.com/toukanno)

</div>

---

## About

Engineer who **designs, builds, ships, and operates** software end-to-end.

設計・実装・出荷・運用まで一貫してやり切るエンジニアです。

I work across AI applications, developer tools, automation platforms, desktop apps, and scalable web systems. My approach is simple — solve real problems with working software, not prototypes.

AI アプリ、開発者ツール、自動化基盤、デスクトップアプリ、Web システムを横断。
プロトタイプではなく、動くソフトウェアで実際の問題を解決します。

---

## Core Strengths

| Domain | Level | What I deliver |
|--------|-------|----------------|
| Full-Stack Development | Expert | PHP / Laravel / Node.js / C# / React / TypeScript — 設計から運用まで |
| AI Integration | Expert | マルチプロバイダー LLM 連携、プロンプト設計、AI ネイティブ UX |
| Automation | Expert | CI/CD、自律コンテンツ生成、ゼロタッチ運用パイプライン |
| System Architecture | Strong | モジュラー設計、v1→v2 の段階的リアーキテクチャ |
| Desktop & Cross-Platform | Strong | Electron + Capacitor で単一コードベースから複数プラットフォーム |
| Infrastructure | Strong | Docker / Linux / Git / GitHub Actions — ビルド・デプロイ自動化 |

---

## Tech Stack

<table>
<tr>
<td valign="top" width="20%">

**Languages**
- PHP
- JavaScript
- TypeScript
- C#
- Python

</td>
<td valign="top" width="20%">

**Backend**
- Laravel
- Node.js
- REST API
- System Design

</td>
<td valign="top" width="20%">

**Frontend / Desktop**
- React
- Electron
- Tailwind CSS
- Capacitor

</td>
<td valign="top" width="20%">

**Template / CMS**
- Smarty
- ESNA

</td>
<td valign="top" width="20%">

**AI / Infrastructure**
- OpenAI / Anthropic
- OpenRouter / Whisper
- Docker / Linux
- GitHub Actions / Vercel

</td>
</tr>
</table>

---

## Featured Projects

### RainbowMD — AI Markdown Editor

**Problem:** 既存エディタに AI 補助がなく、OS ごとに別アプリが必要だった。

**Solution:** AI プロバイダーを切り替え可能なリアルタイム Markdown エディタ。1 コードベースで Windows / Mac / Linux / Android に対応。

| Architecture | Detail |
|-------------|--------|
| Cross-platform | Electron + Capacitor — 1 source → 4 platforms |
| AI Layer | Provider-agnostic — OpenAI, Anthropic, OpenRouter 切り替え |
| Rendering | marked.js ベースのカスタムエンジンでリアルタイムプレビュー |

**Outcome:** 設計・実装・ビルド・配布まで一人で完結。クロスプラットフォーム設計の実践例。

[![source](https://img.shields.io/badge/source-markdown--electron-blue?style=flat-square&logo=github)](https://github.com/toukanno/markdown-electron)

---

### Video Auto Editor — AI Video Pipeline

**Problem:** 動画制作（台本・音声・字幕・レンダリング・投稿）が手作業で 1 本数時間。

**Solution:** LLM 台本生成 → 音声合成 → Whisper 字幕 → FFmpeg レンダリング → YouTube/TikTok 自動投稿。手動ゼロの完全パイプライン。

| Architecture | Detail |
|-------------|--------|
| v1 | Laravel backend — サーバーサイドバッチ処理（FFmpeg + Whisper + LLM）|
| v2 | Electron + React — ローカルファースト、GUI で全工程制御 |
| Design | モジュラーパイプライン — 各ステージが独立して実行可能 |

**Outcome:** 制作時間を数時間→数分に短縮。実運用の知見で v1→v2 にアーキテクチャ刷新。

[![v1](https://img.shields.io/badge/v1-Laravel-red?style=flat-square&logo=laravel)](https://github.com/toukanno/video-auto-editor-1)
[![v2](https://img.shields.io/badge/v2-Electron-blue?style=flat-square&logo=electron)](https://github.com/toukanno/video-auto-editor-2)

---

### AI Automation Platform

**Problem:** AI トレンド追跡とアイデア評価が手動で、時間がかかり品質もばらつく。

**Solution:** GitHub Actions で毎日・毎週自動実行。AI トレンド要約 + アプリアイデア生成 + 自動スコアリング。完全無人運用。

| Architecture | Detail |
|-------------|--------|
| Pipeline | OpenRouter マルチモデル — 生成と評価を分離 |
| Scheduling | GitHub Actions — daily / weekly スケジュール実行 |
| Output | バージョン管理された Markdown — 完全なトレーサビリティ |

**Outcome:** デプロイ後ゼロタッチで稼働中。自動化設計と運用設計の実例。

---

## Open Source

| Project | Stack | Description |
|---------|-------|-------------|
| [RainbowMD](https://github.com/toukanno/markdown-electron) | Electron / React | AI クロスプラットフォーム Markdown エディタ |
| [Video Auto Editor v2](https://github.com/toukanno/video-auto-editor-2) | Electron / React | AI 動画自動制作デスクトップアプリ |
| [Video Auto Editor v1](https://github.com/toukanno/video-auto-editor-1) | PHP / Laravel | FFmpeg 連携の動画自動化バックエンド |
| [Pokemon Battle Sim](https://github.com/toukanno/pokemon-custom-battle-simulator) | JavaScript | 種族値カスタム & GBA スタイルバトルシミュレータ |

---

## GitHub Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=toukanno&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" height="170" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=toukanno&layout=compact&theme=tokyonight&hide_border=true" height="170" />

</div>

<div align="center">

[![trophy](https://github-profile-trophy.vercel.app/?username=toukanno&theme=tokyonight&no-frame=true&column=6)](https://github.com/ryo-ma/github-profile-trophy)

[![GitHub Streak](https://streak-stats.demolab.com?user=toukanno&theme=tokyonight&hide_border=true)](https://git.io/streak-stats)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/toukanno/toukanno/output/github-contribution-grid-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/toukanno/toukanno/output/github-contribution-grid-snake.svg" />
  <img alt="github-snake" src="https://raw.githubusercontent.com/toukanno/toukanno/output/github-contribution-grid-snake.svg" />
</picture>

</div>

---

## Engineering Philosophy

> Build systems that survive change.

変化に耐えられる設計を最初から意識する。短期実装ではなく長期運用が前提。

> Ship working software, not slide decks.

スライドではなく、動くソフトウェアで価値を証明する。

> Automate what humans shouldn't repeat.

人間が繰り返すべきでない作業は、すべて自動化する。

---

<div align="center">

**Build tools that build more tools.**

ツールを作るツールを作る。それがエンジニアリング。

</div>
