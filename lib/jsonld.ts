export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Salah Ahmad',
  jobTitle: 'Senior Real Estate Advisor',
  description:
    'Dubai luxury real estate advisor specialising in villas, branded residences, and off-market opportunities for high-net-worth clients.',
  telephone: '+971523243294',
  email: 'salah@uniqueproperties.ae',
  url: 'https://salahestates.ae',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  knowsAbout: [
    'Dubai luxury real estate',
    'Branded residences',
    'Off-plan investment',
    'Golden Visa property',
    'Ultra-prime villas',
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Salah Private Estates',
  description:
    'Premier Dubai luxury real estate advisory. Exclusive access to villas, branded residences, and off-market opportunities.',
  telephone: '+971523243294',
  email: 'salah@uniqueproperties.ae',
  url: 'https://salahestates.ae',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  priceRange: 'AED 2,000,000+',
  currenciesAccepted: 'AED, USD, GBP, EUR',
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
  },
};
