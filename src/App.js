import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Dashbored from './Components/Dashbored/Dashbored';
import Home from './Pages/Home';
import { useState } from 'react';
import Add from './Components/Add/Add';
import Navbar from './Components/Navbar/Navbar';
import SideMenue from './Components/SideMenue/SideMenue';
import Footer from './Components/Footer/Footer';
import LinksFooter from './Components/LinksFooter/LinksFooter';



function App() {
  const [cancel,setCancel]=useState(false);

  const[head,setHead]=useState("Add");
  const[ID,setID]=useState();
  
  const[close,setClose]=useState(false);

  const[data,setData]=useState([]);

  const [element,setElement]=useState([]);
  return (
    <>
    {cancel?<Add setCancel={setCancel} setHead={setHead} head={head} setID={setID} ID={ID} data={data} setData={setData} element={element} setElement={setElement}/>:<></>}
    <div className="App">
      <BrowserRouter>
      <Navbar close={close} setClose={setClose}/>
      {close?<SideMenue close={close} setClose={setClose}/>:<></>}
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashbored' element={<Dashbored setCancel={setCancel} cancel={cancel} setHead={setHead} head={head} setID={setID} data={data} setData={setData} element={element} setElement={setElement}/>}/>
      </Routes>
      <Footer/>
      <LinksFooter/>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
