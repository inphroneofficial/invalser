
// App initialization utilities
export const initializeTheme = () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

export const initializeSEO = () => {
  // Set comprehensive SEO meta tags
  document.title = "invalser - India's #1 Premium Valet Services | Instant Booking";
  
  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', 'Find and book premium valet services across India. 500+ verified professionals for weddings, events, personal use. Instant booking, transparent pricing, 24/7 support. Best valet service platform in India.');

  // Add keywords meta tag
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', 'valet services india, book valet online, professional valet, wedding valet, event valet, personal valet, valet booking, premium valet services, trusted valet, valet near me');

  // Add Open Graph tags
  const ogTags = [
    { property: 'og:title', content: 'invalser - India\'s #1 Premium Valet Services' },
    { property: 'og:description', content: 'Book premium valet services instantly. 500+ verified professionals across India.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: window.location.origin },
    { property: 'og:site_name', content: 'invalser' }
  ];

  ogTags.forEach(tag => {
    let element = document.querySelector(`meta[property="${tag.property}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('property', tag.property);
      document.head.appendChild(element);
    }
    element.setAttribute('content', tag.content);
  });

  // Add Twitter Card tags
  const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'invalser - India\'s #1 Premium Valet Services' },
    { name: 'twitter:description', content: 'Book premium valet services instantly. 500+ verified professionals across India.' }
  ];

  twitterTags.forEach(tag => {
    let element = document.querySelector(`meta[name="${tag.name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', tag.name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', tag.content);
  });

  // Add structured data for local business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "invalser",
    "description": "India's premier valet services platform connecting customers with verified professionals",
    "url": window.location.origin,
    "telephone": "+91-9550464957",
    "priceRange": "₹₹",
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "offers": {
      "@type": "Offer",
      "description": "Premium valet services for personal, wedding, and corporate events"
    }
  };

  let structuredDataScript = document.querySelector('#structured-data') as HTMLScriptElement;
  if (!structuredDataScript) {
    structuredDataScript = document.createElement('script') as HTMLScriptElement;
    structuredDataScript.id = 'structured-data';
    structuredDataScript.type = 'application/ld+json';
    document.head.appendChild(structuredDataScript);
  }
  structuredDataScript.textContent = JSON.stringify(structuredData);
};

export const initializePerformance = () => {
  // Add smooth scrolling behavior and scroll to top
  document.documentElement.style.scrollBehavior = "smooth";
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
};

export const initializeApp = () => {
  initializeTheme();
  initializeSEO();
  initializePerformance();
};
