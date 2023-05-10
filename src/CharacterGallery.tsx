import React from 'react';
import CharacterCard from "./CharacterCard";
import './style.css';



type Props = {
    characters:Character[]
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

function CharacterGallery(props:Props) {
    return <div className="CharacterGalleryWrapper">
        {(
            props.characters.map( (chars) => {
                return <CharacterCard character = {chars} />})
        )}
    </div>
}

export default CharacterGallery;