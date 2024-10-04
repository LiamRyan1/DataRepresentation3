import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Import from components folder
import NavigationBar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <Router>
      <NavigationBar />{/*calling navigationbar from components*/}
      <Routes>
        
        <Route path="/home" element={<Content/>} />
        <Route path="/read" element={<h1> <Footer /></h1>} />
        <Route path="/create" element={<h1><Header /></h1>} />
      </Routes>
      {/*calls footer function 
      <Footer />*/}
    </Router>
  );
}

export default App;