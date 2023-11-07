import { useEffect, useState } from "react";
import axios from "axios";
import request from "../server/Server";
import GameCard from "../components/card/GameCard";

import data from '../server/data.json'

const GlobalPage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (request) {
      try {
        const response = await axios.request(request);
        setGames(response.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      setGames(data)
    }

  };
  console.log(games);

  return (
    <>
      <div className="container my-5">
        <div className="category__card ">
          {
            games.length > 0 ? (games?.map((category) => (
              <GameCard category={category} key={category.id} />
            ))) : (<div className="empt">NOT FOUND GAME</div>)
          }
        </div>
      </div>
    </>
  );
};

export default GlobalPage;