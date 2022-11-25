import * as React from 'react';
import axios from "axios"

import { LoadingPage } from './Pages/LoadingPage';

import { Scroll } from "./Containers/Scrollbar"; // Requirement #2. Scrollbar Container with photos list and scroller
import { SwitchButtons } from "./Containers/AlbumButtons";

import { loadImages } from "./Functions/Loader";
import { writeToCache, readFromCache } from "./Functions/Cacher"; // Requirement #3. Functions for writing and reading downloads using local storage as cache
import { shuffle } from "./Functions/Randomizer"; // Requirement #4. Function for randomizing list recursively

import AppContext from "./Context/AppContext";
import { AlbumInfo, AlbumContext } from "./AlbumInterface";

import './App.css';

const {useState, useEffect} = React;
const fetchAlbumData = (): Promise<any> => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos`) // Requirement #1. get JSON from http
    .then(({data}) =>  data)
    .catch(err => {
      // handle error
      console.log(err);
    });
}
function App() {
  const maxItems=50;
  // useStates
  const [albumInfos, setAlbumInfos] = useState<any>([]);
  const [albumPage, setAlbumPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  // Setters
  const reorderAlbum = () => {setAlbumInfos(shuffle(albumInfos))} // Requirement #4. Return reordered albumInfos into setState
  const prevPage = () => {(albumPage-1<1) ? setAlbumPage(albumInfos.length/maxItems) : setAlbumPage(page => page-1)}
  const nextPage = () => {(albumPage+1>albumInfos.length/maxItems) ? setAlbumPage(1) : setAlbumPage(page => page+1)}
  // Context
  const contextSettings: AlbumContext = {
    albumInfos,
    albumPage,
    isLoading,
    reorderAlbum,
    prevPage,
    nextPage
  };
  useEffect(() => {
    let localData = readFromCache("https://localhost:3000") // Requirement #3. Loaded previous downloads from local storage
    if(localData!==null){
      setAlbumInfos(localData)
      console.log("local storage loaded")
      setIsLoading(false)
    }
    else{
      fetchAlbumData().then((albumData) => { // Requirement #1. Fetch when App starts
        if (albumData === undefined) return;
        loadImages(albumData.map((item: AlbumInfo):string => (item.url)))
        writeToCache("https://localhost:3000", albumData) // Requirement #3. Cache saved downloads to local storage
        setAlbumInfos(albumData)
        console.log("new storage saved")
        setIsLoading(false);
      })
    }
  }, []);
  return (
    <AppContext.Provider value={contextSettings}>
      <div className="App">
      { isLoading ? 
        <LoadingPage/> :
        <React.Fragment>
          <h1>Front-End React App</h1>
          <h2>{"page number: " + albumPage}</h2>
          <Scroll
          albums={albumInfos}
          page={albumPage}
          max={maxItems}/>
          <SwitchButtons/>
        </React.Fragment>
      }
      </div>
    </AppContext.Provider>
  );
}
export default App;
