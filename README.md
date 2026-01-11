# TabDNA - A Cozy Chrome Tab Organizer


TabDNA is a cozy, pixel-themed Chrome extension that organizes browser tabs into meaningful, interest-based categories helping users reduce clutter and stay focused.

---

**Google Technologies Used**

Google Chrome Extensions API  
Google Gemini API (prototyped during development)

---

**Features**

- Interest-based tab organization  
- Pixel-art inspired cozy UI  
- One-click tab organization  
- Lightweight and privacy-friendly

---

**Future Scope**

- AI-powered tab classification using Gemini  
- Adaptive categorization based on user behavior  
- Productivity insights and analytics

---

**Tech Stack**

- HTML, CSS, JavaScript  
- Chrome Extensions API  
- Node.js (experimental backend)  
- Google Gemini API (prototype stage)

---

## How to Run (MVP)

1. Clone this repository.
2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer Mode**.
4. Click **Load Unpacked** and select the `extension` folder.

This will install and run TabDNA locally.

---

**Google AI Tools Integrated (Prototype)**

This project explored integration with the **Google Gemini API** for intelligent tab categorization. 
Due to API access limitations, the MVP uses a rule-based fallback instead.
The architecture supports future reintegration of Gemini.

---

**Backend (Experimental)**

The `backend/` folder contains prototype code designed to communicate with the Gemini API. 
It is NOT required to run the current MVP and is kept for future extension.

