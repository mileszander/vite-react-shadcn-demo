import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RestaurantData } from "@/data/restaurant-data"
import { Badge } from "@/components/ui/badge"

interface RestaurantDashboardProps {
  data: RestaurantData;
}

export function RestaurantDashboard({ data }: RestaurantDashboardProps) {
  return (
    <div className="container mx-auto py-6">
      <Tabs defaultValue="venue-summary" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="venue-summary">Venue Summary</TabsTrigger>
          <TabsTrigger value="sales-detail">Sales Detail</TabsTrigger>
        </TabsList>
        
        <TabsContent value="venue-summary" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Summary Card */}
            <Card>
              <CardHeader>
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Name</td>
                      <td className="py-2 px-4">{data.summary.name}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Main Class</td>
                      <td className="py-2 px-4 text-blue-500">{data.venueQualities.mainClass}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Google Status</td>
                      <td className="py-2 px-4">{data.summary.googleStatus}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium">Validated Business</td>
                      <td className="py-2 px-4">{data.summary.validatedBusiness ? "TRUE" : "FALSE"}</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* Venue Qualities Card */}
            <Card>
              <CardHeader>
                <CardTitle>Venue Qualities</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Main Class</td>
                      <td className="py-2 px-4 text-blue-500">{data.venueQualities.mainClass}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Serves Food</td>
                      <td className="py-2 px-4">{data.venueQualities.servesFood ? "TRUE" : "FALSE"}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Chain Status</td>
                      <td className="py-2 px-4 text-blue-500">{data.venueQualities.chainStatus}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Food Genre</td>
                      <td className="py-2 px-4 text-blue-500">{data.venueQualities.foodGenre}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Activity Focus</td>
                      <td className="py-2 px-4">{data.venueQualities.activityFocus || "-"}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Bar Type</td>
                      <td className="py-2 px-4">{data.venueQualities.barType}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Service Style</td>
                      <td className="py-2 px-4">{data.venueQualities.serviceStyle}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium">Price Category</td>
                      <td className="py-2 px-4">{data.venueQualities.priceCategory}</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* Review Summary Card */}
            <Card className="row-span-2">
              <CardHeader>
                <CardTitle>Review Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Type</td>
                      <td className="py-2 px-4">{data.reviewSummary.type}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Cuisine</td>
                      <td className="py-2 px-4">{data.reviewSummary.cuisine.join(", ")}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Menu Items</td>
                      <td className="py-2 px-4">{data.reviewSummary.menuItems.join(", ")}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Service Style</td>
                      <td className="py-2 px-4">{data.reviewSummary.serviceStyle}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Atmosphere</td>
                      <td className="py-2 px-4">{data.reviewSummary.atmosphere.join(", ")}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Price Range</td>
                      <td className="py-2 px-4">{data.reviewSummary.priceRange}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium"># of Reviews</td>
                      <td className="py-2 px-4">{data.reviewSummary.totalReviews}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Avg Rating</td>
                      <td className="py-2 px-4">{data.reviewSummary.avgRating}</td>
                    </tr>
                    <tr>
                      <td colSpan={3} className="py-2 px-4">
                        <table className="w-full">
                          <thead>
                            <tr>
                              <th className="text-left">Stars</th>
                              <th className="text-right">#</th>
                              <th className="text-right">%</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(data.reviewSummary.starDistribution).map(([stars, info]) => (
                              <tr key={stars}>
                                <td className="text-left">{stars}</td>
                                <td className="text-right">{info.count}</td>
                                <td className="text-right">{info.percentage.toFixed(1)}%</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* Address Card */}
            <Card>
              <CardHeader>
                <CardTitle>Address</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Street</td>
                      <td className="py-2 px-4">{data.address.street}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">City</td>
                      <td className="py-2 px-4">{data.address.city}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Zip Code</td>
                      <td className="py-2 px-4">{data.address.zipCode}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium">Neighborhood</td>
                      <td className="py-2 px-4">{data.address.neighborhood}</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* Meals Served Card */}
            <Card>
              <CardHeader>
                <CardTitle>Meals Served</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Breakfast</td>
                      <td className="py-2 px-4">{data.mealsServed.breakfast ? "Yes" : "No"}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Lunch</td>
                      <td className="py-2 px-4">{data.mealsServed.lunch ? "Yes" : "No"}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Brunch</td>
                      <td className="py-2 px-4">{data.mealsServed.brunch ? "Yes" : "No"}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Dinner</td>
                      <td className="py-2 px-4">{data.mealsServed.dinner ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium">Late Night</td>
                      <td className="py-2 px-4">{data.mealsServed.lateNight ? "Yes" : "No"}</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* Working Hours Card */}
            <Card>
              <CardHeader>
                <CardTitle>Working Hours</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Days Open</td>
                      <td className="py-2 px-4">{data.workingHours.daysOpen} days</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Hours Open Weekly</td>
                      <td className="py-2 px-4">{data.workingHours.hoursOpenWeekly} hours</td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="p-0">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="py-2 px-4 text-left">Day</th>
                              <th className="py-2 px-4 text-right">Hours</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(data.workingHours.schedule).map(([day, hours]) => (
                              <tr key={day} className="border-b last:border-0">
                                <td className="py-2 px-4">{day}</td>
                                <td className="py-2 px-4 text-right">{hours}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* External Links Card */}
            <Card>
              <CardHeader>
                <CardTitle>External Links</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <a href={data.externalLinks.website} className="text-blue-500 hover:underline">
                      Website
                    </a>
                  </li>
                  <li>
                    <a href={data.externalLinks.googleMap} className="text-blue-500 hover:underline">
                      Google Map
                    </a>
                  </li>
                  <li>
                    <a href={data.externalLinks.reviews} className="text-blue-500 hover:underline">
                      Reviews
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="sales-detail">
          <Card>
            <CardHeader>
              <CardTitle>Sales Detail</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Sales detail information will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 