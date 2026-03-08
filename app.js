import React from 'https://esm.sh/react@18';
import { createRoot } from 'https://esm.sh/react-dom@18/client';

const profile = {
  name: 'Toukanno',
  role: 'Frontend / Fullstack Developer',
  summary:
    'ユーザーが直感的に使える Web 体験を、設計から実装・運用まで一貫して作る開発者です。React を中心に、API 連携や CI/CD を含めた継続的な改善を得意としています。'
};

const pagesTemplateUrl = 'https://<GitHubユーザー名>.github.io/toukanno/';
const publishedUrl =
  window.location.hostname.endsWith('github.io') || window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost'
    ? window.location.href
    : pagesTemplateUrl;

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'] },
  { category: 'Infra / DevOps', items: ['GitHub Actions', 'Docker', 'GitHub Pages'] }
];

const disclosures = [
  {
    title: '技術選定方針',
    detail:
      '開発速度と保守性のバランスを重視。UI は React、スタイルは Tailwind CSS を採用し、再利用可能な設計を優先します。'
  },
  {
    title: '品質保証',
    detail:
      'Pull Request 単位でのレビュー、Lint / Test 自動化、段階的リリースを実施。Issue ベースで改善サイクルを継続します。'
  },
  {
    title: 'セキュリティ・運用',
    detail:
      '依存ライブラリの定期更新、Secrets の管理、最小権限原則を徹底。障害時はログと監視を軸に迅速に復旧します。'
  }
];

const projects = [
  {
    name: 'Portfolio Hub',
    description: '自己紹介・実績掲載のためのポータルサイト。',
    stack: 'React / Tailwind CSS / GitHub Pages'
  },
  {
    name: 'Task Flow API',
    description: 'タスク管理アプリ向け API。認証・通知・履歴管理を提供。',
    stack: 'Node.js / PostgreSQL / Docker'
  }
];

function Card({ title, children }) {
  return React.createElement(
    'section',
    { className: 'rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-cyan-900/20' },
    React.createElement('h2', { className: 'mb-4 text-xl font-semibold text-brand-500' }, title),
    children
  );
}

function App() {
  return React.createElement(
    'main',
    { className: 'mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-6 px-4 py-10 md:px-8' },
    React.createElement(
      'header',
      { className: 'rounded-2xl border border-brand-700/40 bg-gradient-to-r from-slate-900 to-cyan-950 p-8' },
      React.createElement('p', { className: 'mb-3 text-sm uppercase tracking-[0.24em] text-brand-500' }, 'Developer Profile'),
      React.createElement('h1', { className: 'text-3xl font-bold md:text-4xl' }, profile.name),
      React.createElement('p', { className: 'mt-2 text-lg text-slate-300' }, profile.role),
      React.createElement('p', { className: 'mt-4 max-w-3xl leading-relaxed text-slate-200' }, profile.summary)
    ),

    React.createElement(
      'div',
      { className: 'grid gap-6 md:grid-cols-2' },
      React.createElement(
        Card,
        { title: 'スキルセット' },
        React.createElement(
          'div',
          { className: 'space-y-4' },
          ...skills.map((group) =>
            React.createElement(
              'div',
              { key: group.category },
              React.createElement('h3', { className: 'mb-2 font-medium text-slate-100' }, group.category),
              React.createElement(
                'ul',
                { className: 'flex flex-wrap gap-2' },
                ...group.items.map((item) =>
                  React.createElement(
                    'li',
                    {
                      key: item,
                      className: 'rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300'
                    },
                    item
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement(
        Card,
        { title: '技術開示' },
        React.createElement(
          'ul',
          { className: 'space-y-4' },
          ...disclosures.map((item) =>
            React.createElement(
              'li',
              { key: item.title },
              React.createElement('h3', { className: 'font-medium text-slate-100' }, item.title),
              React.createElement('p', { className: 'mt-1 text-sm leading-relaxed text-slate-300' }, item.detail)
            )
          )
        )
      )
    ),

    React.createElement(
      Card,
      { title: 'プロジェクト' },
      React.createElement(
        'div',
        { className: 'grid gap-4 md:grid-cols-2' },
        ...projects.map((project) =>
          React.createElement(
            'article',
            { key: project.name, className: 'rounded-xl border border-slate-800 bg-slate-950 p-4' },
            React.createElement('h3', { className: 'font-medium text-slate-100' }, project.name),
            React.createElement('p', { className: 'mt-2 text-sm text-slate-300' }, project.description),
            React.createElement('p', { className: 'mt-3 text-xs text-brand-500' }, project.stack)
          )
        )
      )
    ),

    React.createElement(
      'footer',
      { className: 'mt-2 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-sm text-slate-300' },
      React.createElement('p', null, 'Contact: toukanno@example.com'),
      React.createElement('p', { className: 'mt-2' }, 'GitHub Pages: ', React.createElement('a', { className: 'text-brand-500 underline', href: publishedUrl }, publishedUrl)),
      React.createElement('p', { className: 'mt-2 text-slate-400' }, '© ', new Date().getFullYear(), ' Toukanno')
    )
  );
}

createRoot(document.getElementById('root')).render(React.createElement(App));
