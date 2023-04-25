import React from 'react'
import { Routes, Route  } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';


export const AppContext = React.createContext('')

function App() {
  const [searchValue, setSearchValue] = React.useState('')

  return (
   
      <div className="App">
        <div className="wrapper">
          
         
        <AppContext.Provider value={{searchValue, setSearchValue}}>
              <Header />
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/cart' element={<Cart />}/>
                <Route path='*' element={<NotFound />}/>
              </Routes>
          </AppContext.Provider>
        </div>
    </div>
  
    
  );
}

export default App;
