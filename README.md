# 🚀 NovaWeb Studio

**Premium websites, templates, and custom web design services.**
A modern React + Vite web application featuring 3D experiences, glassmorphism UI, and Framer Motion animations.

---

## 📋 Prerequisites

Before running this project, make sure you have these installed on your computer:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Choose the **LTS** (recommended) version
   - During installation, keep all default options

2. **Git** (to clone the repository)
   - Download from: https://git-scm.com/downloads

### ✅ How to check if you have them installed

Open **Terminal** (Mac/Linux) or **Command Prompt / PowerShell** (Windows) and run:

```bash
node --version
npm --version
```

If both show version numbers, you're good to go!

---

## 🛠️ How to Run This Project

### Step 1: Clone the repository

```bash
git clone https://github.com/ov514/luxury-web.git
```

### Step 2: Navigate into the project folder

```bash
cd luxury-web
```

### Step 3: Install dependencies

```bash
npm install
```

> ⏳ This may take a minute or two. It downloads all the libraries the project needs.

### Step 4: Start the development server

```bash
npm run dev
```

### Step 5: Open in browser

After running the command above, you'll see something like:

```
  ➜  Local:   http://localhost:5173/
```

**Click the link** or copy-paste `http://localhost:5173/` into your browser.

---

## 🔧 Troubleshooting

### "npm is not recognized" or "node is not recognized"
- You need to install Node.js first. Download it from https://nodejs.org/
- After installing, **close and reopen** your terminal/command prompt

### "npm install" gives errors
- Try deleting the `node_modules` folder and `package-lock.json`, then run `npm install` again:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
  On Windows (Command Prompt):
  ```cmd
  rmdir /s /q node_modules
  del package-lock.json
  npm install
  ```

### Page is blank or shows errors
- Make sure you're using Node.js version 18 or higher (`node --version`)
- Try clearing your browser cache or opening in an incognito/private window

---

## 📦 Tech Stack

- **React 19** — UI framework
- **Vite** — Fast build tool & dev server
- **Three.js / React Three Fiber** — 3D graphics
- **Framer Motion** — Animations
- **Lucide React** — Icons
- **React Router** — Navigation

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint code checks |

---

Made with ❤️ by **NovaWeb Studio**
