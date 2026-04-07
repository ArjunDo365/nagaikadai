import { lazy } from 'react';
// import JewelHero from '../pages/JewelHero';
const JewelHero = lazy(() => import('../pages/JewelHero'));

const routes = [
    // dashboard
    {
        path: '/',
        element: <JewelHero />,
        layout: 'default',
    },

];

export { routes };
