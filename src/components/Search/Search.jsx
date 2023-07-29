import React, { useEffect, useState } from "react";
import { useDispatch} from 'react-redux';
import { setQuery } from '../../redux/slice/datasSlise';

import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

import style from "./Search.module.css";

import searchIcon from "../../icons/search.svg";


const Search = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  function changeSearch (value) {
    dispatch(setQuery({query: value })) 
  }
  useEffect(() => {
    if(search === ''){
      changeSearch (search)
    }
  },[search])
  return (
    <div>
      <div className={style.search}>
        <MyInput
          className={style.search__input}
          value={search}
          onChange={(e) => setSearch( e.target.value )}
          placeholder="Поиск...."
        />
        <MyButton className={style.search__btn}
        onClick={() => changeSearch(search)}
        >
          <img src={searchIcon} width="21" height="21" alt="" />
        </MyButton>
      </div>
    </div>
    
  ); 
  
};

export default Search;
