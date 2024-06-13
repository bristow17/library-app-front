import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBooks from './AddBooks';
import ViewAll from './ViewAll';
import SearchBooks from './SearchBooks';

function App() {
  return (
    

<BrowserRouter>

<Routes>

  <Route path='/' element={<AddBooks/>}/>
  <Route path='/viewall' element={<ViewAll/>}/>
  <Route path='/search' element={<SearchBooks/>}/>
</Routes>
</BrowserRouter>


  );
}

export default App;
