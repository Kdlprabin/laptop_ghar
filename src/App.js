import './App.css';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import ContactPage from './Pages/ContactPage';
// import LoginRegister from './Components/LoginRegister'
import Header from './Sections/Header';
import Footer from './Sections/Footer';

//routing for the pages//
let Page;

//The location of the app
let route = window.location.pathname;

//contactPage
if (route === "/Contact") {
  Page = <ContactPage />
}
//productPage
else if (route === "/Products") {
  Page = <ProductsPage />
}
//homePage
else {
  Page = <HomePage />
}

function App() {
  return (
    <>
      <Header />
      {Page}
      <Footer />
    </>
  );
}

export default App;
