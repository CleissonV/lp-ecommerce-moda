export interface Product {
  id: number
  name: string
  price: string
  original?: string | null
  badge?: string
  tag?: string
  color?: string
  sizes?: string[]
  image: string
  hoverImage: string
  category: string
}

export interface Category {
  name: string
  label?: string
  count?: string
  image: string
  img?: string
  link: string
}

export interface Value {
  title: string
  desc: string
  icon?: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
}

export interface FooterColumn {
  title: string
  links: string[]
}

export interface InstagramPost {
  src: string
  alt: string
}

export interface Benefit {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
  text: string
}
