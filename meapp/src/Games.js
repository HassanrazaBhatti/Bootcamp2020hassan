import React from 'react';

function Games (props) {
    return(
        <div>
        <h1>My favourite game is {props.Gamesname}</h1>
    <h1>I also like {props.khailname}</h1>
    <hr/>

        </div>  
    )
}

export default Games;