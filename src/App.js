import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBooks from './AddBooks';

function App() {
  return (
    

<BrowserRouter>

<Routes>

  <Route path='/' element={<AddBooks/>}/>
</Routes>
</BrowserRouter>


  );
}

export default App;
