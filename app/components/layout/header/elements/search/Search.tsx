import styled from "@/layout/header/header.module.scss"
import {AiOutlineSearch} from "react-icons/ai";
const Search = () => {
    return (
        <div className={styled.search}>
                <div className={styled.searchField}>
                    <AiOutlineSearch className={styled.searchIcon}/>
                    <input type={"text"} className={styled.searchInput} placeholder={"Search 3aqaryan"}/>
                </div>
        </div>
    );
};

export default Search;