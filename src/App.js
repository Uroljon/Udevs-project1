import './App.css';
import AllPro from './components/AllPro/AllPro';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <div className='container'>

      <Header />
      <Menu />

      <Products />

      <AllPro />
      </div>

    </div>
  );
}

export default App;
