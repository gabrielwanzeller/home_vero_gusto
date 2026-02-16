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
          <Button size="lg" className="rounded-full font-display text-lg px-8 shadow-hard hover:translate-y-1 hover:shadow-none transition-all">
            Order Now
          </Button>
          <Button size="default" className="rounded-full font-display shadow-hard">
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
          <Button variant="destructive" className="rounded-full font-display shadow-hard">
            Destructive
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
          <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Primary</Badge>
          <Badge className="bg-brand-green text-brand-green-foreground hover:bg-brand-green/90">Brand Green</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
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
    </div>
  )
}
