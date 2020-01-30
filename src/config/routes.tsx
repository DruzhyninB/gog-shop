import React from 'react';
import { Redirect } from 'react-router-dom';

import { ShopConfig } from 'pages/Shop/ShopConfig';


let routeConfig = [
    ShopConfig
]

export const routes: object[] = [
    ...routeConfig,
    {
        path: '/',
        component: () => <Redirect to="/" />
    }
];