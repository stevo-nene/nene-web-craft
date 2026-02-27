import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = 'Steve Nene | Full-Stack Developer & Cybersecurity Enthusiast',
  description = 'Portfolio of Steve Nene, a full-stack software developer specializing in React, Node.js, Python, and modern web technologies. Explore projects, blog posts, and professional experience.',
  keywords = 'Steve Nene, software developer, full-stack developer, React, Node.js, Python, TypeScript, web development, cybersecurity, portfolio',
  image = 'https://stevenene.top/profile.jpg',
  url = 'https://stevenene.top',
  type = 'website'
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Steve Nene Portfolio" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@Stevonene" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
