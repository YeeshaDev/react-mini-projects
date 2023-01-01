import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo from './Photo';
import './App.css'

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;


function App() {
  //To set loading icon once the app is refreshed or loaded.
  const [loading,setLoading] = useState(false);
  //This is the main photos which will be gotten from the unsplash api
  const [photos,setPhotos] = useState([]);
  //This is to set the default page to one once the app is loaded
  const [page, setPage] = useState (1);
  //This is for the search query to search the term of any picture you would like to see.
 const [query,setQuery] = useState('');
  const mounted = useRef(false);
  //This is for the new set of pictures that was searched in the query input.
  const [newImages, setNewImages] = useState (false);

  //Fecthing the images from the api using the async/await method.

  const fetchImages = async () => {
    setLoading(true);
    let url;
    //This sets the url for how many pages 1.e 1 and the query searched in the input box

    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;

    /*This condition states that if a term is searched 
then the url should be the combination all the urls stated above which is 
going to be fetched friom the api else should be
 just be the baseurl,clientid and the url page */

    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      const result = data.results;
  
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return result;

        } else if (query) {
          return [...oldPhotos, ...result];

        } else {
          return [...oldPhotos, ...data];
        }
      });
      setNewImages(false);
      setLoading(false);
      console.log(data)
    } catch (error) {
      setNewImages(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  
  }, [page]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!newImages) return;
    if (loading) return;
    setPage((oldPage) => oldPage + 1);
  }, [newImages]);

  /* This event sets the height of the page to automatically load more
  pictures when the user scrolls to the bottom */
  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      setNewImages(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', event);
    return () => window.removeEventListener('scroll', event);
  }, []);

  /*To prevent the page from refreshing itself
  and set the default page to show the images without
  searching first */

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    if (page === 1) {
      fetchImages();
    }
    setPage(1);
  };
  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input
            type='text'
            placeholder='Search (e.g Beach)'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='form-input'
          />
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'>
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />;
          })}
        </div>
        {loading && <h2 className='loading'>Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
