# Prof. Arun Kumar Nandi — Academic Portfolio & Research Portal

[![Deploy to GitHub Pages](https://github.com/psuakn/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/psuakn/portfolio/actions/workflows/deploy.yml)
[![Website](https://img.shields.io/badge/Website-Live%20on%20GitHub%20Pages-blue)](https://psuakn.github.io)
[![h-index](https://img.shields.io/badge/h--index-61-success)](https://scholar.google.co.in/citations?user=en_rKaoAAAAJ&hl=en)
[![Publications](https://img.shields.io/badge/Publications-260%2B-indigo)](https://psuakn.github.io/#publications)
[![Ph.D. Alumni](https://img.shields.io/badge/Ph.D.%20Alumni-37-purple)](https://psuakn.github.io/#alumni)

Official academic portfolio and research group website for **Prof. Arun Kumar Nandi, FASc., FRSC** (Emeritus Scientist, CSIR at the Indian Association for the Cultivation of Science, Kolkata).

---

## 🏛️ About Professor Arun Kumar Nandi

- **Affiliation**: Emeritus Scientist (CSIR), Former Senior Professor & Head, Polymer Science Unit, School of Materials Science, **Indian Association for the Cultivation of Science (IACS)**, Kolkata.
- **Fellowships**: 
  - Fellow of the Indian Academy of Sciences (FASc, 2009)
  - Fellow of the Royal Society of Chemistry, UK (FRSC, 2014)
  - Fellow of West Bengal Academy of Science and Technology (FWAST, 2006)
- **Metrics**: 260+ Refereed Articles, **h-index 61**, 37 Ph.D. scholars supervised, 1 RSC textbook, 5 book chapters.

---

## 🚀 How to Publish to GitHub Pages (`https://github.com/psuakn`)

You can host this site directly on your GitHub account (`psuakn`) using **GitHub Pages** in two simple ways:

### Option A: As Your Primary Personal/Academic Website (`psuakn.github.io`)
If you want the website to be accessible directly at **`https://psuakn.github.io`**:
1. Create a new repository on GitHub named:
   ```text
   psuakn.github.io
   ```
2. Push this repository's code to it:
   ```bash
   git init
   git branch -M main
   git remote add origin https://github.com/psuakn/psuakn.github.io.git
   git add .
   git commit -m "Initial commit of academic portfolio"
   git push -u origin main
   ```
3. Go to **Settings** → **Pages** on your repository.
4. Under **Build and deployment** → **Source**, select **GitHub Actions**.
5. The included workflow (`.github/workflows/deploy.yml`) will automatically build and publish your site to `https://psuakn.github.io`!

---

### Option B: In a Project Repository (e.g. `psuakn/portfolio`)
If you prefer a repository like `https://github.com/psuakn/portfolio`:
1. Create a repository on GitHub (e.g., `portfolio`).
2. Push your code:
   ```bash
   git init
   git branch -M main
   git remote add origin https://github.com/psuakn/portfolio.git
   git add .
   git commit -m "Initial commit of academic portfolio"
   git push -u origin main
   ```
3. Go to **Settings** → **Pages** → select **GitHub Actions** as the source.
4. Your website will be live at `https://psuakn.github.io/portfolio/`!

---

## 💻 Local Development & Build

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
```bash
npm install
```

### Run Locally (Dev Server)
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run Unit Tests
```bash
npx --yes tsx --test src/utils/academicData.test.ts
```

### Build for Production
```bash
npm run build
```
The compiled, production-ready static assets will be located in the `dist/` directory.

---

## 📂 Project Structure

```text
├── .github/workflows/deploy.yml   # Automatic GitHub Pages CI/CD workflow
├── public/assets/aistudio/        # Official laboratory portrait of Prof. Nandi
├── src/
│   ├── components/                # Modular React UI components
│   │   ├── Navbar.tsx             # Sticky navigation with dark mode & mobile drawer
│   │   ├── Hero.tsx               # Academic credentials, photo & metrics
│   │   ├── AboutSection.tsx       # Bio, education, Florida State postdoc, visiting talks
│   │   ├── ResearchThrusts.tsx    # 6 core research pillars with mechanism diagrams
│   │   ├── PublicationsSection.tsx# 260 publications explorer with search & filters
│   │   ├── ResearchGroupSection.tsx# Current research fellows & scholars
│   │   ├── AlumniSection.tsx      # 37 Ph.D. scholars alumni directory
│   │   ├── FacilitiesSection.tsx  # Instrumental characterization laboratory
│   │   ├── HonorsSection.tsx      # Fellowships, medals & conference chairmanships
│   │   ├── ContactSection.tsx     # Institutional address & reprint request form
│   │   ├── CitationModal.tsx      # 1-click BibTeX and ACS citation exporter
│   │   └── Footer.tsx             # IACS heritage and navigation
│   ├── data/
│   │   └── professorData.ts       # Structured academic database
│   ├── utils/
│   │   ├── academicData.ts        # Pure logic: search, filter, citation formatting
│   │   └── academicData.test.ts   # Unit test suite
│   ├── App.tsx                    # Root application component
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Tailwind CSS & typography setup
├── index.html                     # HTML5 template with academic meta tags
├── vite.config.ts                 # Vite bundler config with relative base path
└── package.json
```

---

## 🔍 Google Search Optimization & Ranking #1 for "Arun Kumar Nandi"

This repository is built with production-grade academic SEO optimizations to help **Prof. Arun Kumar Nandi** rank at the top of Google search results:

1. **Schema.org Knowledge Graph (`Person` & `WebSite`)**: Embedded JSON-LD structured data linking Prof. Arun Kumar Nandi's name, affiliations (IACS Kolkata, Florida State University), awards (FASc, FRSC, MRSI), and identifiers.
2. **Title & Meta Tag Keyword Targeting**: Front-loaded with *"Prof. Arun Kumar Nandi | Emeritus Scientist, CSIR | IACS Kolkata"* and exact keyword variants (`Arun Kumar Nandi`, `Arun K Nandi`, `A. K. Nandi`, `psuakn`).
3. **Robots.txt & XML Sitemap**: `public/robots.txt` and `public/sitemap.xml` automatically instruct Googlebot to crawl and index all section anchors.
4. **Google Scholar & Academic Meta Tags**: Includes `<meta name="citation_author">` tags for scholarly indexing.

### How to Get Indexed in 24 Hours on Google:
1. **Google Search Console**: Visit [https://search.google.com/search-console](https://search.google.com/search-console).
2. Add your property: `https://psuakn.github.io/` (URL prefix method).
3. Under **Sitemaps**, submit: `https://psuakn.github.io/sitemap.xml`.
4. Click **URL Inspection** → enter `https://psuakn.github.io/` → click **"Request Indexing"**.
5. **Backlink Strategy**: Add `https://psuakn.github.io` as your official homepage URL on your Google Scholar profile, ORCID profile, and ResearchGate profile. Backlinks from these trusted academic domains signal supreme authority to Google's ranking algorithms.

---

## 📜 License & Copyright

© 2026 Prof. Arun Kumar Nandi. Indian Association for the Cultivation of Science (IACS). All rights reserved.
