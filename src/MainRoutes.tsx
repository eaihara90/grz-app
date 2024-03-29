import { Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/home/Home';
import { FavoritesPage } from './pages/favorites/Favorites';
import { AlbumsPage } from './pages/albums/albums-page';

const routes = [
  { path: '/home', component: HomePage },
  // { path: '/files', component: FilesPage },
  { path: '/favorites', component: FavoritesPage },
  { path: '/albums', component: AlbumsPage },
];

export function MainRoutes(): JSX.Element {
  return (
    <Switch>
      { routes.map((x, i) => <RouteWithSubRoutes key={i} {...x} />)}
    </Switch>
  );
}

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}