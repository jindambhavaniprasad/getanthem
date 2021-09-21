import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/home';
import Item from './components/item';
import Cart from './components/cart';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/item/:id" component={Item} />
      <Route exact path="/cart" component={Cart} />
    </BrowserRouter>
  );
}

export default App;
