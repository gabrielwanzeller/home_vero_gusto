import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Terminal, Pizza, Check, AlertCircle } from "lucide-react"

export default function StyleguidePage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Colors */}
      <section id="colors" className="space-y-6">
        <h2 className="text-3xl font-display font-bold uppercase border-b border-border pb-2">Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="h-24 bg-primary rounded-md shadow-hard border border-black/10 flex items-center justify-center">
              <span className="text-primary-foreground font-bold">Primary (Red)</span>
            </div>
            <p className="text-sm text-muted-foreground">#DC2626 - Main Actions</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-brand-green rounded-md shadow-hard border border-black/10 flex items-center justify-center">
              <span className="text-brand-green-foreground font-bold">Brand Green</span>
            </div>
            <p className="text-sm text-muted-foreground">#00601F - Accents & Badges</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-white rounded-md shadow-hard border border-gray-200 flex items-center justify-center">
              <span className="text-black font-bold">White</span>
            </div>
            <p className="text-sm text-muted-foreground">#FFFFFF - Backgrounds</p>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section id="typography" className="space-y-6">
        <h2 className="text-3xl font-display font-bold uppercase border-b border-border pb-2">Typography</h2>
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-6xl font-display font-bold text-primary">Heading Display XL</h1>
            <p className="text-muted-foreground">Oswald Bold 600/700 - Uppercase</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-display font-bold">Heading Display L</h2>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-display font-bold">Heading Display M</h3>
          </div>
          <div className="space-y-2 border-l-4 border-brand-green pl-4">
            <p className="text-lg">Body Text (Large)</p>
            <p className="max-w-prose">
              Inter Regular. Vero Gusto represents the authentic taste of Italian pizza delivered to your event.
              Our dough is fermented for 48 hours for maximum flavor and lightness.
            </p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section id="buttons" className="space-y-6">
        <h2 className="text-3xl font-display font-bold uppercase border-b border-border pb-2">Buttons</h2>
        <div className="flex flex-wrap gap-4 items-end">
          <Button variant="primary" size="lg" className="rounded-full font-display text-lg px-8 shadow-hard hover:translate-y-1 hover:shadow-none transition-all">
            Order Now
          </Button>
          <Button variant="primary" size="default" className="rounded-full font-display shadow-hard">
            Default Button
          </Button>
          <Button variant="secondary" className="rounded-full font-display">
            Secondary
          </Button>
          <Button variant="outline" className="rounded-full font-display border-2">
            Outline
          </Button>
          <Button variant="ghost" className="font-display">
            Ghost
          </Button>
          <Button variant="primary" className="rounded-full font-display shadow-hard bg-red-800 border-red-900">
            Destructive (Custom)
          </Button>
        </div>
      </section>

      {/* Cards */}
      <section id="cards" className="space-y-6">
        <h2 className="text-3xl font-display font-bold uppercase border-b border-border pb-2">Cards</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-hard border-2 border-border">
            <CardHeader>
              <CardTitle className="font-display text-2xl uppercase">Margherita</CardTitle>
              <CardDescription>The classic queen of pizzas.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                <Pizza className="w-12 h-12 text-muted-foreground" />
              </div>
              <p>Tomato sauce, fresh mozzarella, basil, extra virgin olive oil.</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Badge variant="outline" className="border-brand-green text-brand-green bg-green-50">Vegetarian</Badge>
              <Button size="sm" className="rounded-full font-display">Add</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Badges */}
      <section id="badges" className="space-y-6">
        <h2 className="text-3xl font-display font-bold uppercase border-b border-border pb-2">Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary">Primary</Badge>
          <Badge mode="white" variant="primary" className="bg-brand-green border-brand-green text-white">Brand Green</Badge>
          <Badge variant="outline">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="primary" className="bg-destructive text-white border-destructive">Destructive</Badge>
        </div>
      </section>

      {/* Alerts */}
      <section id="alerts" className="space-y-6">
        <h2 className="text-3xl font-display font-bold uppercase border-b border-border pb-2">Alerts</h2>
        <div className="grid gap-4">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              We are currently fully booked for this weekend.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive" className="bg-destructive/10 border-destructive/20 text-destructive-foreground">
            <AlertCircle className="h-4 w-4 text-destructive" />
            <AlertTitle className="text-destructive font-bold">Error</AlertTitle>
            <AlertDescription className="text-destructive">
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Inputs & Forms */}
      <section id="inputs" className="space-y-6">
        <h2 className="text-3xl font-display font-bold uppercase border-b border-border pb-2">Inputs</h2>
        <div className="space-y-4 max-w-sm">
            <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                </label>
                <Input type="email" placeholder="Email" />
            </div>
            
            <div className="space-y-2">
                 <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Choose Flavor
                </label>
                <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <label htmlFor="option-one" className="text-sm">Margherita</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <label htmlFor="option-two" className="text-sm">Pepperoni</label>
                    </div>
                </RadioGroup>
            </div>
        </div>
      </section>
      
       {/* Accordion */}
      <section id="accordion" className="space-y-6">
        <h2 className="text-3xl font-display font-bold uppercase border-b border-border pb-2">Accordion</h2>
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="font-display uppercase text-lg">Is the dough gluten-free?</AccordionTrigger>
                <AccordionContent>
                No, our traditional dough contains gluten. We do offer a gluten-free crust option upon request.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="font-display uppercase text-lg">Do you deliver?</AccordionTrigger>
                <AccordionContent>
                Yes, we cater events within a 50km radius of the city center.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </section>

      {/* Button Strategy */ }
      <section id="button-strategy" className="space-y-6">
        <h2 className="text-3xl font-display font-bold uppercase border-b border-border pb-2">Button Strategy</h2>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl border border-border space-y-4">
                <h3 className="font-bold text-lg text-gray-500 uppercase tracking-widest">White Background</h3>
                <p className="text-sm text-gray-400">Use <span className="text-primary font-bold">Primary Red</span> buttons.</p>
                <div className="h-24 flex items-center justify-center bg-white rounded-lg border border-dashed border-gray-200">
                    <Button size="lg" className="rounded-full shadow-hard font-display uppercase">Primary Action</Button>
                </div>
            </div>
             <div className="bg-brand-red p-8 rounded-xl space-y-4">
                <h3 className="font-bold text-lg text-white/70 uppercase tracking-widest">Red Background</h3>
                <p className="text-sm text-white/50">Use <span className="text-white font-bold">White</span> buttons.</p>
                <div className="h-24 flex items-center justify-center bg-brand-red rounded-lg border border-dashed border-white/20">
                    <Button mode="red" size="lg" className="rounded-full shadow-hard font-display uppercase text-red-600">Primary Action</Button>
                </div>
            </div>
        </div>
      </section>

      {/* Red Mode */ }
      <section id = "red-mode" className = "space-y-6" >
        <h2 className="text-3xl font-display font-bold uppercase border-b border-border pb-2">Red Mode (Snaxx Style)</h2>
        <div className="bg-brand-red p-12 rounded-xl text-on-red space-y-12">
            
            {/* Header Example */}
            <div className="text-center space-y-4">
                <h3 className="text-6xl font-display font-bold uppercase tracking-tight">Feed Your Feed</h3>
                <p className="text-xl max-w-lg mx-auto opacity-90">
                    Get 15% off your first order. Be the first to know and receive in-depth articles about Vero Gusto.
                </p>
                 <div className="flex max-w-md mx-auto gap-2">
                    <Input placeholder="Enter Your Email..." className="bg-white text-black placeholder:text-gray-400 border-transparent h-12" />
                    <Button mode="red" className="h-12 px-8 rounded-full font-bold uppercase tracking-wider text-red-600">Subscribe</Button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Add to Cart Example */}
                <div className="border-2 border-white rounded-xl p-8 space-y-6">
                     <h4 className="text-3xl font-display font-bold uppercase">12 Pack</h4>
                     <div className="flex gap-4 h-16">
                        <div className="w-24 h-full border-2 border-white rounded-lg flex items-center justify-center text-3xl font-bold">
                            1
                        </div>
                        <Button mode="red" className="flex-1 h-full text-2xl font-display font-bold uppercase text-red-600 hover:bg-white/90">
                            Add to Cart
                        </Button>
                     </div>
                </div>

                {/* Values List Example */}
                <div className="space-y-0 divide-y divide-white/30">
                    <div className="py-6 flex gap-6 items-start">
                        <span className="text-2xl font-bold opacity-60">/01</span>
                        <div className="space-y-2">
                            <h4 className="text-2xl font-display font-bold uppercase">Bold by Default</h4>
                            <p className="opacity-90">Flavor comes first. We don't believe bold flavor should be optional.</p>
                        </div>
                    </div>
                     <div className="py-6 flex gap-6 items-start">
                        <span className="text-2xl font-bold opacity-60">/02</span>
                        <div className="space-y-2">
                            <h4 className="text-2xl font-display font-bold uppercase">Keep It Simple</h4>
                            <p className="opacity-90">No overthinking required. Snacking should feel easy.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </section>

      {/* White Mode */ }
      <section id = "white-mode" className = "space-y-6" >
        <h2 className="text-3xl font-display font-bold uppercase border-b border-border pb-2">White Mode (Content)</h2>
        <div className="bg-white p-12 rounded-xl border border-gray-100 shadow-sm text-foreground space-y-12">
            
            {/* Header Example */}
            <div className="text-center space-y-4">
                <h3 className="text-6xl font-display font-bold uppercase tracking-tight text-primary">Feed Your Feed</h3>
                <p className="text-xl max-w-lg mx-auto text-muted-foreground">
                    Get 15% off your first order. Be the first to know and receive in-depth articles about Vero Gusto.
                </p>
                 <div className="flex max-w-md mx-auto gap-2">
                    <Input placeholder="Enter Your Email..." className="h-12" />
                    <Button size="lg" className="h-12 px-8 rounded-full font-bold uppercase tracking-wider shadow-hard">Subscribe</Button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Add to Cart Example */}
                <div className="border border-border rounded-xl p-8 space-y-6 bg-gray-50/50">
                     <h4 className="text-3xl font-display font-bold uppercase text-primary">12 Pack</h4>
                     <div className="flex gap-4 h-16">
                        <div className="w-24 h-full border border-border bg-white rounded-lg flex items-center justify-center text-3xl font-bold text-foreground">
                            1
                        </div>
                        <Button className="flex-1 h-full text-2xl font-display font-bold uppercase shadow-hard hover:translate-y-1 hover:shadow-none transition-all">
                            Add to Cart
                        </Button>
                     </div>
                </div>

                {/* Values List Example */}
                <div className="space-y-0 divide-y divide-border">
                    <div className="py-6 flex gap-6 items-start">
                        <span className="text-2xl font-bold text-primary opacity-80">/01</span>
                        <div className="space-y-2">
                            <h4 className="text-2xl font-display font-bold uppercase text-foreground">Bold by Default</h4>
                            <p className="text-muted-foreground">Flavor comes first. We don't believe bold flavor should be optional.</p>
                        </div>
                    </div>
                     <div className="py-6 flex gap-6 items-start">
                        <span className="text-2xl font-bold text-primary opacity-80">/02</span>
                        <div className="space-y-2">
                            <h4 className="text-2xl font-display font-bold uppercase text-foreground">Keep It Simple</h4>
                            <p className="text-muted-foreground">No overthinking required. Snacking should feel easy.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </section>
    </div>
  )
}
