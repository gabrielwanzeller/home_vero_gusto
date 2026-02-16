import { Badge } from "@/components/ui/badge"

export default function BadgeShowcase() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-display font-bold uppercase mb-4">Badge</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Status indicators and labels.
        </p>
      </div>

      {/* WHITE MODE CONTEXT */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-gray-500">White Mode Context</h2>
        <div className="p-12 border-2 border-dashed border-gray-200 rounded-xl bg-white space-y-8">
            <div className="flex flex-wrap gap-4">
                <Badge mode="white" variant="primary">Primary</Badge>
                <Badge mode="white" variant="outline">Outline</Badge>
            </div>
        </div>
      </section>

      {/* RED MODE CONTEXT */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-red-600">Red Mode Context</h2>
        <div className="p-12 border-2 border-dashed border-red-800/20 rounded-xl bg-brand-red space-y-8">
           <div className="flex flex-wrap gap-4">
                <Badge mode="red" variant="primary">New</Badge>
                <Badge mode="red" variant="outline">Archive</Badge>
            </div>
        </div>
      </section>
    </div>
  )
}
