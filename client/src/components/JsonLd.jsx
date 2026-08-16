import { Helmet } from 'react-helmet-async';

/**
 * JsonLd — Injects JSON-LD structured data into <head> via react-helmet-async.
 * Usage: <JsonLd data={schemaObject} /> or <JsonLd data={[schema1, schema2]} />
 */
export default function JsonLd({ data }) {
  if (!data) return null;

  // Support single object or array of schemas
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <Helmet>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

// ─── Schema Builders ───────────────────────────────────────────────

const BASE_URL = 'https://geomotorsindia.vercel.app';

export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url ? `${BASE_URL}${item.url}` : undefined,
    })),
  };
}

export function buildFAQSchema(faqItems) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function buildProductSchema(product, series) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.desc,
    brand: {
      '@type': 'Brand',
      name: 'Sikka and Sons',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Sikka and Sons',
      url: BASE_URL,
    },
    category: series?.name || 'Cooler Motors',
    url: `${BASE_URL}/products/${series?.slug || ''}/${product.id}`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      seller: {
        '@type': 'Organization',
        name: 'Sikka and Sons',
      },
    },
  };
}

export function buildServiceSchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${BASE_URL}${url}`,
    provider: {
      '@type': 'Organization',
      name: 'Sikka and Sons',
      url: BASE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  };
}
