# Social Pay Office Website

A professional, modern showcase website for Social Pay Office - a Belgian social secretariat service provider. Features a clean, sophisticated design with full internationalization support for English, French, and Dutch.

## Features

### Design & UX
- **Modern Professional Design**: Inspired by contemporary IT consulting websites with a sober, business-appropriate aesthetic
- **Responsive Layout**: Fully responsive design that adapts seamlessly to desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-based animations and smooth transitions for enhanced user experience
- **Clean Color Scheme**: Professional green color palette (#047857 emerald primary) with proper contrast and accessibility

### Internationalization
- **Multi-language Support**: Complete support for English (EN), French (FR), and Dutch (NL)
- **Dynamic Translation**: All content translates instantly when switching languages
- **Persistent Preference**: Language selection is saved to localStorage
- **Form Placeholder Translation**: Even form placeholders are properly translated

### Sections

#### Hero Section
- Large, bold typography with gradient background
- Three key statistics (500+ clients, 15+ years, 100% compliance)
- Clear call-to-action buttons
- Professional tagline and description

#### Services Section (5 Cards)
1. **Payroll Management** (Gestion des Salaires / Loonbeheer)
   - Monthly salary processing
   - Tax calculations & filing
   - Social security declarations

2. **Salary Optimization** (Optimisation Salariale / Salaris Optimalisatie)
   - Cost analysis & reporting
   - Tax efficiency strategies
   - Benefits optimization

3. **Legal Advice** (Conseils Juridiques / Juridisch Advies)
   - Employment contracts
   - Regulatory compliance
   - Dispute resolution

4. **HR Tools** (Outils RH / HR Hulpmiddelen)
   - Employee portal access
   - Time & attendance tracking
   - Document management

5. **Social Audits** (Contrôles Sociaux / Sociale Controles)
   - Compliance verification
   - Risk assessment
   - Detailed audit reports

#### Why Choose Us Section
Four key value propositions:
- Expert Knowledge in Belgian legislation
- Personal Service with dedicated account managers
- Full Compliance (100% compliant)
- Digital Solutions for transparency

#### About Section
Company overview highlighting expertise and commitment to service

#### Contact Section
- Contact information cards (office, phone, email)
- Professional contact form
- Hover effects on contact cards

#### Footer
- Company branding
- Quick navigation links
- Copyright information

## Project Structure

```
SocialPayOffice/
├── index.html          # Main HTML file with semantic structure
├── README.md           # This file
├── css/
│   └── styles.css      # Complete stylesheet with CSS variables
├── js/
│   ├── i18n.js         # Internationalization module
│   └── main.js         # Main JavaScript functionality
└── assets/             # Directory for images and other assets
```

## Design Features

### CSS Architecture
- **CSS Variables**: Consistent design tokens for colors, shadows, and transitions
- **Modern Layout**: CSS Grid and Flexbox for responsive layouts
- **Professional Shadows**: Multiple shadow levels for depth and hierarchy
- **Smooth Transitions**: Cubic-bezier easing for professional animations

### Interactive Elements
- **Service Cards**: Border-based cards with lift effect on hover
- **Icon Animations**: Icons change background color and scale on hover
- **Navigation**: Underline animation on menu items
- **Mobile Menu**: Slide-in hamburger menu for mobile devices
- **Scroll Animations**: Cards fade in as you scroll down the page

### Typography
- **Responsive Sizing**: Uses clamp() for fluid typography
- **Font Weights**: 300 (light), 500 (medium), 600 (semibold), 700 (bold), 900 (black)
- **Hierarchy**: Clear visual hierarchy with section tags and titles

## How to Use

1. **Open the Website**: Simply open `index.html` in any modern web browser
2. **Navigate**: Use the top navigation menu to jump to different sections
3. **Switch Languages**: Click EN, FR, or NL buttons to change the language
4. **Mobile**: On mobile devices, use the hamburger menu to access navigation

## Customization

### Changing Colors

Update the CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #047857;      /* Main brand color (Emerald green) */
    --primary-dark: #064e3b;       /* Darker variant */
    --primary-light: #10b981;      /* Lighter variant */
    --accent-color: #34d399;       /* Accent color */
    /* ... other variables */
}
```

### Adding/Editing Content

#### To add a new service:
1. Add HTML in `index.html` within the `.services-grid`
2. Add translations in `js/i18n.js` for all three languages
3. Use the same card structure for consistency

#### To modify translations:
Edit the `translations` object in `js/i18n.js`:

```javascript
const translations = {
    en: { /* English translations */ },
    fr: { /* French translations */ },
    nl: { /* Dutch translations */ }
};
```

### Adding Images
Place images in the `assets/` folder and reference them in HTML:

```html
<img src="assets/your-image.png" alt="Description">
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS with custom properties, Grid, Flexbox
- **Vanilla JavaScript**: No frameworks, lightweight and fast
- **SVG Icons**: Scalable vector graphics for icons
- **Intersection Observer API**: For scroll animations

## Performance Features

- No external dependencies (no jQuery, no React)
- Minimal JavaScript footprint
- CSS-based animations (GPU accelerated)
- Lazy loading compatible structure
- LocalStorage for persistent language preference

## Accessibility

- Semantic HTML5 elements
- Proper heading hierarchy
- ARIA labels where needed (can be enhanced)
- Keyboard navigation support
- High contrast colors for readability

## Future Enhancements

Potential improvements:
- Add actual form backend integration
- Implement Google Analytics
- Add more animation effects
- Create additional pages (services detail pages)
- Add testimonials section
- Implement dark mode
- Add SEO meta tags optimization

## License

© 2025 Social Pay Office. All rights reserved.

---

**Note**: This is a showcase website template. Update contact information, statistics, and content to match your actual business before deploying to production.
