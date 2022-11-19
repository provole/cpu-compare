import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import CompareTable from './CompareTable';

function SearchBar({placeholder, data}) {

    
    const [isvisible, setIsVisible] = useState(false);
    const [books, setBooks] = useState([]);

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    const handleData = (event, book) => {
        
        setIsVisible(true);

        setBooks([...books, book]);

        setFilteredData([]);

    }

    const removeData = (index) => {

        books.splice(index, 1)
        setBooks([...books]);
    }

    return (
        <div>
            <div className="search">
                <div className="searchInputs">
                    <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
                    <div className="searchIcon">
                        {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput} />}
                    </div>
                </div>
                {filteredData.length !== 0 && (
                    <div className="dataResult">
                        {filteredData.slice(0, 15).map((value, key) => {
                            return (
                                <a key={key} className="dataItem" href onClick={(event) => handleData(event, value)}> 
                                    <p>{value.title}</p>
                                </a>
                            )
                        })}
                    </div>
                )}

            </div>

            <CompareTable removeBook={removeData} books={books} isvisible={isvisible} />
        </div>
    )
}

export default SearchBar