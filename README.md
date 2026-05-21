# 🚇 Ruti - Real-Time CDMX Metro Tracker MVP

**Ruti** is a highly interactive, real-time transportation tracking MVP designed for the Mexico City Metro system. It features a gorgeous, tactile iOS user interface heavily inspired by **Duolingo's** playful, clean, and interactive design aesthetics.

Developed as a pair-programmed product, Ruti allows users to coordinate and track train locations in real-time across all 12 CDMX Metro lines, complete with real GPS geolocation or simulated route playback.

---

## ✨ Features

- **🎭 Playful Duolingo-Style UI**: Enjoy a gorgeous interface with 3D tactile buttons, playful micro-animations, custom vector icons, rounded typography, and a tailored premium HSL color palette.
- **👥 Role-Based Workflow**:
  - **Passenger (Usuario)**: Displays all conductors on a live map in real time. Features horizontal top-scroll chips to filter lines, focus paths, track location, and display an iOS drawer sheet containing automated station progress, next-station status, and real-time ETAs.
  - **Conductor (Vehículo)**: Transmits position in real-time. Conductors can either use their **real live GPS** location (via `navigator.geolocation`) or run a **high-fidelity route simulation** that smoothly moves (LERPs) along any of the 12 CDMX Metro lines station-by-station.
- **⚡ Zero-Server Real-Time Sync**: Utilizes a highly robust `BroadcastChannel` mechanism with a seamless `localStorage` fallback to sync train positions and user profiles instantly across multiple open tabs or windows without requiring an external database setup.
- **🗺️ Interactive GIS Mapping**: Implements high-performance Leaflet mapping styled with the cartographically elegant `CartoDB Voyager` theme. All 12 Metro lines are physically drawn on the map with accurate station positions.
- **📱 Responsive iOS Feel**: Designed primarily for an optimized mobile-first iOS look and feel while scaling perfectly for desktop screens.

---

## 🛠️ Tech Stack

- **Core**: Vanilla HTML5, CSS3, & Modern JavaScript (ES6+).
- **Styling**: Vanilla CSS (Premium design system using CSS Custom Properties, smooth transitions, custom scrollbars, and tactile shadow mechanics).
- **Mapping**: [Leaflet.js](https://leafletjs.com/) with [CartoDB Voyager](https://carto.com/basemaps/) tiles.
- **Local Dev Server**: Lightweight static hosting via `http-server`.

---

## 🚀 Getting Started

To run Ruti locally on your computer, follow these simple steps:

### Prerequisites

You only need **Node.js** installed on your system to run the local dev server.

### Installation & Run

1. Clone or download this repository.
2. Open your terminal in the project directory.
3. Run the development script:
   ```bash
   npm run dev
   ```
4. Open the displayed URL in your browser (defaults to `http://localhost:3000`).

---

## 📸 How to Test Real-Time Sync

Since Ruti syncs train locations instantaneously across tabs, you can test it directly on a single computer:

1. Open **Tab 1** (e.g. `http://localhost:3000`) and select **"Soy un Vehículo/Conductor"**.
   - Choose a Metro Line (e.g., **Línea 1** or **Línea 3**).
   - Select **"Simulador de Ruta"** or enable GPS.
   - Click **"Iniciar Ruta"** (the train will begin moving along the stations).
2. Open **Tab 2** (e.g., in a separate window or incognito tab) and select **"Soy un Usuario/Pasajero"**.
   - You will instantly see the train from **Tab 1** moving in real-time on your Passenger map!
   - You can open multiple conductor tabs (each will generate a unique session ID) to simulate a fully active transit network.
   - Clicking a train on the Passenger map focuses the line, updates the station sheet drawer, displays the next stops, and generates progress updates!

---

## 🎨 Visual Identity & Style Guide

- **Typography**: Sleek geometric sans-serif fonts (`Outfit` / `Inter`) imported via Google Fonts.
- **Tactile Shadows**: Standardized `box-shadow` depth layers simulating Duolingo's depressed button states (`transform: translateY(4px)`).
- **Soft Palette**: Energetic greens, bright yellows, smooth whites, and custom Metro Line colors matching the official CDMX system.

---

## 📄 License

This project is licensed under the MIT License. Developed with 💚 by **Antigravity**.
