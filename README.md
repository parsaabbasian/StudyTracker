# 🎓 StudyTracker

StudyTracker is a modern, full-stack application designed to help students organize their academic life. Manage subjects, track tasks with priority levels, and visualize your progress through a clean, intuitive dashboard.

![StudyTracker Preview](https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200)

## ✨ Features

- **📊 Dynamic Dashboard**: Get an overview of your study progress and pending tasks.
- **📚 Subject Management**: Organize tasks by subject with customizable color-coding.
- **✅ Task Tracking**: Create, prioritize (High, Medium, Low), and mark tasks as complete.
- **🔐 Secure Auth**: Built-in authentication using NextAuth.js.
- **🤖 AI Study Plans**: (Coming Soon) Generate optimized study schedules from messy text inputs.
- **📱 Responsive Design**: Fully optimized for mobile and desktop viewing.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router & Turbopack)
- **Database**: [Prisma v7](https://www.prisma.io/) with SQLite (Local) or [Supabase](https://supabase.com/) (Production)
- **Auth**: [NextAuth.js](https://next-auth.js.org/)
- **Styling**: Vanilla CSS / CSS Modules
- **Charts**: [Chart.js](https://www.chartjs.org/)

## 🚀 Getting Started

### 1. Prerequisites

- Node.js 18.x or later
- npm or yarn

### 2. Installation

```bash
git clone https://github.com/parsaabbasian/StudyTracker.git
cd study-trackr
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Database (Local SQLite)
DATABASE_URL="file:./dev.db"

# Next Auth
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Supabase (Optional for local, required for production)
NEXT_PUBLIC_SUPABASE_URL="your-project-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
```

### 4. Database Initialization

```bash
# Generate Prisma Client
npx prisma generate

# Sync schema to local SQLite database
npx prisma db push
```

### 5. Start Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 🗄️ Database Strategy

StudyTracker uses a flexible database configuration:

- **Development**: Runs on lightweight **SQLite** for zero-config local setup.
- **Production**: Seamlessly integrates with **Supabase (PostgreSQL)**. 

To switch to Supabase, update the `provider` in `prisma/schema.prisma` to `postgresql` and provide your connection strings in `.env`.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Built with ❤️ for better learning.
