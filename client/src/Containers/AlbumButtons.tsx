import React from 'react';
import AppContext from "../Context/AppContext";

export const SwitchButtons = () => {
    const buttons = React.useContext(AppContext);
    return (
      <div className="buttons">
          
        <button onClick={() => {
              buttons?.prevPage()
            }}>Prev Page</button>
            <button onClick={() => {
              buttons?.reorderAlbum() // Requirement #4. Button that reorders list on click
            }}>Shuffle Playlist</button>
            <button onClick={() => {
              buttons?.nextPage() 
            }}>Next Page</button>
      </div>
    );
    
}