import React, {ChangeEvent, useEffect, useState} from 'react';
import './style.css';
import './App.css';
import CharacterGallery from "./CharacterGallery";
import axios from "axios";
import {Character} from "./Character";
import {Route, Routes} from "react-router-dom";
import CharacterDetails from "./CharacterDetails";
// Careful: NOT axios/index

function App() {

    const [page,setPage]=useState(1)
    const [characters,setCharacters] = useState<Character[]>([]);

    function getCharacters(){
        console.log("Data requesting")
        axios.get("https://rickandmortyapi.com/api/character/?page="+page)
            .then( (response) => {
                setCharacters(response.data.results)
                console.log("Data obtained")
            })
    }


    useEffect(() => {
        //Asymmetric call. Order not save
        // only does then, when get is finished. Continues with the rest before
        getCharacters();
        //IMPORTANT: OTHERWISE ENDLESS LOPE
        }, [page])

    function turnPage(){
        setPage(page + 1);

    }

    function turnBack(){
        setPage(page - 1);
    }



    const [nameFilter,setNameFilter] = useState("")

    const [statusFilter,setStatusFilter] = useState("");

    function searchFilterInput(event:ChangeEvent<HTMLInputElement>){
        console.log(event)
        setNameFilter(event.target.value);
    }

    function filterStatus(chars:Character[]){

        if(statusFilter !== ""){
            return chars.filter(charsFiltered => {
                if(charsFiltered.status === statusFilter)
                    return charsFiltered;
            })
        } else {
            return chars;
        }
    }

    function filterName(){
        return characters.filter(charsFiltered => {
            if (charsFiltered.name.toLowerCase().includes(nameFilter.toLowerCase())) {
                return charsFiltered;
            }
        });
    }


  return (
    <div className="App">
        <header className="TitleWrapper"> <h1> Rick And Morty Character Gallery </h1> </header>



        <Routes>
            <Route path={"/"} element={
                <div className={"MainPageWrapper"}>
                    <div className="FilterWrapper">

                        <div>
                            <h3> Current Page: {page}</h3>
                            <div>
                                <button onClick={() => turnPage()} >Next Page</button>
                            </div>

                            <div>
                                {page !== 1
                                    ? <button onClick={() => turnBack()} >Last Page</button>
                                    : <p> First Page</p>
                                }
                            </div>
                        </div>


                        <div>
                            <h3>Search by Name:</h3>
                            <input type={"search"} value={nameFilter}
                                   onInput={searchFilterInput} />
                            {/*
                As one liner
                <input placeholder={"Search..."} onChange={event => setNameFilter(event.target.value)} />
                */}

                        </div>
                        <div>
                            <h3>Filter by Status:</h3>
                            <button onClick={()=> setStatusFilter("")}> All </button>
                            <button onClick={()=> setStatusFilter("Alive")}> ALive </button>
                            <button onClick={()=> setStatusFilter("Dead")}> Dead </button>
                            <button onClick={()=> setStatusFilter("unknown")}> Unknown </button>

                        </div>

                    </div>

                    <div>{
                        (nameFilter === "" && statusFilter === "")
                            ? <CharacterGallery characters={characters}/>
                            : <CharacterGallery characters={filterStatus(filterName())}/>
                    }
                    </div>

                </div>
            }/>
            <Route path={"/:id"} element={ <CharacterDetails characters={characters} /> } />
        </Routes>

    </div>

  );
}

export default App;
