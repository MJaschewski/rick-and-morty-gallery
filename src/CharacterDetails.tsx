import React from 'react';
import {Character} from "./Character";
import {useParams} from "react-router-dom";
import CharacterCard from "./CharacterCard";
type Props = {
    characters:Character[]
}

function CharacterDetails(props:Props) {

    const params = useParams();
    const name:string | undefined = params.name;

    const foundCharacter: Character | undefined =props.characters.find(currentChar => currentChar.name === name);

    return (
        <div>
            <CharacterCard character={foundCharacter !== undefined ? foundCharacter : props.characters[0]}/>
        </div>
    );
}

export default CharacterDetails;