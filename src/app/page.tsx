import { RestaurantDashboard } from "@/components/restaurant-dashboard"
import { restaurantData } from "@/data/restaurant-data"

export default function Page() {
  return <RestaurantDashboard data={restaurantData} />;
} 