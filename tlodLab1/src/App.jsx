import './App.css'
import Card from './compnent/Card'
import Footer from './compnent/Footer'
import Header from './compnent/Header'
import Navbar from './compnent/Navbar'

function App() {


  return (
    <>
    <Navbar></Navbar>
    
    <Header></Header>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-[80%] m-auto'>
    <Card imageUrl="https://i.pinimg.com/564x/10/ad/ea/10adea8b981351ba84cb57922ed7b165.jpg"
      title="Electric" 
      description="TV Televison Air condation Washing & Machince" 
       ></Card>
    <Card imageUrl="https://i.pinimg.com/564x/78/05/ac/7805ac0340204f63dc6748e276aefaa7.jpg"
      title="Clothings" 
      description="Womens Mens  Bags&Backpacks" 
       ></Card>

<Card imageUrl="https://i.pinimg.com/564x/8b/ed/07/8bed07b0525de6c40cec2fd811fa783c.jpg"
      title="Computers" 
      description="Desktop PC Laptop PC Gabing" 
       ></Card>

<Card imageUrl="https://i.pinimg.com/564x/ca/8b/30/ca8b3056fb59ae04095c09cac4a0ca8a.jpg"
      title="Home & Kitchen" 
      description="Funitures Drcor  Cookwares" 
       ></Card>

<Card imageUrl="https://i.pinimg.com/736x/14/5a/ed/145aed1f7dc70500e978b434d1ed1521.jpg"
      title="Healthy & Beauty" 
      description="Makeup Skin Care Hair Care" 
       ></Card>

<Card imageUrl="https://i.pinimg.com/564x/13/76/19/137619dfacf03f9a6f0e8f99d5b2e7ed.jpg"
      title="Jewelry & Watch" 
      description="Pendant Necklace Watch" 
       ></Card>
  </div>
  <Footer></Footer>
    </>
  )
}

export default App
