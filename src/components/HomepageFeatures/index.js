import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import RouterIcon from '@mui/icons-material/AltRoute';
import MuiIcon from '@mui/icons-material/Widgets';
import DatabaseIcon from '@mui/icons-material/Storage';
import AuthIcon from '@mui/icons-material/LockOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CatalogIcon from '@mui/icons-material/Storefront';
import ApiIcon from '@mui/icons-material/Api';
import DeployIcon from '@mui/icons-material/CloudDone';

const FeatureList = [
  {
    title: 'Next.js App Router',
    icon: <RouterIcon className={styles.featureIcon} />, 
    description: (
      <>
        Modern routing, layouts, and server components for scalable apps.
      </>
    ),
  },
  {
    title: 'Material UI Integration',
    icon: <MuiIcon className={styles.featureIcon} />, 
    description: (
      <>
        Beautiful, responsive UI with Material UI, ready out of the box.
      </>
    ),
  },
  {
    title: 'MongoDB Atlas + Mongoose',
    icon: <DatabaseIcon className={styles.featureIcon} />, 
    description: (
      <>
        Production-ready database with models, validation, and Atlas cloud hosting.
      </>
    ),
  },
  {
    title: 'NextAuth.js Authentication',
    icon: <AuthIcon className={styles.featureIcon} />, 
    description: (
      <>
        Secure, extensible authentication system with social login support.
      </>
    ),
  },
  {
    title: 'Admin Dashboard',
    icon: <DashboardIcon className={styles.featureIcon} />, 
    description: (
      <>
        Manage products, users, categories, and blog posts with a built-in dashboard.
      </>
    ),
  },
  {
    title: 'Product Catalog & Blog',
    icon: <CatalogIcon className={styles.featureIcon} />, 
    description: (
      <>
        Built-in e-commerce product catalog and content management blog system.
      </>
    ),
  },
  {
    title: 'API Routes',
    icon: <ApiIcon className={styles.featureIcon} />, 
    description: (
      <>
        RESTful endpoints for products, users, authentication, and more.
      </>
    ),
  },
  {
    title: 'Vercel-Ready Deployment',
    icon: <DeployIcon className={styles.featureIcon} />, 
    description: (
      <>
        Optimized for instant deployment to Vercel with best practices built-in.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureCardContent}>
        {icon}
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
