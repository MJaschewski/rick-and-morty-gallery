import React from 'react';
import './style.css';
import {Link, useLocation, useNavigate} from "react-router-dom";
type Props = {
    character:Character
}
type Character = {
    id:number
    name:string
    status:string
    species:string
    gender:string
    image:string
    origin:Origin
}
type Origin = {
    name:string

}
function CharacterCard(props:Props) {

    const navigate = useNavigate();
    function onClickHandlerForDetails(){
        navigate("/"+ props.character.id.toString())
    }

    return (
        <div className="characterCardWrapper">
            <header > <h1 className={props.character.status === "Alive" ? "alive" : "dead"}>{props.character.name}</h1> </header>

            <div className="CharacterCardBodyWrapper">

                <div className="characterInfoWrapper">
                    <ul className="characterInfoListWrapper">
                        <li> {"Id: " + props.character.id } </li>
                        <li> {"Name: " + props.character.name } </li>
                        <li> {"Status: " + props.character.status } </li>
                        <li> {"Species: " + props.character.species } </li>
                        <li> {"Gender: " + props.character.gender } </li>
                        <li> {"Origin: " + props.character.origin.name } </li>
                    </ul>
                </div>

                <div>
                    <img className="characterImageWrapper" src={props.character.image} alt={"Character Image" + props.character.name} />
                </div>

            </div>
            <div>
                <Link to={"/"}> Back </Link>
                <button onClick={onClickHandlerForDetails}> Details </button>


            </div>

        </div>
    );
}

export default CharacterCard;