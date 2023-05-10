import React from 'react';
type Props = {
    character:character
}
type character = {
    id:number
    name:string
    status:string
    species:string
    gender:string
    image:string
}
function CharacterCard(props:Props) {
    return (
        <div className="characterCardWrapper">
            <header className="tilteWrapper"> <h1>{props.character.name}</h1> </header>

            <div className="CharacterCardBodyWrapper">

                <div className="characterInfoWrapper">
                    <ul className="characterInfoListWrapper">
                        <li> {"Id: " + props.character.id } </li>
                        <li> {"Name: " + props.character.name } </li>
                        <li> {"Status: " + props.character.status } </li>
                        <li> {"Species: " + props.character.species } </li>
                        <li> {"Gender: " + props.character.gender } </li>
                    </ul>
                </div>

                <div>
                    <img className="characterImageWrapper" src={props.character.image} alt={"Character Image" + props.character.name} />
                </div>

            </div>

        </div>
    );
}

export default CharacterCard;