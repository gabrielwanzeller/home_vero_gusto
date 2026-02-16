import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function InputShowcase() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-display font-bold uppercase mb-4">Input & Label</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Form elements designed for high visibility and clear interaction.
        </p>
      </div>

      {/* WHITE MODE CONTEXT */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-gray-500">White Mode Context</h2>
        <div className="p-12 border-2 border-dashed border-gray-200 rounded-xl bg-white space-y-8 max-w-xl">
          
          <div className="space-y-4">
             <div className="grid w-full items-center gap-2">
                <Label htmlFor="email" mode="white">Email Address</Label>
                <Input type="email" id="email" placeholder="name@example.com" mode="white" />
            </div>
            
             <div className="grid w-full items-center gap-2">
                <Label htmlFor="text" mode="white">Full Name</Label>
                <Input type="text" id="text" placeholder="John Doe" mode="white" />
            </div>

             <div className="grid w-full items-center gap-2">
                <Label htmlFor="disabled" mode="white">Disabled Input</Label>
                <Input type="text" id="disabled" placeholder="Disabled" disabled mode="white" />
            </div>
          </div>

        </div>
      </section>

      {/* RED MODE CONTEXT */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-red-600">Red Mode Context</h2>
        <div className="p-12 border-2 border-dashed border-red-800/20 rounded-xl bg-brand-red space-y-8 max-w-xl">
          
           <div className="space-y-4">
             <div className="grid w-full items-center gap-2">
                <Label htmlFor="email-red" mode="red">Email Address</Label>
                <Input type="email" id="email-red" placeholder="name@example.com" mode="red" />
            </div>

            <div className="flex gap-2 items-end">
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="coupon" mode="red">Coupon Code</Label>
                     <Input type="text" id="coupon" placeholder="SNACKS20" mode="red" />
                </div>
                <Button mode="red" variant="primary">Apply</Button>
            </div>
          </div>

        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-gray-500">Usage</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
{`import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// White Mode
<div className="grid gap-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" placeholder="Email" />
</div>

// Red Mode
<div className="grid gap-2">
  <Label htmlFor="email" mode="red">Email</Label>
  <Input id="email" mode="red" placeholder="Email" />
</div>`}
        </div>
      </section>
    </div>
  )
}
