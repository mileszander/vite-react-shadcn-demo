export interface RestaurantData {
  summary: {
    name: string;
    mainClass: string;
    googleStatus: string;
    validatedBusiness: boolean;
  };
  address: {
    street: string;
    city: string;
    zipCode: string;
    neighborhood: string;
  };
  venueQualities: {
    mainClass: string;
    servesFood: boolean;
    chainStatus: string;
    foodGenre: string;
    activityFocus: string;
    barType: string;
    serviceStyle: string;
    priceCategory: string;
  };
  mealsServed: {
    breakfast: boolean;
    lunch: boolean;
    brunch: boolean;
    dinner: boolean;
    lateNight: boolean;
  };
  workingHours: {
    daysOpen: number;
    hoursOpenWeekly: number;
    schedule: {
      [key: string]: string;
    };
  };
  reviewSummary: {
    type: string;
    cuisine: string[];
    menuItems: string[];
    serviceStyle: string;
    atmosphere: string[];
    priceRange: string;
    totalReviews: number;
    avgRating: number;
    starDistribution: {
      [key: string]: {
        count: number;
        percentage: number;
      };
    };
  };
  externalLinks: {
    website: string;
    googleMap: string;
    reviews: string;
  };
}

export const restaurantData: RestaurantData = {
  summary: {
    name: "Matt's El Rancho",
    mainClass: "Restaurant & Bar",
    googleStatus: "Operational",
    validatedBusiness: true
  },
  address: {
    street: "2613 S LAMAR BLVD",
    city: "AUSTIN",
    zipCode: "78704",
    neighborhood: "South Lamar"
  },
  venueQualities: {
    mainClass: "Restaurant & Bar",
    servesFood: true,
    chainStatus: "Independent",
    foodGenre: "Mexican",
    activityFocus: "-",
    barType: "nothing_special",
    serviceStyle: "casual",
    priceCategory: "Mid-Range ($20 - $50)"
  },
  mealsServed: {
    breakfast: false,
    lunch: true,
    brunch: true,
    dinner: true,
    lateNight: true
  },
  workingHours: {
    daysOpen: 6,
    hoursOpenWeekly: 66,
    schedule: {
      "Sunday": "11am - 9pm",
      "Monday": "11am - 9pm",
      "Tuesday": "11am - 9pm",
      "Wednesday": "11am - 10pm",
      "Thursday": "11am - 10pm",
      "Friday": "11am - 10pm",
      "Saturday": "11am - 11pm"
    }
  },
  reviewSummary: {
    type: "Restaurant",
    cuisine: ["Mexican", "TexMex"],
    menuItems: ["Fried shrimp", "tacos", "beans", "vegan bowl", "chicken tenders", "enchiladas", "guacamole", "flautas", "fish tacos", "chicken fajitas", "margaritas"],
    serviceStyle: "Dine-in",
    atmosphere: ["Family-friendly", "casual", "lively", "outdoor patio"],
    priceRange: "$10-100 (varies by meal and items ordered)",
    totalReviews: 6732,
    avgRating: 4.4,
    starDistribution: {
      "1": { count: 277, percentage: 4.1 },
      "2": { count: 234, percentage: 3.5 },
      "3": { count: 580, percentage: 8.6 },
      "4": { count: 1362, percentage: 20.2 },
      "5": { count: 4279, percentage: 63.6 }
    }
  },
  externalLinks: {
    website: "https://www.mattselrancho.com",
    googleMap: "https://maps.google.com/?cid=123456789",
    reviews: "https://www.google.com/search?q=matt%27s+el+rancho+reviews"
  }
}; 