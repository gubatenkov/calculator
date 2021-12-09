import { Route } from 'react-router-dom';

export const renderRoutes = (items, path, Component) => {
  if (items.length) {
    return items.map((i) => (
      <Route key={i.id} path={path} element={<Component {...i} />} />
    ));
  }

  return null;
};
