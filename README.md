# Website Rent Office - Frontend Preview

This is the **frontend preview** of the **Full-Stack Laravel 11 + React JS 18 + TypeScript** course project: a modern website for searching and booking offices.

This frontend is built with React, TypeScript, and TailwindCSS, and uses **mock data**, so you can run it locally without a backend.

---

## Technologies Used

* **Frontend:** React 18, TypeScript, React Router
* **UI / Styling:** TailwindCSS
* **Validation:** Zod
* **Reusable Components:** `OfficeCard`, `CityCard`, `BrowseOfficeWrapper`
* **Mock Data:** `mockCities`, `mockOffices`, `mockBookings`
* **Assets & Icons:** SVG and static images in `/public/assets/images`

---

## Features

1. **City List & Preview**

   * Displays all cities with available offices
   * Each city card links to the city detail page

2. **City Details & Offices**

   * Lists offices for the selected city
   * Office cards show image, name, price, duration, city, and benefits

3. **Booking Check Form**

   * Users can check bookings by **Booking TRX ID** and **Phone Number**
   * Shows booking info including customer details, payment status, order details, and bonus packages
   * Fully styled to match the course UI

---

## Getting Started

Follow these steps to run the frontend locally:

1. **Clone the repository:**

```bash
git clone <repo-url>
cd <repo-folder>
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

4. **Open in your browser:**
   Visit `http://localhost:5173`

> Note: This frontend uses mock data, so no backend is required for preview.

---

## Sneak Peek

* Full-Stack Laravel 11 + React + TypeScript: Website Rent Office
* Fully responsive design
* Clean modern UI with TailwindCSS

---

## Key Points

* Build reusable frontend components (`CityCard`, `OfficeCard`, `BrowseOfficeWrapper`)
* Learn database & ERD concepts for backend integration
* Apply SOLID principles for maintainable frontend code
* Create CRUD-like UI for mock data
* Booking check form with validation using Zod
* Ready for SMS & WhatsApp notifications (backend Twilio integration)
* Styled with TailwindCSS following modern UI/UX best practices

---

## Designed For

1. Developers learning Laravel and React
2. Developers applying TypeScript in frontend projects
3. Aspiring Full-Stack Web Developers
4. Portfolio-ready project to showcase modern web development skills
