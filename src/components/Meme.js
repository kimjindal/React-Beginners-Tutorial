import React from 'react';
// import memesData from '../data/memesData';

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/5bgun8.jpg',
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  /*
  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);
*/

  React.useEffect(() => {
    async function getMeme() {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setAllMemeImages(data.data.memes);
    }
    getMeme();
  }, []);

  function getMemeImage() {
    // const memesArray = allMemeImages.data.memes;
    const memesArray = allMemeImages;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          placeholder="Top text"
          type="text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="form--input"
          placeholder="Bottom text"
          type="text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
