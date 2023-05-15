import React, {useEffect} from 'react';
import {Character} from "./Character";
import {useParams} from "react-router-dom";
import CharacterCard from "./CharacterCard";
type Props = {
    characters:Character[],
}

function CharacterDetails(props:Props) {

    const params = useParams();
    const id:string | undefined = params.id;

    const foundCharacter = props.characters.find(currentChar => currentChar.id.toString() === id)

    return (
        <div>
            {foundCharacter !== undefined
                ? <CharacterCard character={foundCharacter} />
                : <></>}
        </div>
    );
}

export default CharacterDetails;