# 🎮 Bit Bash Bonanza — Frontend

> A full-stack technical gaming platform for college-level coding competitions, featuring real-time code evaluation, debugging challenges, and dynamic leaderboards.

🔗 **Live Demo:** [bitbash-frontend.vercel.app](https://bitbash-frontend.vercel.app/)  
⚙️ **Backend Repo:** [bitbash-backend](https://github.com/ToshiWorks/bitbash-backend)

---

## ✨ What It Does

Bit Bash Bonanza is a competitive coding platform I built for college tech events. Players face:

- 💻 **Coding Challenges** — write solutions evaluated against hidden test cases
- 🐛 **Debugging Rounds** — find and fix broken code under time pressure
- 📊 **Dynamic Scoring** — scores update based on correctness and speed
- 🗂️ **Topic-Based Questions** — questions categorised by difficulty and concept
- 📈 **Progress Tracking** — players can track their performance across rounds

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Vite, CSS |
| Backend | Python Flask, REST APIs |
| Deployment | Vercel (frontend), Render (backend) |

---

## 🔧 How to Run Locally

### Prerequisites
- Node.js v18+
- npm

### Steps

```bash
# Clone the repo
git clone https://github.com/ToshiWorks/bitbash-frontend.git
cd bitbash-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The app runs at `http://localhost:5173`

> ⚠️ For full functionality, you'll also need the backend running. See [bitbash-backend](https://github.com/ToshiWorks/bitbash-backend) for instructions.

---

## 📁 Project Structure

```
bitbash-frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Route-level page components
│   ├── App.jsx         # Main app with routing
│   └── main.jsx        # Entry point
├── public/
├── index.html
└── vite.config.js
```

---

## 🚀 Deployment

- Frontend deployed on **Vercel** — auto-deploys on push to main
- Backend deployed on **Render** — REST API endpoints consumed by this frontend

---

## 👩‍💻 Built By

**Toshita Upadhyay** — [github.com/ToshiWorks](https://github.com/ToshiWorks)  
Part of the Bit Bash Bonanza event series designed and run for college tech fests.
