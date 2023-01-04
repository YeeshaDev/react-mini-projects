import React, { useState,useEffect } from "react";

export default function Main(){

  const[meme,setMeme]= useState({
    topText:"",
    bottomText:"",
    randomImage:"https://i.imgflip.com/30b1gx.jpg"
})
// This is to update the state to show random images when the button is clicked
const [allMeme, setAllMeme] = useState([])

//Using useEffect for side effects i.e thos elements react does not have contro of like api,local storage etc
useEffect(() => {
  fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMeme(data.data.memes))
}, [])
//const [memeImg,setMemeImg] = useState("https://i.imgflip.com/30b1gx.jpg")
    function memeImage(){
  const randomNumber = Math.floor(Math.random() * allMeme.length);
   const url = allMeme[randomNumber].url;
   setMeme(prevImg => ({
    ...prevImg, randomImage:url
   }))
    }

    function handleChange(ev){
      const {name,value}= ev.target
      setMeme(prevMeme => ({
        ...prevMeme,
        [name]:value
      }))

    }

    return (
         <main>
          <section className="form">
            <input type="text" 
            placeholder="Top text"
            className="Top-text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            />

            <input type="text" 
            placeholder="Bottom text"
            className="bottom-text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            />

            <button onClick={memeImage} className="meme-btn">Get a new meme image  🖼</button>
          </section>
          <div className="meme">
          <img src={meme.randomImage} className="memes-img"/>
          <h2 className="meme-text top">{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText}</h2>
          </div>
         </main>
    )
}