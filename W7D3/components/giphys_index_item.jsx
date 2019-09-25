import React from 'react'; 

const GiphysIndexItem = function({giphy}) {
    return (
    <li>
        <h1>Hi</h1>
        <img src={giphy.images.fixed_heigh.url}/>
    </li>
    )
}

export default GiphysIndexItem;