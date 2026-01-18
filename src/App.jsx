import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TicketContainer from './components/TicketContainer'
import Footer from './components/Footer';

const loadTrickets = () => fetch("/public/tricket.json")
.then((res) => res.json());

function App() {
const tricketsPromise = loadTrickets ();
  return (
    <>
    <header>
     <Navbar></Navbar>
    </header>
   <section>
    <Suspense fallback={"Loading....."}>
    <TicketContainer promise ={tricketsPromise}></TicketContainer>
    </Suspense>
   </section>

   <section>
    <Footer></Footer>
   </section>
    </>
  )
}

export default App
