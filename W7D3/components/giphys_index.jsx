import React from 'react';

import GiphysIndexItem from './giphys_index_item';


const GiphysIndex = ( { giphys } ) => {
    debugger
    // debugger; 
    // let gyph = giphys.giphys.map(giphy => < GiphysIndexItem key={giphy.id} giphy={giphy} />)
    return (
        <ul> 
            { giphys.map(giphy => < GiphysIndexItem giphy={giphy} />) }
        </ul>
    );
}

export default GiphysIndex; 