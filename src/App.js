import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (
    <>
      <meta name="description" content="A restaurant for nature lovers"/>
      <meta name="og:title" content="Little Lemon Restaurant"/>
      <meta name="og:description" content="A restaurant for nature lovers"/>
      <meta name="og:image" content="./Logo.svg"/>
      

      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    
    </>
  );
}

export default App;
