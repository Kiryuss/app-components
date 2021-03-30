import { useState } from 'react';


import { SideBar } from './components/SideBar';
import  Content  from './components/Content';


import './styles/global.scss';

import './styles/content.scss';




export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleGenreID (e: number) {
    setSelectedGenreId(e);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar childData={handleGenreID}/>

     <Content genreId={selectedGenreId}/>
    </div>
  )
}