import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import { SideNav } from 'src/ui/compounds/sidenav/Sidenav';
import { MainRoutes } from './MainRoutes';

function App() {

  return (
    <BrowserRouter>
      <SideNav />
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App
