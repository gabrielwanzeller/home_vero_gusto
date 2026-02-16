export interface NavItem {
  name: string
  href: string
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const navigation: NavSection[] = [
  {
    title: "Vero Gusto Foundation",
    items: [
      { name: "Design Tokens", href: "/styleguide" },
    ]
  },
  {
    title: "Components",
    items: [
      { name: "Button", href: "/styleguide#buttons" },
      { name: "Card", href: "/styleguide#cards" },
      { name: "Badge", href: "/styleguide#badges" },
      { name: "Alert", href: "/styleguide#alerts" },
      { name: "Inputs", href: "/styleguide#inputs" },
      { name: "Accordion", href: "/styleguide#accordion" },
    ]
  }
]
