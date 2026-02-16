import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export default function AlertShowcase() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-display font-bold uppercase mb-4">Alert</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Important messages and notifications.
        </p>
      </div>

      {/* WHITE MODE CONTEXT */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-gray-500">White Mode Context</h2>
        <div className="p-12 border-2 border-dashed border-gray-200 rounded-xl bg-white space-y-8 max-w-xl">
             <Alert mode="white">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                We are currently fully booked for this weekend.
                </AlertDescription>
            </Alert>
        </div>
      </section>

      {/* RED MODE CONTEXT */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-red-600">Red Mode Context</h2>
        <div className="p-12 border-2 border-dashed border-red-800/20 rounded-xl bg-brand-red space-y-8 max-w-xl">
            <Alert mode="red">
                <Terminal className="h-4 w-4" />
                <AlertTitle>New Feature</AlertTitle>
                <AlertDescription>
                Red mode alerts pop with white text on a red background.
                </AlertDescription>
            </Alert>
        </div>
      </section>
    </div>
  )
}
