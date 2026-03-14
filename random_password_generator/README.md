## Password Generator (React + Vite)

An interactive **random password generator** built with React and Vite. It lets you quickly create secure passwords with customizable length and character options, and copy them with a single click.

### Live Demo

- **Production URL**: [`https://passwordgenerator-psi-cyan.vercel.app/`](https://passwordgenerator-psi-cyan.vercel.app/)

### Features

- **Customizable length**: Adjust password length with a slider.
- **Character types**:
  - Include **lowercase letters** (a–z)
  - Include **uppercase letters** (A–Z)
  - Include **numbers** (0–9)
  - Include **symbols** (`!@#$%^&*` and similar)
- **One-click copy**: Copy the generated password to your clipboard.
- **Instant regeneration**: Generate a new password anytime with a button click.
- **Clean, modern UI**: Gradient background and card-style layout for a polished look.

### Tech Stack

- **Frontend**: React (with hooks)
- **Build Tool**: Vite
- **Styling**: CSS (custom styles)
- **Deployment**: Vercel

### Getting Started

#### Prerequisites

- Node.js (LTS recommended)
- npm or another Node package manager

#### Installation

```bash
npm install
```

#### Run in Development

```bash
npm run dev
```

Then open the URL shown in your terminal (typically `http://localhost:5173`).

#### Build for Production

```bash
npm run build
```

#### Preview Production Build

```bash
npm run preview
```

### Project Structure (simplified)

```text
random_password_generator/
  src/
    App.jsx          # Main password generator UI
    main.jsx         # React entry point
  public/
  package.json
  README.md
```

### License

This project is open source and available under the MIT License (or update this section to your preferred license).
