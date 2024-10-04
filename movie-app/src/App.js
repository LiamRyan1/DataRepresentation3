import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//imports from components folders
import NavigationBar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <Router>
      <NavigationBar />{/*bootstrap navbar added*/}
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<h1>Read Component</h1>} />
        <Route path="/create" element={<h1>Create Component</h1>} />
      </Routes>
      {/*calls footer function */}
      <Footer />
    </Router>
  );
}

export default App;