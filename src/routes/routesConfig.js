import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import SearchPage from '@containers/SearchPage';
import FavoritesPage from '@containers/FavoritesPage';
import NotFoundPage from '@containers/NotFoundPage';

import ErrorMessage from '@components/ErrorMessage';
import FilterPage from '../containers/FilterPage/FilterPage';

const routesConfig = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/people',
        element: <PeoplePage />
    },
    {
        path: '/people/:id',
        element: <PersonPage />
    },
    {
        path: '/search',
        element: <SearchPage />
    },
    {
        path: '/favorites',
        element: <FavoritesPage />
    },
    {
        path: '/filter',
        element: <FilterPage />
    },
    {
        path: '/fail',
        element: <ErrorMessage />
    },
    {
        path: '/not-found',
        element: <NotFoundPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
];

export default routesConfig;
