import * as Pages from 'pages';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  const pages: any[] = Object.entries(Pages);
  return (
    <BrowserRouter>
      <Routes>
        {pages?.map((page) => {
          return <Route key={page[1].path} path={page[1].path} element={page[1].default()} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
