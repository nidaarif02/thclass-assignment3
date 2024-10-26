
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import About from "./about/page";
import Menu from "./menu/page";
import Image from "next/image";



const Home=()=>{
  return(
    <div>
<Header/>
<About/>
<Menu />
<Footer/>
    </div>
    

  );
};
export default Home;
