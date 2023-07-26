import './App.css';
import Menu from './Components/Menu';
import { routes } from './Router/Route';

function App() {
  return (
    <div className="App">
      {/* menu */}
      <Menu/>
      
      {/* content */}
      {routes}

    </div>
  );
}

export default App;
