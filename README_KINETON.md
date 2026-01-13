# Kineton Technologies Website

Premium marketing website for **Kineton Technologies** - a deep-tech AI infrastructure company building vertically integrated hardware and software for edge computing.

![Kineton Technologies](https://customer-assets.emergentagent.com/job_86dc4720-2b0c-48d9-9786-1af1640c2f69/artifacts/hhk6lue0_logofile.png)

## 🌐 Live Preview

**Preview URL**: https://kineton-edge.preview.emergentagent.com

**GitHub Repository**: https://github.com/MistyBlaze/kineton-website

---

## ✨ Features

### 🎨 Design Excellence
- **Premium Dark/Light Themes** - Smooth theme switching with excellent contrast in both modes
- **Framer Motion Animations** - Scroll-triggered reveals, hover effects, and smooth transitions
- **Advanced SVG Visualizations** - Custom chip architecture with animated circuits
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **4-Color Accent Palette** - Teal, Cyan, Purple, and Amber/Gold accents

### 📱 8 Complete Sections

1. **Hero** - Full viewport with animated chip visualization and staggered text reveals
2. **Lightsound Runtime** (Software) - 4 feature cards with gradient borders
3. **VEO Cores** (Hardware) - Multi-core chip architecture with animated specifications
4. **Use Cases** - 5 industry applications (Drones, Robotics, Wearables, IoT, Hyperscalers)
5. **Technology Deep Dive** - 2-layer architecture visualization
6. **Traction & Backing** - Campus Fund investor + 2 achievements
7. **Waitlist/Contact** - Form validation with animated success state
8. **Footer** - Complete navigation and social links

### 🛠️ Technical Stack

- **React 19** with Create React App
- **Tailwind CSS** with custom theme
- **Framer Motion** for animations
- **React Hook Form + Zod** for form validation
- **Lucide React** for icons
- **Custom Hooks** - useInView, useCountUp, useParallax

---

## 🎯 2-Layer Architecture

```
┌──────────────────────────────────────────┐
│     LAYER 1: LIGHTSOUND RUNTIME          │
│  Inference optimization, PyTorch         │
│  integration, CUDA kernels               │
├──────────────────────────────────────────┤
│          LAYER 2: VEO CORES              │
│  Custom RISC-V silicon, neural           │
│  processing, hardware acceleration       │
└──────────────────────────────────────────┘
```

---

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/MistyBlaze/kineton-website.git

# Navigate to the frontend folder
cd kineton-website

# Install dependencies
yarn install

# Start development server
yarn start
```

The website will open at `http://localhost:3000`

### Build for Production

```bash
# Create optimized production build
yarn build

# The build folder will contain the production-ready files
```

---

## 🎨 Color Palette

### Dark Mode (Primary)
- **Background**: `#0a0a0a`, `#111111`, `#050505`
- **Accent Teal**: `#00d4aa`
- **Accent Cyan**: `#0ff0fc`
- **Accent Purple**: `#6366f1`
- **Accent Amber**: `#f59e0b`
- **Accent Gold**: `#fbbf24`
- **Text**: `#f8f8f8`

### Light Mode (Secondary)
- **Background**: `#ffffff`, `#f8f8f8`, `#f1f1f1`
- **Text**: `#111111`, `#1f2937`
- **Same accent colors** for consistency

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.js              # Sticky navbar with theme toggle
│   │   ├── Hero.js                # Hero with advanced chip SVG
│   │   ├── LightsoundSection.js   # Software product showcase
│   │   ├── VEOSection.js          # Hardware product showcase
│   │   ├── UseCasesSection.js     # 5 industry use cases
│   │   ├── TechnologySection.js   # 2-layer architecture
│   │   ├── BackingSection.js      # Investors and achievements
│   │   ├── WaitlistSection.js     # Contact form
│   │   └── Footer.js              # Footer navigation
│   ├── contexts/
│   │   └── ThemeContext.js        # Theme management
│   ├── hooks/
│   │   ├── useInView.js           # Intersection Observer hook
│   │   ├── useCountUp.js          # Animated number counter
│   │   └── useParallax.js         # Parallax scroll effect
│   ├── App.js                     # Main app component
│   └── index.css                  # Global styles + Tailwind
├── public/
│   └── index.html
├── tailwind.config.js             # Tailwind configuration
└── package.json
```

---

## 🎭 Key Components

### Advanced Chip Visualization

The Hero and VEO sections feature custom SVG chip visualizations with:
- **4-core neural processing units** (Neural, Tensor, Vector, Matrix/Compute)
- **Animated circuit traces** in 4 colors (Teal, Cyan, Purple, Amber)
- **Data flow animations** showing I/O connections
- **Pulsing core indicators** with gradient glows
- **Interconnect fabric** between cores

### Theme Toggle

Smooth dark/light mode switching with:
- LocalStorage persistence
- Smooth CSS transitions (300ms)
- All components fully styled for both modes
- Rotating sun/moon icon animation

### Form Validation

Waitlist form with:
- Required fields: Full Name, Email, Use Case Interest
- Optional fields: Phone, Company, Message
- Real-time validation with Zod
- Animated error messages
- Success state with rotating checkmark
- Auto-reset after 5 seconds

---

## 🏢 About Kineton Technologies

**Tagline**: AI Infrastructure for the Edge

**Products**:
- **Lightsound Runtime** - High-performance ML middleware with PyTorch integration, custom CUDA kernels, and quantization pipeline
- **VEO Cores** - Custom RISC-V neural processing silicon optimized for edge deployment

**Backing**:
- Campus Fund (Investor)
- IIT Kanpur 5G/6G CoE Finalist
- Made in India, Built for the World

---

## 📊 Performance

- **Animations**: 60fps with GPU-accelerated transforms
- **Load Time**: Optimized with code splitting
- **Accessibility**: Reduced motion support for accessibility
- **SEO Ready**: Semantic HTML structure

---

## 🔧 Development

### Available Scripts

- `yarn start` - Start development server
- `yarn build` - Create production build
- `yarn test` - Run tests

### Environment Variables

The app uses:
- `REACT_APP_BACKEND_URL` - Backend API URL (if needed for future features)

---

## 📝 Future Enhancements

Potential additions for future versions:
- Backend API integration for waitlist submissions
- Email notification service
- Google Analytics tracking
- SEO meta tags and Open Graph images
- Blog/News section
- Product documentation pages
- Customer testimonials

---

## 📄 License

© 2025 Kineton Technologies. All rights reserved.

---

## 👥 Contact

**Email**: contact@kineton.tech

**Social**:
- LinkedIn: [Connect with us](#)
- Twitter/X: [Follow us](#)

---

## 🙏 Credits

- **Fonts**: Space Grotesk, Inter (Google Fonts)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Logo Assets**: Kineton Technologies, Campus Fund

---

**Built with ❤️ for the future of edge AI**
