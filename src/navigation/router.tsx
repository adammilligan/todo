import {createBrowserRouter, Navigate, RouteObject} from 'react-router-dom';
import {lazy, Suspense} from 'react';

import {PageLayout} from "../components/helpers/pageLayout";

const Toggle = lazy(() => import('./../views/toggle'))

export const appRouter: RouteObject[] = [
    {
        element: (
            <Suspense>
                <PageLayout />
            </Suspense>
        ),
        children: [
            {
                path: '/',
                element: <Toggle />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to='/'/>
    }
];

export const router = createBrowserRouter(appRouter);
