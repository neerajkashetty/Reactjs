import React from "react";
import './Expenses.css';


export const CardList = (props) => {


    return(
        <div className="Body">
            {    
               props.monsters.map(monsters => (
                    <>
                    <h1 className="card-container" key={monsters.id}> {monsters.name}
                    <img alt="monsters" src={`https://robohash.org/${props.monsters.id}?set=set2&size=90x90`}></img> 
                    </h1>
                    </>
                )
                )

            }
        </div>
    )

    

}

