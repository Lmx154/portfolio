# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

### Dynamic Background Cycling
- Seamless transitions between SVG background patterns
- Automated cycling every 4 seconds using React hooks
- Smooth opacity transitions for a polished look

### Responsive Design with Tailwind CSS
- Clean and modern UI components
- Mobile-first approach
- Custom styling using Tailwind's utility classes
- Smooth scrolling between sections
- Dynamic color schemes for technology labels

### Project Showcase
- Interactive project tiles with hover effects
- Technology label system with color coding
- Support for project images
- Responsive grid layout (1 column on mobile, 2 columns on desktop)

### Contact Form with reCAPTCHA
- Prevents spam by using Google reCAPTCHA
- Displays error message if reCAPTCHA verification is not completed
- Shows success message upon successful form submission

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- react-simple-typewriter

### Installation
1. Clone the repository:
   ```bash
   git clone git@github.com:Lmx154/portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Setting Up reCAPTCHA
1. Create a `.env` file in the root directory of the project.
2. Add the following environment variable to the `.env` file:
   ```properties
   VITE_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
   ```
   Replace `your-recaptcha-site-key` with your actual reCAPTCHA site key.

### Running the Project
To start the development server, run:
```bash
npm run dev
```

### Building the Project
To build the project for production, run:
```bash
npm run build
```

### Previewing the Build
To preview the production build, run:
```bash
npm run preview
```

## License
This project is licensed under the MIT License.