const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach.",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views.",
    image:
      "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
    {
    title: "Lake View Cabin",
    description: "A peaceful cabin with a beautiful lake view, perfect for weekend escapes.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Desert Luxury Villa",
    description: "Experience luxury living in the heart of the desert with a private pool.",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Hilltop Cottage",
    description: "A cozy cottage located on a hilltop with breathtaking sunrise views.",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d64?auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Ooty",
    country: "India",
  },
  {
    title: "City Studio Apartment",
    description: "Compact and modern studio apartment in the city center.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Forest Treehouse Stay",
    description: "Live close to nature in this beautiful treehouse surrounded by forest.",
    image: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60",
    price: 850,
    location: "Kerala",
    country: "India",
  },
  {
    title: "Snowy Mountain Chalet",
    description: "A warm and cozy chalet surrounded by snowy mountains.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
    price: 3200,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Island Beach Hut",
    description: "Simple beach hut with direct access to crystal-clear waters.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    price: 700,
    location: "Goa",
    country: "India",
  },
  {
    title: "Historic City Apartment",
    description: "Stay in a historic apartment located in the old city district.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Rome",
    country: "Italy",
  },
  {
    title: "Luxury Overwater Villa",
    description: "An overwater villa offering unmatched luxury and ocean views.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Countryside Farmhouse",
    description: "Relax in this spacious farmhouse surrounded by greenery.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Punjab",
    country: "India",
  },
  {
    title: "Coastal Cliff House",
    description: "A stunning house located on cliffs overlooking the sea.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    price: 2700,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Minimalist Glass House",
    description: "A modern glass house designed for peaceful living.",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=60",
    price: 2100,
    location: "Oslo",
    country: "Norway",
  },
  {
    title: "Jungle Safari Lodge",
    description: "Stay close to wildlife in this comfortable jungle safari lodge.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Serengeti",
    country: "Tanzania",
  },
  {
    title: "Modern Duplex Home",
    description: "A stylish duplex with all modern amenities.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
    price: 1900,
    location: "Toronto",
    country: "Canada",
  },
  {
    title: "Riverside Wooden Cabin",
    description: "A peaceful wooden cabin located beside a flowing river.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Manali",
    country: "India",
  },

];

module.exports = { data: sampleListings };
