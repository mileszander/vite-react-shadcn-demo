import { RestaurantDashboard } from "@/components/restaurant-dashboard"
import { restaurantData } from "@/data/restaurant-data"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <RestaurantDashboard data={restaurantData} />
    </div>
  )
}

export default App
