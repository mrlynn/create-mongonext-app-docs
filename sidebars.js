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
      link: {
        type: 'generated-index',
        title: 'Getting Started with MongoNext',
        description: 'Quickstart, installation, and environment setup for MongoNext.',
        slug: '/getting-started',
      },
      items: [
        'getting-started/quickstart',
        'getting-started/installation',
        'getting-started/environment-setup',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      link: {
        type: 'generated-index',
        title: 'Core Concepts',
        description: 'Project architecture and key features of MongoNext.',
        slug: '/core-concepts',
      },
      items: [
        'core-concepts/project-architecture',
        'core-concepts/key-features',
      ],
    },
    {
      type: 'category',
      label: 'Authentication',
      link: {
        type: 'generated-index',
        title: 'Authentication',
        description: 'NextAuth.js integration and security best practices.',
        slug: '/authentication',
      },
      items: [
        'authentication/nextauth',
        'authentication/security-best-practices',
      ],
    },
    {
      type: 'category',
      label: 'Database',
      link: {
        type: 'generated-index',
        title: 'Database',
        description: 'MongoDB Atlas setup, Mongoose models, and data operations.',
        slug: '/database',
      },
      items: [
        'database/mongodb-atlas-setup',
        'database/mongoose-models',
        'database/data-operations',
      ],
    },
    {
      type: 'category',
      label: 'UI Components',
      link: {
        type: 'generated-index',
        title: 'UI Components',
        description: 'Material UI integration, layout system, and reusable components.',
        slug: '/ui-components',
      },
      items: [
        'ui-components/material-ui',
        'ui-components/layout-system',
        'ui-components/component-library',
        'ui-components/rag-chatbot',
      ],
    },
    {
      type: 'category',
      label: 'Admin Dashboard',
      link: {
        type: 'generated-index',
        title: 'Admin Dashboard',
        description: 'Features and usage guide for the MongoNext admin dashboard.',
        slug: '/admin-dashboard',
      },
      items: [
        'admin-dashboard/features-overview',
        'admin-dashboard/usage-guide',
      ],
    },
    {
      type: 'category',
      label: 'API Documentation',
      link: {
        type: 'generated-index',
        title: 'API Documentation',
        description: 'REST API endpoints and usage for MongoNext.',
        slug: '/api',
      },
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
      link: {
        type: 'generated-index',
        title: 'Deployment',
        description: 'Vercel deployment, MongoDB Atlas production setup, and performance optimization.',
        slug: '/deployment',
      },
      items: [
        'deployment/vercel',
        'deployment/mongodb-atlas',
        'deployment/performance-optimization',
      ],
    },
    {
      type: 'category',
      label: 'Best Practices',
      link: {
        type: 'generated-index',
        title: 'Best Practices',
        description: 'Code organization, security, performance, error handling, testing, and maintenance.',
        slug: '/best-practices',
      },
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
      link: {
        type: 'generated-index',
        title: 'Troubleshooting',
        description: 'Common issues, solutions, debugging tips, and support resources.',
        slug: '/troubleshooting',
      },
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
