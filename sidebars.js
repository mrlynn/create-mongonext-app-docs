// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/environment-setup',
        'getting-started/quickstart'
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/project-architecture',
        'core-concepts/key-features',
      ],
    },
    {
      type: 'category',
      label: 'Authentication',
      items: [
        'authentication/nextauth',
        'authentication/security-best-practices',
      ],
    },
    {
      type: 'category',
      label: 'Database',
      items: [
        'database/mongodb-atlas-setup',
        'database/mongoose-models',
        'database/data-operations',
      ],
    },
    {
      type: 'category',
      label: 'UI Components',
      items: [
        'ui-components/material-ui',
        'ui-components/layout-system',
        'ui-components/component-library',
      ],
    },
    {
      type: 'category',
      label: 'Admin Dashboard',
      items: [
        'admin-dashboard/features-overview',
        'admin-dashboard/usage-guide',
      ],
    },
    {
      type: 'category',
      label: 'API Documentation',
      items: [
        'api/authentication-endpoints',
        'api/product-endpoints',
        'api/blog-endpoints',
        'api/user-endpoints',
        'api/general',
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: [
        'deployment/vercel',
        'deployment/mongodb-atlas',
        'deployment/performance-optimization',
      ],
    },
    {
      type: 'category',
      label: 'Best Practices',
      items: [
        'best-practices/code-organization',
        'best-practices/security',
        'best-practices/performance',
        'best-practices/error-handling',
        'best-practices/testing',
        'best-practices/maintenance',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/common-issues',
        'troubleshooting/solutions',
        'troubleshooting/debugging',
        'troubleshooting/support',
      ],
    },
  ],
};

export default sidebars;
