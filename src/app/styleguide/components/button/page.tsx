import { Button } from "@/components/ui/button"

export default function ButtonShowcase() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-display font-bold uppercase mb-4">Button</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The primary interactive element for the Vero Gusto interface.
          Features hard shadows, thick borders, and distinct White/Red modes.
        </p>
      </div>

      {/* WHITE MODE CONTEXT */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-gray-500">White Mode Context</h2>
        <div className="p-12 border-2 border-dashed border-gray-200 rounded-xl bg-white space-y-8">
          
          <div className="space-y-4">
            <h3 className="font-bold text-sm text-gray-400 uppercase">Variants</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button mode="white" variant="primary">Primary</Button>
              <Button mode="white" variant="secondary">Secondary</Button>
              <Button mode="white" variant="outline">Outline</Button>
              <Button mode="white" variant="ghost">Ghost</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-sm text-gray-400 uppercase">Sizes</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button mode="white" size="sm">Small</Button>
              <Button mode="white" size="default">Default</Button>
              <Button mode="white" size="lg">Large</Button>
              <Button mode="white" size="icon">icon</Button>
            </div>
          </div>

          <div className="space-y-4">
             <h3 className="font-bold text-sm text-gray-400 uppercase">States</h3>
             <div className="flex flex-wrap gap-4 items-center">
                <Button mode="white" disabled>Disabled</Button>
             </div>
          </div>

        </div>
      </section>

      {/* RED MODE CONTEXT */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-red-600">Red Mode Context</h2>
        <div className="p-12 border-2 border-dashed border-red-800/20 rounded-xl bg-brand-red space-y-8">
          
          <div className="space-y-4">
            <h3 className="font-bold text-sm text-white/50 uppercase">Variants</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button mode="red" variant="primary">Primary</Button>
              <Button mode="red" variant="secondary">Secondary</Button>
              <Button mode="red" variant="outline">Outline</Button>
              <Button mode="red" variant="ghost">Ghost</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-sm text-white/50 uppercase">Sizes</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button mode="red" size="sm">Small</Button>
              <Button mode="red" size="default">Default</Button>
              <Button mode="red" size="lg">Large</Button>
              <Button mode="red" size="icon">icon</Button>
            </div>
          </div>

           <div className="space-y-4">
             <h3 className="font-bold text-sm text-white/50 uppercase">States</h3>
             <div className="flex flex-wrap gap-4 items-center">
                <Button mode="red" disabled>Disabled</Button>
             </div>
          </div>

        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-gray-500">Usage</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
{`import { Button } from "@/components/ui/button"

// Standard on White Background
<Button variant="primary">Click Me</Button>

// Standard on Red Background
<Button mode="red" variant="primary">Click Me</Button>

// Secondary/Outline
<Button variant="outline">Learn More</Button>
`}
        </div>
      </section>
    </div>
  )
}
