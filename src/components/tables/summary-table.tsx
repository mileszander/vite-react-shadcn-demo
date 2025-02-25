import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SummaryTableProps {
  data: {
    name: string;
    mainClass: string;
    googleStatus: string;
    validatedBusiness: boolean;
  }
}

export function SummaryTable({ data }: SummaryTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="text-sm font-medium">Name</div>
            <div>{data.name}</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium">Main Class</div>
            <div>{data.mainClass}</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium">Google Status</div>
            <div>{data.googleStatus}</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium">Validated Business</div>
            <div>{data.validatedBusiness ? "Yes" : "No"}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 