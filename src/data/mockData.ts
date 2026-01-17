import type { Office, City, BoookingDetails } from "../types/type";

export const mockCities: City[] = [
  {
    id: 1,
    name: "Jakarta",
    slug: "jakarta",
    photo: "/assets/images/cities/jakarta.jpg",
    officeSpaces_count: 2,
    officeSpaces: [],
  },
  {
    id: 2,
    name: "Bandung",
    slug: "bandung",
    photo: "/assets/images/cities/bandung.jpg",
    officeSpaces_count: 1,
    officeSpaces: [],
  },
];

export const mockOffices: Office[] = [
  {
    id: 1,
    price: 2500000,
    duration: 30,
    name: "Startup Hub Sudirman",
    slug: "startup-hub-sudirman",
    address: "Jl. Jendral Sudirman No. 10, Jakarta",
    thumbnail: "/assets/images/offices/office-1.jpg",
    city: mockCities[0],
    about:
      "Startup Hub Sudirman adalah coworking space modern dengan fasilitas lengkap.",
    photo: [
      { id: 1, photo: "/assets/images/offices/office-1-1.jpg" },
      { id: 2, photo: "/assets/images/offices/office-1-2.jpg" },
    ],
    benefit: [
      { id: 1, name: "Free WiFi" },
      { id: 2, name: "Meeting Room" },
      { id: 3, name: "Free Coffee" },
    ],
  },
  {
    id: 2,
    price: 1800000,
    duration: 30,
    name: "Creative Space SCBD",
    slug: "creative-space-scbd",
    address: "SCBD Lot 8, Jakarta",
    thumbnail: "/assets/images/offices/office-2.jpg",
    city: mockCities[0],
    about:
      "Creative Space SCBD cocok untuk tim kreatif dengan lokasi strategis.",
    photo: [
      { id: 3, photo: "/assets/images/offices/office-2-1.jpg" },
      { id: 4, photo: "/assets/images/offices/office-2-2.jpg" },
    ],
    benefit: [
      { id: 4, name: "24/7 Access" },
      { id: 5, name: "Parking Area" },
    ],
  },
  {
    id: 3,
    price: 1500000,
    duration: 30,
    name: "Digital Nomad Bandung",
    slug: "digital-nomad-bandung",
    address: "Jl. Dago No. 88, Bandung",
    thumbnail: "/assets/images/offices/office-3.jpg",
    city: mockCities[1],
    about:
      "Coworking space nyaman di Bandung dengan suasana tenang.",
    photo: [
      { id: 5, photo: "/assets/images/offices/office-3-1.jpg" },
    ],
    benefit: [
      { id: 6, name: "High Speed Internet" },
      { id: 7, name: "Rooftop Area" },
    ],
  },
];

mockCities[0].officeSpaces = mockOffices.filter(
  (office) => office.city.slug === "jakarta"
);

mockCities[1].officeSpaces = mockOffices.filter(
  (office) => office.city.slug === "bandung"
);

export const mockBookings: BoookingDetails[] = [
  {
    id: 1,
    name: "Muhammad Reza",
    phone_number: 81234567890,
    booking_trx_id: "TRX-202601-001",
    is_paid: true,
    duration: 30,
    total_amount: 2500000,
    started_at: "2026-01-01",
    ended_at: "2026-01-31",
    office: mockOffices[0],
  },
  {
    id: 2,
    name: "Habii Alter",
    phone_number: 81122334455,
    booking_trx_id: "TRX-202601-002",
    is_paid: false,
    duration: 30,
    total_amount: 1800000,
    started_at: "2026-01-05",
    ended_at: "2026-02-04",
    office: mockOffices[1],
  },
];
