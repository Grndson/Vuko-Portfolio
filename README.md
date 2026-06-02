# Vucore Tech — Next.js Portfolio

Built with **Next.js 15 · Tailwind CSS · Framer Motion · TypeScript**

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## ✅ Setup Checklist

### 1. Content — edit `app/lib/data.ts`
All your text, project info, skills, and links live in one file.
Replace every `YOUR_USERNAME` placeholder with real handles.

### 2. Images — add to `public/images/`
| File | Used in |
|------|---------|
| `logo.png` | Navbar, footer |
| `profile.jpg` | About section |
| `project-jobtrack.jpg` | Projects card |
| `project-wellness.jpg` | Projects card |
| `project-marine.jpg` | Projects card |
| `project-realestate.jpg` | Projects card |
| `project-freelance.jpg` | Projects card |
| `og-preview.png` | Social link previews (1200×630px) |

**Tip:** Use [screely.com](https://screely.com) to wrap browser screenshots in a frame.

Then in each component, uncomment the `<Image />` tag and remove the placeholder div.

### 3. CV — add to `public/assets/cv.pdf`

### 4. Contact Form (Formspree — free)
1. Go to [formspree.io](https://formspree.io) → sign up → New Form
2. Add your email: `vukoedmund670@gmail.com`
3. Copy your Form ID (e.g. `xpzgkwqr`)
4. In `app/components/Contact.tsx`, replace:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```
   with your real ID. Also delete the setup notice `<div>` above the form.

---

## 🌐 Deploy to Vercel (free, 2 minutes)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → Import Project → select your repo
3. Click Deploy — it auto-detects Next.js
4. Get a live URL instantly (e.g. `vucore-tech.vercel.app`)
5. Add a custom domain in Vercel settings later

---

## 🎨 Customize

| What | Where |
|------|-------|
| Colors (red accent) | `app/globals.css` → `:root` variables |
| All text & data | `app/lib/data.ts` |
| Skill percentages | `app/lib/data.ts` → `skills` array |
| Add a project | `app/lib/data.ts` → `projects` array |
| Add a timeline item | `app/lib/data.ts` → `experience` array |
| Fonts | `app/layout.tsx` → `<link>` tag |

---

## 📁 Structure

```
app/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── BackToTop.tsx
├── lib/
│   └── data.ts          ← all content lives here
├── globals.css
├── layout.tsx
└── page.tsx
public/
├── images/              ← add your images here
└── assets/
    └── cv.pdf           ← add your CV here
```
