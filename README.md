<div align="center">

# VoiceMaker

### Advanced Text-to-Speech Converter

Transform your text into natural-sounding speech with advanced AI voice technology. A modern, feature-rich web application built with React and powered by the Web Speech API.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://voicemaker-app.vercel.app/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2.0-646cff.svg)](https://vitejs.dev/)

[Live Demo](https://voicemaker-app.vercel.app/) • [Report Bug](https://github.com/rohitcoding1991/voicemaker-app/issues) • [Request Feature](https://github.com/rohitcoding1991/voicemaker-app/issues)

</div>

---

## Features

- **Natural Voice Synthesis** - Convert text to speech using the Web Speech API with high-quality voice output
- **Voice Customization** - Fine-tune your audio with adjustable parameters:
  - Volume Control
  - Speech Rate/Speed
  - Voice Pitch
- **Multiple Voice Options** - Select from various available system voices
- **Real-time Audio Player** - Built-in media player to preview and control your generated speech
- **Modern UI/UX** - Beautiful, responsive interface with glassmorphism effects and smooth animations
- **Cross-browser Compatible** - Works seamlessly across modern web browsers
- **Mobile Responsive** - Fully optimized for desktop, tablet, and mobile devices

## Tech Stack

### Frontend
- **React 18.2** - Modern UI library for building user interfaces
- **Vite 5.2** - Next-generation frontend tooling for fast development
- **Material-UI (MUI) 5.15** - Comprehensive React component library
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Styled Components 6.1** - CSS-in-JS styling solution

### Additional Libraries
- **@emotion/react & @emotion/styled** - CSS-in-JS library
- **notistack** - Elegant notification/snackbar system
- **Web Speech API** - Browser API for text-to-speech synthesis

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS transformation and optimization
- **Autoprefixer** - Automatic CSS vendor prefixing

## Live Demo

Experience VoiceMaker in action: [https://voicemaker-app.vercel.app/](https://voicemaker-app.vercel.app/)

## Installation

### Prerequisites

- Node.js (version 16.x or higher)
- npm or yarn package manager

### Clone the Repository

```bash
git clone https://github.com/rohitcoding1991/voicemaker-app.git
cd voicemaker-app
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
```

The application will start at `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The optimized production build will be generated in the `dist` folder.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## Usage

1. **Enter Text**: Type or paste your text in the input area
2. **Customize Voice Settings**:
   - Adjust volume using the volume slider
   - Control speech speed with the rate slider
   - Modify pitch for different voice tones
3. **Select Voice**: Choose from available system voices using the dropdown
4. **Convert**: Click "Convert to Speech" button to generate audio
5. **Play**: Use the media player controls to play, pause, or replay the generated speech
6. **Reset/Clear**: Use reset button to restore default settings or clear to remove text

## Project Structure

```
voicemaker-app/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, icons, SVG files
│   ├── components/      # React components
│   │   ├── mediaplayer/ # Audio player component
│   │   ├── slider/      # Custom slider components
│   │   └── voicesDropdown/ # Voice selection dropdown
│   ├── contextApi/      # React Context for state management
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── .eslintrc.cjs        # ESLint configuration
```

## Browser Support

VoiceMaker requires browsers with Web Speech API support:

- Chrome/Edge 33+
- Safari 7+
- Firefox 49+
- Opera 21+

**Note**: Voice availability and quality may vary depending on your operating system and browser.

---

<div align="center">

**[⬆ Back to Top](#voicemaker)**

Made with ❤️ by [rohitcoding1991](https://github.com/rohitcoding1991)

</div>
