import AppRoute from './components/AppRoute'
import Navbar from './components/Navbar'

import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AppRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
