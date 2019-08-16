import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) =>   {
   
        return (
            <div className='bg-light-yellow dib br3 pa3 ma4 fl w-20' style={{ minHeight: '16rem'}}>
                 
                <h2>{props.name}</h2>
                <hr></hr>
                <h3>{props.region}</h3>
                {(props.words.length > 0) ? <p>"{props.words}"</p> : <p></p>}
                <Link to={`/house/${props.name}`} className='b'>More</Link>
            </div>
        )
    
}

export default Card;
