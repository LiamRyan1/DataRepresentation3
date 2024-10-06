import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Import from components folder
import NavigationBar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <Router>{/*Enables url based nav*/}
      <NavigationBar />{/*calling navigationbar from components*/}
      <Routes>{/*manages different route definitions*/}
        {/*specifies componets to render based on url */}
        <Route path="/home" element={<Content/>} />
        <Route path="/read" element={<h1> <Footer /></h1>} />
        <Route path="/create" element={<h1><Header /></h1>} />
      </Routes>
      {/*calls footer components
      <Footer />*/}
    </Router>
  );
}

export default App;
