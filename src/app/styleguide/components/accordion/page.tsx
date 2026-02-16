import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionShowcase() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-display font-bold uppercase mb-4">Accordion</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Vertically stacked set of interactive headings.
        </p>
      </div>

      {/* WHITE MODE CONTEXT */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-gray-500">White Mode Context</h2>
        <div className="p-12 border-2 border-dashed border-gray-200 rounded-xl bg-white space-y-8 max-w-2xl">
            <Accordion type="single" collapsible className="w-full" mode="white">
                <AccordionItem value="item-1" mode="white">
                    <AccordionTrigger>Is the dough gluten-free?</AccordionTrigger>
                    <AccordionContent>
                    No, our traditional dough contains gluten. We do offer a gluten-free crust option upon request.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" mode="white">
                    <AccordionTrigger>Do you deliver?</AccordionTrigger>
                    <AccordionContent>
                    Yes, we cater events within a 50km radius of the city center.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" mode="white">
                    <AccordionTrigger>How much notice do you need?</AccordionTrigger>
                    <AccordionContent>
                    We require at least 48 hours notice for large catering orders.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
      </section>

      {/* RED MODE CONTEXT */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-red-600">Red Mode Context</h2>
        <div className="p-12 border-2 border-dashed border-red-800/20 rounded-xl bg-brand-red space-y-8 max-w-2xl">
            <Accordion type="single" collapsible className="w-full" mode="red">
                <AccordionItem value="item-1" mode="red">
                    <AccordionTrigger>Nutritional Info</AccordionTrigger>
                    <AccordionContent>
                    All our nutritional information is available on our website and upon request.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" mode="red">
                    <AccordionTrigger>Allergy Advice</AccordionTrigger>
                    <AccordionContent>
                    Please inform our staff of any allergies before ordering. We handle nuts in our kitchen.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
      </section>
    </div>
  )
}
