import { useState } from "react";
import "./App.css";
import Banner from "./Banner/Banner";
import Navbar from "./Head/Navbar";
import ButtonGroups from "./Buttons/ButtonGroups";
import Render from "./RenderComponent/Render";
import Cards from "./Cards/Cards";
import Teams from "./Teams/Teams";
import NewsLater from "./Newsletter/NewsLater";
import Footer from "./Footer/Footer";

function App() {
  const [coin, setCoin] = useState(0);
  const buttons = ["Available", "Selected"];
  const [isSelected, setIsSelected] = useState(0);
  const [teams, setteams] = useState([]);

  const handleClickCoin = () => {
    console.log("clicked");
    setCoin(coin + 20000);
  };

  const handleClickChoose = (card) => {
    console.log(card);
    const { price } = card;
    if (price < coin) {
      setCoin(coin - price);
      setteams([...teams, card]);
      alert("প্লেয়ার যোগ করা হয়েছে।");
    } else {
      alert("ক্রেডিট ক্লেইম করেন!");
    }
  };

  return (
    <>
      <div className="space-y-10 max-w-7xl mx-auto p-4">
        <Navbar coin={coin}></Navbar>
        <Banner handleClickCoin={handleClickCoin}></Banner>
        <div>
          <ButtonGroups
            buttons={buttons}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          ></ButtonGroups>
          <Render
            idx={isSelected}
            handleClickChoose={handleClickChoose}
            teams={teams}
            setteams={setteams}
          ></Render>
        </div>
        <div className="mt-24">
          <NewsLater className=""></NewsLater>
        </div>
      </div>
      <div className="bg-black">
      <Footer></Footer>
      </div>
    </>
  );
}

export default App;
