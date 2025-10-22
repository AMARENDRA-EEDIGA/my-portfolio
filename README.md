# Amarendra Eediga - Portfolio Website

A modern, responsive portfolio website built with React and TailwindCSS featuring dynamic themes and professional design.

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Your Resume**
   - Place your resume PDF in `public/data/resume.pdf`
   - Add your project images in `public/images/`

3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Open Browser**
   Navigate to `http://localhost:3000`

## Tech Stack

- **Frontend**: React 18, TailwindCSS
- **State Management**: React Context API
- **Icons**: React Icons
- **Styling**: Custom theme system with 3 modes
- **API**: Axios for HTTP requests (ready for Django backend)

## Project Structure

```
my_portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/          # React components (8 sections)
│   │   ├── Navbar.js       # Navigation with theme switcher
│   │   ├── Hero.js         # Landing with dynamic roles
│   │   ├── About.js        # About section with stats
│   │   ├── Skills.js       # Skills with progress bars
│   │   ├── Projects.js     # Projects with filtering
│   │   ├── Experience.js   # Timeline experience
│   │   ├── Contact.js      # Contact form
│   │   └── Footer.js       # Footer with links
│   ├── contexts/           # Theme context
│   ├── data/              # Mock data and constants
│   ├── App.js             # Main app component
│   └── index.js           # Entry point
├── .env.example
├── package.json
├── tailwind.config.js
└── README.md
```

## Features

### **Complete Sections**
- **Hero**: Dynamic role rotation, themed buttons, social links
- **About**: Personal info, stats, feature highlights
- **Skills**: Progress bars, categorized skills, certifications
- **Projects**: Filterable portfolio, clickable images, tech tags
- **Experience**: Timeline design, company details, tech stacks
- **Contact**: Working form, contact info, social links
- **Footer**: Quick links, contact details, back-to-top

### **Design Features**
- **3 Theme Modes**: Modern Minimalist, Dark Developer, Colorful Gradient
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Hover effects, transitions, loading states
- **Dynamic Content**: API-ready project loading with filters
- **Professional UI**: Glass effects, gradients, shadows

### **Interactive Elements**
- **Theme Switcher**: Live theme changing
- **Dynamic Roles**: Auto-rotating job titles
- **Project Filters**: Category-based filtering
- **Clickable Images**: Direct links to live projects
- **Resume Download**: PDF download functionality
- **Smooth Scrolling**: Navigation between sections

## Theme Options

1. **Modern Minimalist**: Clean white theme with blue accents
2. **Dark Developer**: Professional dark theme with purple accents
3. **Colorful Gradient**: Vibrant gradients with glass effects

## Responsive Design

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Perfect for tablets (768px+)
- **Desktop**: Full experience (1024px+)
- **Large Screens**: Scales beautifully (1440px+)

## Deployment Ready

### Frontend (Netlify/Vercel)
```bash
npm run build
# Deploy build folder
```

### Backend Integration
- Django REST API endpoints ready
- Environment variables configured
- CORS headers prepared

## Customization

1. **Personal Info**: Update `src/data/mockData.js`
2. **Resume**: Place PDF in `public/data/resume.pdf`
3. **Images**: Add project images to `public/images/`
4. **Themes**: Modify `src/contexts/ThemeContext.js`
5. **Content**: Edit component files for text changes

## Performance

- **Optimized Images**: Proper sizing and formats
- **Code Splitting**: Component-based loading
- **Smooth Animations**: 60fps transitions
- **Fast Loading**: Minimal bundle size
- **SEO Ready**: Proper meta tags and structure