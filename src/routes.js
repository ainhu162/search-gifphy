import React from 'react';
import SearchPage from './pages/SearchPage';
import FavoritePage from './pages/FavoritePage';

const routes = [
    {
        path : '/',
        exact: true,
        main: () => <SearchPage/>
    },
    {
        path:'/favorite',
        exact: false,
        main: () => <FavoritePage/>
    }
];
export default routes;