
// City data for major Indian cities
export const indianCities = [
  {
    name: "Mumbai",
    state: "Maharashtra",
    coordinates: { lat: 19.0760, lng: 72.8777 },
    popular: true,
    venues: [
      "Taj Lands End",
      "The St. Regis Mumbai",
      "Grand Hyatt Mumbai",
      "JW Marriott Mumbai Sahar",
      "NESCO Center",
      "Jio World Convention Centre"
    ]
  },
  {
    name: "Delhi",
    state: "Delhi",
    coordinates: { lat: 28.6139, lng: 77.2090 },
    popular: true,
    venues: [
      "The Leela Palace",
      "Taj Palace",
      "The Oberoi",
      "ITC Maurya",
      "Hyatt Regency Delhi",
      "Pragati Maidan"
    ]
  },
  {
    name: "Bangalore",
    state: "Karnataka",
    coordinates: { lat: 12.9716, lng: 77.5946 },
    popular: true,
    venues: [
      "The Leela Palace",
      "ITC Gardenia",
      "JW Marriott Hotel",
      "Taj West End",
      "Bangalore International Exhibition Centre",
      "Sheraton Grand Bangalore"
    ]
  },
  {
    name: "Hyderabad",
    state: "Telangana",
    coordinates: { lat: 17.3850, lng: 78.4867 },
    popular: true,
    venues: [
      "Taj Krishna",
      "Novotel Hyderabad Convention Centre",
      "ITC Kohenur",
      "HICC",
      "Trident Hyderabad",
      "Marriott Hotel & Convention Centre"
    ]
  },
  {
    name: "Chennai",
    state: "Tamil Nadu",
    coordinates: { lat: 13.0827, lng: 80.2707 },
    popular: true,
    venues: [
      "ITC Grand Chola",
      "Leela Palace Chennai",
      "Taj Coromandel",
      "Hyatt Regency Chennai",
      "Chennai Trade Centre",
      "The Park Chennai"
    ]
  },
  {
    name: "Kolkata",
    state: "West Bengal",
    coordinates: { lat: 22.5726, lng: 88.3639 },
    popular: true,
    venues: [
      "ITC Royal Bengal",
      "The Oberoi Grand",
      "Taj Bengal",
      "JW Marriott Hotel Kolkata",
      "Hyatt Regency Kolkata",
      "Science City Convention Centre"
    ]
  },
  {
    name: "Pune",
    state: "Maharashtra",
    coordinates: { lat: 18.5204, lng: 73.8567 },
    popular: true,
    venues: [
      "JW Marriott Hotel Pune",
      "The Westin Pune",
      "Conrad Pune",
      "Hyatt Pune",
      "The Ritz-Carlton Pune",
      "Sheraton Grand Pune"
    ]
  },
  {
    name: "Ahmedabad",
    state: "Gujarat",
    coordinates: { lat: 23.0225, lng: 72.5714 },
    popular: true,
    venues: [
      "Hyatt Regency Ahmedabad",
      "Courtyard by Marriott",
      "Renaissance Ahmedabad Hotel",
      "Taj Skyline",
      "Novotel Ahmedabad",
      "The Leela Gandhinagar"
    ]
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    coordinates: { lat: 26.9124, lng: 75.7873 },
    popular: true,
    venues: [
      "Rambagh Palace",
      "Taj Jai Mahal Palace",
      "Fairmont Jaipur",
      "ITC Rajputana",
      "The Oberoi Rajvilas",
      "Jaipur Exhibition & Convention Centre"
    ]
  },
  {
    name: "Goa",
    state: "Goa",
    coordinates: { lat: 15.2993, lng: 74.1240 },
    popular: true,
    venues: [
      "Taj Exotica Resort & Spa",
      "Grand Hyatt Goa",
      "The Leela Goa",
      "ITC Grand Goa Resort & Spa",
      "W Goa",
      "Marriott Resort & Spa"
    ]
  },
  {
    name: "Lucknow",
    state: "Uttar Pradesh",
    coordinates: { lat: 26.8467, lng: 80.9462 },
    venues: [
      "Taj Mahal Lucknow",
      "Renaissance Lucknow Hotel",
      "Hyatt Regency Lucknow",
      "Novotel Lucknow",
      "Centrum",
      "Indira Gandhi Pratishthan"
    ]
  },
  {
    name: "Chandigarh",
    state: "Chandigarh",
    coordinates: { lat: 30.7333, lng: 76.7794 },
    venues: [
      "JW Marriott Hotel Chandigarh",
      "Taj Chandigarh",
      "Hyatt Regency Chandigarh",
      "The Lalit Chandigarh",
      "CII Convention Centre",
      "Himachal Bhawan"
    ]
  },
  {
    name: "Kochi",
    state: "Kerala",
    coordinates: { lat: 9.9312, lng: 76.2673 },
    venues: [
      "Grand Hyatt Kochi Bolgatty",
      "Le Méridien Kochi",
      "Crowne Plaza Kochi",
      "Marriott Kochi",
      "Lulu Bolgatty International Convention Centre",
      "Taj Malabar Resort & Spa"
    ]
  },
  {
    name: "Indore",
    state: "Madhya Pradesh",
    coordinates: { lat: 22.7196, lng: 75.8577 },
    venues: [
      "Radisson Blu Hotel Indore",
      "Sayaji Hotel",
      "Brilliant Convention Centre",
      "Marriott Indore",
      "Sheraton Grand Palace Indore",
      "Fortune Landmark"
    ]
  },
  {
    name: "Bhubaneswar",
    state: "Odisha",
    coordinates: { lat: 20.2961, lng: 85.8245 },
    venues: [
      "Mayfair Lagoon",
      "Trident Bhubaneswar",
      "Lemon Tree Premier",
      "Swosti Premium",
      "Taj Vivanta Bhubaneswar",
      "Hotel Crown"
    ]
  }
];

// Event venues by city
export const getVenuesByCity = (cityName: string) => {
  const city = indianCities.find(city => city.name.toLowerCase() === cityName.toLowerCase());
  return city ? city.venues : [];
};

// Hotel types for hotel bookings
export const hotelTypes = [
  "Luxury Hotel",
  "Business Hotel",
  "Resort Hotel",
  "Boutique Hotel",
  "Airport Hotel",
  "Heritage Hotel",
  "Convention Hotel"
];

// Occasions for personal bookings
export const personalOccasions = [
  "Wedding",
  "Anniversary",
  "Birthday",
  "Prom Night",
  "Business Meeting",
  "Airport Transfer",
  "City Tour",
  "Special Date",
  "Corporate Travel",
  "Medical Appointment"
];

// Vehicle types for personal bookings
export const vehicleTypes = [
  "Sedan",
  "SUV",
  "Luxury Sedan",
  "Premium SUV",
  "Convertible",
  "Limousine"
];
