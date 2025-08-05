# Frontend – Online Consultation Booking System

This is the frontend for an online consultation booking system, built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. It supports both **users** and **providers**, with role-based interfaces for managing services, slots, and bookings.

---

## 📂 Tech Stack

- **React 19 + Vite**
- **TypeScript**
- **Redux Toolkit** – global state management
- **React Query** – data fetching and caching
- **Shadcn UI** – modern and accessible UI components
- **React Hook Form + Zod** – form handling and validation
- **Axios** – API client
- **Sonner** – toast notifications

---

## Features

### Authentication

- Login, register, logout with JWT stored in cookies
- `/me` endpoint used to persist and hydrate user state

### Role-Based Access

- `user`: Book and manage appointments
- `provider`: Create and manage services and slots

### Services

- Create/edit service with image upload (preview included)
- Paginated service listing
- Image rendering from backend `imageUrl`

### Slots

- Create slot (modal form with UTC time input)
- View slots (status: booked or available)
- Edit or delete slots (for providers only)

### Bookings

- Users can book available slots
- Users can cancel bookings
- Status and time displayed clearly

---

## Getting Started

### Installation

```bash
cd frontend
cp .env.example .env    # Add VITE_API_BASE_URL, etc.
npm install
npm run dev
```

The app will start on [http://localhost:5173](http://localhost:5173).

---

## Folder Structure

```
src/
│
├── api/                  # Axios instance and API functions
├── components/           # UI components (shared and ui/)
├── constants/            # Constant values in the ssytem (endpoints, ...))
├── features/             # Feature-specific logic (auth, slots, bookings, etc.)
├── hooks/                # Custom hooks (React Query, Redux)
├── pages/                # Route-level components
├── schemas/              # Zod schemas
├── store/                # Redux setup and slices
├── routes/               # App routing (React Router v6)
├── types/                # TypeScript types
```

---

## Available Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build locally

---

## Environment Variables

`.env` file example:

```
VITE_API_BASE_URL=http://localhost:3000/api/v1
```

---

Let me know if you also want deployment steps (e.g. with Vercel or Netlify).
