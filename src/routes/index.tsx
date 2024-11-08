// Common
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRoutes, RouteObject } from 'react-router-dom';
import Login from '../views/login';
// Resource
import privateRoutesData from './privateRoutes';
import publicRoutesData from './publicRoutes';


const privateRoutes = privateRoutesData.map((routeData, index) => {
    const key = 'private_route_' + index;
    const privateRoute = (
        <Route
            element={routeData.element}
            key={key}
            path={routeData.path}
        />
    );
    return privateRoute;
});

const publicRoutes = publicRoutesData.map((routeData, index) => {
    const key = 'public_route_' + index;
    const publicRoute = (
        <Route
            element={routeData.element}
            key={key}
            path={routeData.path}
        />
    );
    return publicRoute;
});


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {privateRoutes}
                {publicRoutes}
            </Routes>
        </Router>
    );
};

export default AppRouter;