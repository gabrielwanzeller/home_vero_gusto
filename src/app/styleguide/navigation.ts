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
      { name: "Button", href: "/styleguide/components/button" },
      { name: "Input & Label", href: "/styleguide/components/input" },
      { name: "Card", href: "/styleguide/components/card" },
      { name: "Button Strategy", href: "/styleguide#button-strategy" },
      { name: "Badge", href: "/styleguide/components/badge" },
      { name: "Alert", href: "/styleguide/components/alert" },
      { name: "Accordion", href: "/styleguide/components/accordion" },
      { name: "Radio Group", href: "/styleguide/components/radio-group" },
      { name: "Button Strategy", href: "/styleguide#button-strategy" },
    ]
  }
]
