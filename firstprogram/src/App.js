// @ts-ignore
import { BrowserRouter as Routers, Routes, Route} from "react-router-dom";
import  Fun2  from "./Component/Pages/About";
import { Header } from "./Component/Layout/Header";
import {Home} from './Component/Pages/Home';
import UseState from "./Component/Pages/UseState";


function App (){

  return(
    <>
      <Routers>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="state" element={<UseState/>} />
        </Routes>
      </Routers>
    </>
  )
}
export default App 