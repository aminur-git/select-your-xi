import { useState } from "react";
import "./App.css";
import Banner from "./Banner/Banner";
import Navbar from "./Head/Navbar";
import ButtonGroups from "./Buttons/ButtonGroups";
import Render from "./RenderComponent/Render";

function App() {
  const [coin, setCoin] = useState(0);
  const buttons = [
    "Available", "Selected"
  ]
 

  const handleClickCoin = () => {
    console.log("clicked");
    setCoin(coin + 20000);
  };

  const handleClickChoose = ({price}) => {
    if(price < coin){
      setCoin(coin - price)
      alert('প্লেয়ার যোগ করা হয়েছে।')
    }
    else{
      alert('ক্রেডিট ক্লেইম করেন!')
    }
  }

  const [isSelected, setIsSelected] = useState(0)



  return (
    <>
      <div className="space-y-10">
        <Navbar coin={coin}></Navbar>
        <Banner handleClickCoin={handleClickCoin}></Banner>
        <div>
        <ButtonGroups buttons={buttons} isSelected={isSelected} setIsSelected={setIsSelected}></ButtonGroups>
        <Render idx={isSelected} handleClickChoose={handleClickChoose}></Render>
        </div>
      </div>
    </>
  );
}

export default App;
