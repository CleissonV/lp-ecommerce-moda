import {
  LuLeaf, LuGem, LuScissors, LuInfinity,
  LuTruck, LuRefreshCw, LuHeadphones,
} from 'react-icons/lu'
import type { Product, Category, Value, FooterColumn, InstagramPost, Benefit } from '../types'

export const products: Product[] = [
  {
    id: 1,
    name: 'Vestido Seda Midi',
    price: 'R$ 1.890',
    original: null,
    tag: 'Novo',
    badge: 'Novo',
    color: 'Champagne',
    sizes: ['P', 'M', 'G'],
    image: 'https://images.unsplash.com/photo-1603189343302-e603f7add05a?w=700&q=80&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&q=80&auto=format&fit=crop',
    category: 'Vestidos',
  },
  {
    id: 2,
    name: 'Blazer Structured',
    price: 'R$ 2.340',
    original: 'R$ 2.890',
    tag: 'Sale',
    badge: 'Sale',
    color: 'Preto',
    sizes: ['P', 'M', 'G', 'GG'],
    image: 'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?w=700&q=80&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700&q=80&auto=format&fit=crop',
    category: 'Alfaiataria',
  },
  {
    id: 3,
    name: 'Calça Wide Leg Linho',
    price: 'R$ 1.290',
    original: null,
    tag: 'Destaque',
    badge: 'Destaque',
    color: 'Areia',
    sizes: ['P', 'M', 'G'],
    image: 'https://images.unsplash.com/photo-1562151270-c7d22ceb586a?w=700&q=80&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=700&q=80&auto=format&fit=crop',
    category: 'Essenciais',
  },
  {
    id: 4,
    name: 'Blusa Seda Slip',
    price: 'R$ 890',
    original: null,
    tag: 'Novo',
    badge: 'Novo',
    color: 'Nude',
    sizes: ['PP', 'P', 'M', 'G'],
    image: 'https://images.unsplash.com/photo-1596993100471-c3905dafa78e?w=700&q=80&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=700&q=80&auto=format&fit=crop',
    category: 'Essenciais',
  },
  {
    id: 5,
    name: 'Saia Midi Plissada',
    price: 'R$ 1.190',
    original: 'R$ 1.490',
    tag: 'Sale',
    badge: 'Sale',
    color: 'Terracota',
    sizes: ['P', 'M', 'G'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=700&q=80&auto=format&fit=crop',
    category: 'Vestidos',
  },
  {
    id: 6,
    name: 'Conjunto Cropped',
    price: 'R$ 1.650',
    original: null,
    tag: 'Exclusivo',
    badge: 'Exclusivo',
    color: 'Marfim',
    sizes: ['P', 'M'],
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=80&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=80&auto=format&fit=crop',
    category: 'Essenciais',
  },
]

export const categories: Category[] = [
  {
    name: 'Vestidos',
    label: 'Vestidos',
    count: '24 peças',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900&q=80&auto=format&fit=crop',
    img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900&q=80&auto=format&fit=crop',
    link: '#colecao',
  },
  {
    name: 'Alfaiataria',
    label: 'Alfaiataria',
    count: '18 peças',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&q=80&auto=format&fit=crop',
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&q=80&auto=format&fit=crop',
    link: '#colecao',
  },
  {
    name: 'Essenciais',
    label: 'Essenciais',
    count: '32 peças',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=900&q=80&auto=format&fit=crop',
    img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=900&q=80&auto=format&fit=crop',
    link: '#colecao',
  },
]

export const lookbookImages: string[] = [
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544441893-675973e31985?w=500&q=80&auto=format&fit=crop',
]

export const values: Value[] = [
  { icon: LuLeaf, title: 'Sustentável', desc: 'Tecidos de origem responsável e certificada.' },
  { icon: LuGem, title: 'Exclusivo', desc: 'Edições limitadas — nunca reposição em massa.' },
  { icon: LuScissors, title: 'Artesanal', desc: 'Costura por mãos brasileiras especializadas.' },
  { icon: LuInfinity, title: 'Atemporal', desc: 'Peças que atravessam estações e tendências.' },
]

export const benefits: Benefit[] = [
  { icon: LuTruck, text: 'Frete grátis acima de R$ 500' },
  { icon: LuRefreshCw, text: 'Troca em 30 dias' },
  { icon: LuHeadphones, text: 'Atendimento VIP' },
]

export const footerCols: FooterColumn[] = [
  { title: 'Comprar', links: ['Novidades', 'Coleções', 'Sale', 'Editorial'] },
  { title: 'Ajuda', links: ['Tamanhos', 'Trocas', 'Frete', 'Contato'] },
  { title: 'Empresa', links: ['Sobre', 'Sustentabilidade', 'Imprensa', 'Afiliados'] },
]

export const instagramPosts: InstagramPost[] = lookbookImages.map((src, i) => ({
  src,
  alt: `lookbook ${i + 1}`,
}))

export const instaLikes: string[] = ['2.4k', '1.8k', '3.1k', '4.2k', '2.9k', '1.6k']

export const navLinks: string[] = ['Novidades', 'Coleções', 'Sale', 'Editorial', 'Sobre']
