
 /*imports files from components folder*/
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div>
       {/*Invoking imported variables from the components*/}
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;