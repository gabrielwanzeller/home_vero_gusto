import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioGroupShowcase() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-display font-bold uppercase mb-4">Radio Group</h1>
        <p className="text-lg text-muted-foreground mb-8">
          A set of checkable buttons—known as radio buttons.
        </p>
      </div>

      {/* WHITE MODE CONTEXT */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-gray-500">White Mode Context</h2>
        <div className="p-12 border-2 border-dashed border-gray-200 rounded-xl bg-white space-y-8">
             <RadioGroup defaultValue="comfortable" mode="white">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" mode="white" />
                    <Label htmlFor="r1" mode="white">Default</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" mode="white" />
                    <Label htmlFor="r2" mode="white">Comfortable</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r3" mode="white" />
                    <Label htmlFor="r3" mode="white">Compact</Label>
                </div>
            </RadioGroup>
        </div>
      </section>

      {/* RED MODE CONTEXT */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-red-600">Red Mode Context</h2>
        <div className="p-12 border-2 border-dashed border-red-800/20 rounded-xl bg-brand-red space-y-8">
            <RadioGroup defaultValue="option-one" mode="red">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one-red" mode="red" />
                    <Label htmlFor="option-one-red" mode="red">Margherita</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two-red" mode="red" />
                    <Label htmlFor="option-two-red" mode="red">Pepperoni</Label>
                </div>
            </RadioGroup>
        </div>
      </section>
    </div>
  )
}
