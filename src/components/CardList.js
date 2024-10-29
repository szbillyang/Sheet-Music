import React from "react";
import Card from './Card';

const CardList = ({ sheets }) => {
    return(
        <div>
            {
                sheets.map((item, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={sheets[i].id} 
                            name={sheets[i].name} 
                            instrument={sheets[i].instrument}
                            link={sheets[i].link}
                            link2={sheets[i].link2}
                        />
                    );
                }) 
            }

        </div>
    );
}

export default CardList;