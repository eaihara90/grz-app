import { BrowserRouter } from 'react-router-dom';

import './App.scss';
// import { GrzButton } from 'src/ui/atoms/buttons';
// import { GrzIconButton } from 'src/ui/atoms/buttons';
// import { GrzButtonOptions } from 'src/ui/atoms/buttons';
// import { GrzInput } from 'src/ui/atoms/input/input';
import { SideNav } from 'src/ui/compounds/sidenav/sidenav';
import { MainRoutes } from './main-routes';

function App() {

  return (
    <BrowserRouter>
      <SideNav />
      <MainRoutes />
      {/* <div className="app">
        <SideNav />
        <div className="wrapper">
          <GrzButton size='sm'>Next</GrzButton>
          <GrzButton size='md'>Next</GrzButton>
          <GrzButton size='lg'>Next</GrzButton>
        </div>

        <div className="wrapper">
          <GrzInput placeholder='Full name'/>
          <GrzInput placeholder='Full name'/>
        </div>

        <div className="wrapper">
          <GrzIconButton size='sm'>
            <i className="ph-bold ph-x"></i>
          </GrzIconButton>
          
          <GrzIconButton size='md'>
            <i className="ph-bold ph-x"></i>
          </GrzIconButton>
          
          <GrzIconButton size='lg'>
            <i className="ph-bold ph-x"></i>
          </GrzIconButton>
        </div>

        <div className="wrapper">
          <GrzButtonOptions
            onSelection={(_selection) => console.log(_selection)}
            label='Options'
            options={['First Option', 'Second Option']}
            size="sm"
          />
          <GrzButtonOptions
            onSelection={(_selection) => console.log(_selection)}
            label='Options'
            options={['First Option', 'Second Option']}
            size="md"
          />
          <GrzButtonOptions
            onSelection={(_selection) => console.log(_selection)}
            label='Options'
            options={['First Option', 'Second Option']}
            size="lg"
          />
        </div>
      </div> */}
    </BrowserRouter>
  );
}

export default App
