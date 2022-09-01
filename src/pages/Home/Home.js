import React, { useState } from "react";
import axios from "axios";
import style from "../../scss/home.module.scss";

const Home = () => {
  const [pokemon, setPokemon] = useState();
  const handlePokeDex = () => {
    console.log("clicked");
  };

  const handlePokemon = () => {
    console.log("clicked");
  };

  const handleItems = () => {
    console.log("clicked");
  };

  const handleBattle = () => {
    console.log("clicked");
  };

  const handleCatch = () => {
    const min = 1;
    const max = 905;
    const wildPokemon = Math.floor(Math.random() * (max - min + 1) + min);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${wildPokemon}/`)
      .then((res) => setPokemon(res.data));
  };

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.mainContainer}>
          <div className={style.selectionsContainer}>
            <div className={style.selections} onClick={handlePokeDex}>
              PokeDex
            </div>
            <div className={style.selections} onClick={handlePokemon}>
              Pokemon
            </div>
            <div className={style.selections} onClick={handleBattle}>
              Battle
            </div>
            <div className={style.selections} onClick={handleItems}>
              Items
            </div>
          </div>
          <div className={style.selectionsContainer}>
            <div className={style.selections} onClick={handleCatch}>
              Catch
            </div>
            <div className={style.selections}></div>
            <div className={style.selections}></div>
            <div className={style.selections}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
