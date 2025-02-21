import Footer from './Footer';
import './home.css'
import ProductList from './ProductList';

function Home() {
  return (
    <>
    <div className="banner">
      
      <input type="search" placeholder='Search....' />
    </div>


    <div className="hbody">
      <ProductList />
    </div>
    <Footer />
    </>
  );
}

export default Home;
