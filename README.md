# Car Rentals Application

A modern car rental application built with Astro 5, Supabase, and Tailwind CSS.

## Features

- Browse available cars
- View car details
- Book cars
- Manage bookings
- Responsive design

## Prerequisites

- Node.js 18 or higher
- npm or yarn
- Supabase account

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd car-rentals
```

2. Install dependencies:
```bash
npm install
```

3. Create a Supabase project and set up the following tables:

```sql
-- Cars table
create table cars (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  model text not null,
  year integer not null,
  price decimal not null,
  image text not null,
  available boolean default true
);

-- Bookings table
create table bookings (
  id uuid default uuid_generate_v4() primary key,
  car_id uuid references cars(id),
  user_id uuid references auth.users(id),
  start_date date not null,
  end_date date not null,
  total_price decimal not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

4. Copy `.env.example` to `.env` and update with your Supabase credentials:
```bash
cp .env.example .env
```

5. Update the `.env` file with your Supabase project URL and anon key.

6. Start the development server:
```bash
npm run dev
```

## Building for Production

```bash
npm run build
```

The built application will be in the `dist` directory.

## Technologies Used

- [Astro](https://astro.build)
- [Supabase](https://supabase.com)
- [Tailwind CSS](https://tailwindcss.com)

## License

MIT

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
