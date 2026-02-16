import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Pizza } from "lucide-react"

export default function CardShowcase() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-display font-bold uppercase mb-4">Card</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Container for grouped content. Features significant depth and clear spacing.
        </p>
      </div>

      {/* WHITE MODE CONTEXT */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-gray-500">White Mode Context</h2>
        <div className="p-12 border-2 border-dashed border-gray-200 rounded-xl bg-white space-y-8">
          
          <div className="flex flex-wrap gap-8">
            <Card className="w-[350px]" mode="white">
                <CardHeader>
                    <CardTitle>Margherita</CardTitle>
                    <CardDescription>Classic Tomato & Mozzarella</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-4">
                        <Pizza className="w-12 h-12 text-gray-400" />
                    </div>
                    <p className="text-sm">
                        San Marzano tomato sauce, fresh mozzarella di bufala, basil, extra virgin olive oil.
                    </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">Details</Button>
                    <Button size="sm">Add</Button>
                </CardFooter>
            </Card>

             <Card className="w-[350px] border-dashed" mode="white">
                <CardHeader>
                    <CardTitle className="text-muted-foreground">Empty State</CardTitle>
                </CardHeader>
                <CardContent className="h-32 flex items-center justify-center text-muted-foreground bg-gray-50 rounded-md">
                   No items
                </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* RED MODE CONTEXT */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-red-600">Red Mode Context</h2>
        <div className="p-12 border-2 border-dashed border-red-800/20 rounded-xl bg-brand-red space-y-8">
          
           <div className="flex flex-wrap gap-8">
            <Card className="w-[350px]" mode="red">
                <CardHeader>
                    <CardTitle>Pepperoni</CardTitle>
                    <CardDescription className="text-white/70">Spicy & Savory</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video bg-white/10 rounded-md flex items-center justify-center mb-4">
                        <Pizza className="w-12 h-12 text-white/50" />
                    </div>
                    <p className="text-sm">
                        Double pepperoni, mozzarella, chili honey drizzle.
                    </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                   <Button mode="red" variant="outline" size="sm">Details</Button>
                   <Button mode="red" size="sm">Add</Button>
                </CardFooter>
            </Card>
          </div>

        </div>
      </section>

       <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-gray-500">Usage</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
{`import { Card } from "@/components/ui/card"

// White Mode
<Card mode="white">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
</Card>

// Red Mode
<Card mode="red">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
</Card>`}
        </div>
      </section>
    </div>
  )
}
