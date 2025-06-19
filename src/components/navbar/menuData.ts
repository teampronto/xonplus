
export interface MenuItem {
  title: string;
  href: string;
  description: string;
  target?: string;
}

export interface MenuItems {
  [category: string]: MenuItem[];
}

export const menuItems: MenuItems = {
  Products: [
    { 
      title: 'xonEnterprise+', 
      href: '/products/enterprise',
      description: 'Enterprise-grade threat intelligence and monitoring'
    },
    { 
      title: 'xonConsumer+', 
      href: '/products/consumer',
      description: 'Personal identity and credential protection'
    },
    { 
      title: 'xonAPI+', 
      href: '/products/api',
      description: 'Real-time threat detection API services'
    },
    { 
      title: 'xonThreatIntel+', 
      href: '/products/threat-intel',
      description: 'Advanced threat intelligence platform'
    },
  ],
  Solutions: [
    { 
      title: 'Account Takeover Prevention', 
      href: '/solutions/account-takeover',
      description: 'Prevent unauthorized account access'
    },
    { 
      title: 'Employee Credential Monitoring', 
      href: '/solutions/credential-monitoring',
      description: 'Monitor employee credentials for threats'
    },
    { 
      title: 'Customer Account Protection', 
      href: '/solutions/account-protection',
      description: 'Protect customer accounts from threats'
    },
    { 
      title: 'Dark Web Monitoring', 
      href: '/solutions/dark-web',
      description: 'Monitor dark web for data breaches'
    },
    { 
      title: 'Compliance & Risk Management', 
      href: '/solutions/compliance',
      description: 'Stay compliant and manage risks'
    },
    { 
      title: 'For MSSPs / Security Partners', 
      href: '/solutions/partners',
      description: 'Partner solutions for security providers'
    },
    { 
      title: 'For Developers / API Integration', 
      href: '/solutions/developers',
      description: 'API integration for developers'
    },
  ],
  'Free Tools': [
    { 
      title: 'Check for Exposure', 
      href: '/exposure-check',
      description: 'Check if your domain has been exposed in breaches'
    },
    { 
      title: 'Privacy Shield', 
      href: 'https://xposedornot.com/shield',
      description: 'Protect your email privacy',
      target: '_blank'
    },
    { 
      title: 'Breach Insights', 
      href: 'https://xposedornot.com/breaches',
      description: 'Get insights about data breaches',
      target: '_blank'
    },
    { 
      title: 'Community API', 
      href: 'https://xposedornot.com/api_doc',
      description: 'Free community version of our threat detection API',
      target: '_blank'
    },
    { 
      title: 'Data Breach Patterns', 
      href: 'https://xposedornot.com/breaches-visualisations',
      description: 'Visualize data breach patterns',
      target: '_blank'
    },
    { 
      title: 'Exposed Data Breaches', 
      href: 'https://xposedornot.com/xposed',
      description: 'View exposed data breaches',
      target: '_blank'
    },
  ],
  Resources: [
    { 
      title: 'Blog', 
      href: 'https://blog.xposedornot.com/',
      description: 'Latest security insights and updates',
      target: '_blank'
    },
    { 
      title: 'Case Studies', 
      href: '/resources/case-studies',
      description: 'Real-world success stories'
    },
    { 
      title: 'FAQs', 
      href: '/faq',
      description: 'Common questions answered'
    },
    { 
      title: 'Latest News', 
      href: 'https://xposedornot.com/xonPulse',
      description: 'Latest security news and updates',
      target: '_blank'
    },
    { 
      title: 'API Documentation', 
      href: 'https://xposedornot.com/api_doc',
      description: 'Detailed API documentation',
      target: '_blank'
    },
  ],
};
