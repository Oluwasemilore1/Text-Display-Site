import React from "react";

const Char =(props) =>{

  const style ={
        display: 'inline-block',
        margin: '16px',
        padding: '16px',
        textAlign: 'center',
        border: '1px solid black',
        backgroundColor: 'Lightblue',
        borderRadius: '6px'
    }

    return(
        <div style={style}>
            {props.character}
        </div>
    )
}

export default Char;