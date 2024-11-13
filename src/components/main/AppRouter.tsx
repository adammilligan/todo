import { RouterProvider } from 'react-router-dom';

import { router } from 'navigation/router';


const AppRouter = () => {
  const renderContent = () => (
    <RouterProvider router={router} />
  );

  return renderContent();
};

export default AppRouter;
