<h1 align="center">LUMIÈRE — E-commerce de Moda</h1>

<p align="center">
  Landing page de e-commerce de moda de luxo com cursor customizado mix-blend-difference, crossfade de produto no hover e efeitos de paralaxe.
  <br /><br />
  <a href="https://lp-ecommerce-moda.vercel.app"><strong>🔗 Ver Demo</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" />
</p>

---

## Sobre o Projeto

Landing page sofisticada para e-commerce de moda. Cursor customizado com `useMotionValue` + `useSpring` e `mix-blend-mode: difference`. Produtos com crossfade de imagem no hover via duas imagens absolutas empilhadas. Hero com reveal de vídeo por máscara CSS e parallax.

## Funcionalidades

- `BlendCursor` — cursor personalizado com efeito difference via Framer Motion
- `LineReveal` — animação de revelação por máscara no texto do hero
- `Reveal` — wrapper de animação de entrada ao rolar
- Crossfade de produto no hover (duas imagens absolutas com transição de opacidade)
- Hero com vídeo e efeito parallax em dois elementos
- Marquee com símbolo ✦
- Grade de categorias portrait
- Grade de produtos 2/3 colunas responsiva
- Grid estilo Instagram
- Newsletter em fundo escuro

## Stack

- **React 18 + TypeScript** — componentes tipados
- **Tailwind CSS 3** — utility-first
- **Framer Motion 11** — cursor, reveals, spring animations
- **Vite 5** — build rápido
- **react-icons/lu** — ícones Lucide

## Instalação

```bash
git clone https://github.com/CleissonV/lp-ecommerce-moda
cd lp-ecommerce-moda
npm install
npm run dev
```

## Estrutura

```
src/
├── constants/
│   └── data.ts          # produtos, categorias, valores, footer
├── types/
│   └── index.ts         # Product, Category, Value, FooterColumn
├── components/
│   └── ui/
│       ├── BlendCursor.tsx
│       ├── LineReveal.tsx
│       ├── Reveal.tsx
│       ├── ProductCard.tsx
│       └── CategoryTile.tsx
├── sections/
│   ├── AnnouncementBar.tsx
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Marquee.tsx
│   ├── Categories.tsx
│   ├── Collection.tsx
│   ├── Editorial.tsx
│   ├── BrandStory.tsx
│   ├── Benefits.tsx
│   ├── Instagram.tsx
│   ├── Newsletter.tsx
│   └── Footer.tsx
└── App.tsx
```

---

Desenvolvido por [Cleisson Vilela](https://github.com/CleissonV)
