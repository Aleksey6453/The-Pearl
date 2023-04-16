import './App.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import Content from './components/Content';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="meny">
          <Categories />
          <Sort />
        </div>
        <Content />
      </div>
    </div>
  );
}

export default App;
