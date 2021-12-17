import react, {useState} from 'react'
import './Display.css';


const Display = (props) => {
    

   
    

    return (
        <div className="display">
         {props.displayMessage}
         <br/>
         SCORE
         <br/>
         {props.wins}-{props.losses}-{props.ties}

        </div>
      );
    }




export default Display