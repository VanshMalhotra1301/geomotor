import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://geomotorsindia.vercel.app';
const OG_IMAGE = `${BASE_URL}/og-image.png`;
const SITE_NAME = 'Sikka and Sons';

/**
 * SEO — Full-featured meta tag injector for all pages.
 * Handles title, description, canonical, OG, Twitter, and robots meta.
 */
export default function SEO({
  title,
  description,
  keywords,
  slug = '',
  ogType = 'website',
  ogImage = OG_IMAGE,
  noindex = false,
}) {
  const canonicalUrl = `${BASE_URL}${slug ? (slug.startsWith('/') ? slug : '/' + slug) : ''}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}