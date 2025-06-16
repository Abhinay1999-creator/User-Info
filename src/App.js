import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Form } from './components/Form';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Read } from './components/Read';
import { Update } from './components/Update';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>

        <Routes>
          <Route exact path='/' element={<Form></Form>} />
          <Route exact path='/read' element={<Read></Read>} />
          <Route exact path='/edit/:id' element={<Update></Update>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
