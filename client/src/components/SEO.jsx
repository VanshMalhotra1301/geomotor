import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, slug = "" }) {
  // Updated to use your primary Vercel production domain
  const baseUrl = "https://geomotorsindia.vercel.app"; 
  const canonicalUrl = `${baseUrl}${slug ? (slug.startsWith('/') ? slug : '/' + slug) : ''}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}