# Project 52

A futuristic web application built with Next.js, React, and Tailwind CSS. This project features a sleek, black theme with neon accents, animated components, and a grid layout of futuristic face avatars.

## Features

- Dark, futuristic UI design with neon accents
- Animated components using Framer Motion
- Responsive grid layout
- Next.js App Router
- TypeScript support

## Getting Started

1. Install the dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Note on Current Status

This project is currently in development. Due to PowerShell execution policy restrictions, you'll need to manually install the dependencies. The linter errors are expected since the dependencies haven't been installed yet.

### To fix PowerShell execution policy for npm:

Run PowerShell as Administrator and execute:
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Then try installing dependencies again:
```bash
npm install
``` 