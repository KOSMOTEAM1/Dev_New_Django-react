import React from 'react';
import { useEffect, useState } from "react";

function Otticons() {
    const ottlist = [
        {
         name : 'Netflix',
         image : 'https://www.justwatch.com/images/icon/207360008/s100'
        },
        {
          name : 'wavve',
          image : 'https://www.justwatch.com/images/icon/155655742/s100'
        },
        {
          name : 'Watcha',
          image : 'https://www.justwatch.com/images/icon/2538290/s100'
        },
        {
          name : 'Disney Plus',
          image : 'https://www.justwatch.com/images/icon/147638351/s100'
        },
        {
          name : 'Amazon Prime Video',
          image : 'https://www.justwatch.com/images/icon/52449861/s100'
        },
        {
          name : 'True Story',
          image : 'https://images.justwatch.com/icon/244289819/s100'
        },
        {
          name : 'Mubi',
          image : 'https://www.justwatch.com/images/icon/164970114/s100'
        },
        {
          name : 'GuideDoc',
          image : 'https://images.justwatch.com/icon/2625277/s100'
        },
        {
          name : 'DocAlliance Films',
          image : 'https://images.justwatch.com/icon/244290074/s100'
        },
        {
          name : 'Apple TV Plus',
          image : 'https://images.justwatch.com/icon/244290074/s100'
        },
      ];
    const [ottnames, setOttnames] = useState([]);
    const getOttname = async () => {
        const json = await (
          await fetch(`http://127.0.0.1:8000/apimovie/ott/${id}`)
        ).json();
        const jsonarray = [];
        for (let i = 0; i < json.length; i++) {
          jsonarray.push(json[i].ottname);
        }
        setOttnames(jsonarray);
        console.log(jsonarray);
      };
      useEffect(() => {
        getOttname();
      }, []);

  return <div class="secton-title">
      {ottnames.map({d} => {d===ottlist.name ? <img src={ottlist.image}/> : null})}
  </div>;
}

export default Otticons;
