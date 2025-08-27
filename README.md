# Connor Hardin - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, experience, and accomplishments in a clean, professional design.

## ✨ Features

- **Modern Design**: Clean, minimalist design with smooth animations and hover effects
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Built-in dark/light theme toggle
- **SEO Optimized**: Meta tags, Open Graph, and structured data for better search visibility
- **Performance**: Optimized images and fast loading times
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
connorhardin-portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   ├── experience/        # Experience page
│   ├── accomplishments/   # Accomplishments page
│   ├── contact/           # Contact page
│   ├── not-found.tsx      # 404 page
│   └── globals.css        # Global styles
├── components/             # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── ProjectCard.tsx    # Project display card
│   └── ...                # Other components
├── data/                   # Data files
│   ├── projects.ts        # Project information
│   ├── experience.ts      # Work experience
│   ├── skills.ts          # Skills and expertise
│   └── accomplishments.ts # Achievements and milestones
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/connorhardin-portfolio.git
   cd connorhardin-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

Update the following files with your information:

- **`data/projects.ts`**: Add your projects with descriptions, tech stacks, and links
- **`data/experience.ts`**: Update work history and research experience
- **`data/skills.ts`**: Modify skills and proficiency levels
- **`data/accomplishments.ts`**: Add your achievements, degrees, and certifications
- **`components/Header.tsx`**: Update navigation links if needed
- **`components/Footer.tsx`**: Update social media links and contact information

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Typography**: Update fonts in `app/layout.tsx`
- **Layout**: Adjust spacing and layout in component files

### Images

- Replace placeholder images with your own
- Update image paths in data files
- Optimize images for web (recommended: WebP format)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Update `next.config.js` with your domain

### Deploy to Other Platforms

- **Netlify**: Use `npm run build` and deploy the `out` folder
- **GitHub Pages**: Configure for static export
- **AWS S3**: Build and upload static files

## 📱 Performance Optimization

- Images are automatically optimized with Next.js Image component
- CSS is purged and minified in production
- Code splitting for better loading performance
- SEO meta tags for better search visibility

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📊 Analytics & SEO

- Built-in SEO optimization with Next.js
- Open Graph tags for social media sharing
- Structured data for search engines
- Meta tags for better indexing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Unsplash](https://unsplash.com/) for placeholder images

## 📞 Contact

- **Email**: your.email@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **LinkedIn**: [Your Name](https://linkedin.com/in/yourusername)

---

**Note**: Remember to update all placeholder content, links, and images with your actual information before deploying!
