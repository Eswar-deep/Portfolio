# Portfolio Customization Guide

This guide will help you personalize your portfolio with your own information.

## 🚀 Quick Start

1. **Open `src/Portfolio.jsx`** - This is the main file you'll be editing
2. **Search for `[Your Name]`** - Replace all instances with your actual name
3. **Search for `your.email@example.com`** - Replace with your email
4. **Search for `yourprofile`** - Replace with your LinkedIn username
5. **Search for `yourusername`** - Replace with your GitHub username

## 📝 Detailed Customization Steps

### 1. Personal Information (Lines 10-15)

```javascript
const fullText = "Hi, I'm [Your Name]!"; // Replace with your name
```

### 2. Page Title (Line 108)

```javascript
<title>[Your Name] - Portfolio</title>
```

### 3. Navigation Bar (Line 115)

```javascript
<a href="#" className="text-white font-bold text-xl hover:text-[#64ffda] transition navbar-text">
  [Your Name]
</a>
```

### 4. Profile Image (Lines 225-227)

```javascript
<img
  src="/IMG_8042.jpg" // Replace with your image path
  alt="[Your Name]"   // Replace with your name
  className="w-72 h-72 object-cover rounded-xl shadow-lg border-4 border-[#64ffda]/20 photo-hover"
/>
```

### 5. Contact Links (Lines 230-250)

```javascript
<a href="mailto:your.email@example.com"> // Replace with your email
<a href="https://linkedin.com/in/yourprofile"> // Replace with your LinkedIn
<a href="https://github.com/yourusername"> // Replace with your GitHub
<a href="public/your-resume.pdf"> // Replace with your resume file
```

### 6. About Section (Lines 260-270)

Replace the placeholder text with your own introduction:

```javascript
<p className="text-lg mb-4 text-gray-300">
  I'm a [Your Role/Title] passionate about [Your Interests/Specialization]. 
  I graduated from [Your University] with a degree in [Your Major]. 
  I love building [type of applications/solutions] and solving complex problems through innovative technology solutions.
</p>
<p className="text-lg mb-4 text-gray-300">
  When I'm not coding, I enjoy [Your Hobbies/Interests]. 
  I'm always eager to learn new technologies and take on challenging projects that push my boundaries.
</p>
```

### 7. Experience Section (Lines 290-320)

Replace the experience array with your own work history:

```javascript
{[
  {
    title: "Software Engineer",
    company: "Your Company",
    date: "Jan 2024 - Present",
    description: "Description of your current role and achievements.",
    technologies: ["React", "Node.js", "TypeScript"]
  },
  // Add more experiences...
]}
```

### 8. Projects Section (Lines 80-120)

Replace the projects array with your own projects:

```javascript
const projects = [
  {
    title: "Project 1 - [Your Project Name]",
    description: "Description of your first project. What did you build? What problems did it solve?",
    github: "https://github.com/yourusername/project1",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  // Add more projects...
];
```

### 9. Contact Section (Lines 380-390)

```javascript
<a href="mailto:your.email@example.com"> // Replace with your email
<a href="https://linkedin.com/in/yourprofile"> // Replace with your LinkedIn
```

### 10. Footer (Line 400)

```javascript
<p className="text-gray-400 text-sm">
  Made with <span className="text-red-400">♥</span> by [Your Name]
</p>
```

## 🖼️ Adding Your Images

1. **Profile Image**: 
   - Place your profile image in the `public/` directory
   - Update the `src` attribute in the img tag
   - Recommended size: 288x288 pixels (72rem x 72rem)

2. **Resume**: 
   - Place your resume PDF in the `public/` directory
   - Update the href attribute in the resume link

## 🎨 Styling Customization

### Colors
The portfolio uses a dark theme with these main colors:
- Primary: `#64ffda` (cyan)
- Background: `#0a192f` (dark blue)
- Card background: `#112240` (lighter dark blue)
- Text: `#8892b0` (gray)

### Fonts
- Headings: Space Mono (monospace)
- Body text: Arial/Helvetica

## 📱 Testing Your Changes

1. Run `npm run dev` to start the development server
2. Open `http://localhost:5173` in your browser
3. Test all links and sections
4. Check responsiveness on different screen sizes

## 🚀 Deployment

Once you're happy with your portfolio:

1. Run `npm run build` to create a production build
2. Deploy the `dist/` folder to your preferred hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - Firebase Hosting

## 💡 Tips

- Keep project descriptions concise but informative
- Use action verbs in your experience descriptions
- Include specific technologies and achievements
- Make sure all links work correctly
- Test on mobile devices
- Keep your information up to date

## 🆘 Need Help?

If you get stuck or need help with customization:
1. Check the browser console for errors
2. Make sure all file paths are correct
3. Verify that all required files are in the right directories
4. Test one change at a time to isolate issues

Happy customizing! 🎉 