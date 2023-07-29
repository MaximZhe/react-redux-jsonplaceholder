import React, {useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setCountPage,getPosts } from "../../redux/slice/datasSlise";
import { pagesArray } from "../../utils/pageCount";

import MyButton from "../UI/button/MyButton";
import style from "./Pagination.module.css";



const Pagination = () => {
  const dispatch = useDispatch();
  const dataTotalPages = useSelector((state) => state.datas.pages);
  const countPage = useSelector((state) => state.datas.page);
  let countPagesArray = pagesArray(dataTotalPages);
  const [limitPage, setLimitPage] = useState(10);

  function changePages(page) {
    dispatch(setCountPage(page));
  }
  function nextPage() {
    if (countPage > 0 && countPage < 10) {
      dispatch(setCountPage(countPage + 1));
    } else if (countPage > 10) {
      dispatch(setCountPage(countPage - 1));
    }
  }
  function prevPage() {
    if (countPage > 1 && countPage <= 10) {
      dispatch(setCountPage(countPage - 1));
    } else if (countPage < 1) {
      dispatch(setCountPage(1));
    }
  }
  useEffect(() => {
    dispatch(getPosts({ limit: limitPage, page: countPage }));
  }, [countPage]);

  return (
    <div className={style.pagination}>
      <Link  to={`/react-redux-jsonplaceholder/page/${countPage - 1}`}>
      <MyButton onClick={prevPage} className={style.pagination__prev} 
      disabled={countPage === 1 ? true : false}>
        Назад
      </MyButton>
      </Link>
      <div>
      {countPagesArray.map((p) => (
        <Link key={p} to={`/react-redux-jsonplaceholder/page/${p}`}>
          <MyButton
            key={p}
            className={
              countPage === p
                ? `${style.pagination__button} ${style.active}`
                : `${style.pagination__button}`
            }
            onClick={() => changePages(p)}
          >
            {p}
          </MyButton>
        </Link>
      ))}
      </div>
      
      <Link to={`/react-redux-jsonplaceholder/page/${countPage + 1}`}>
      <MyButton onClick={nextPage} className={style.pagination__next} 
      disabled={countPage === 10 ? true : false}>
        Далее
      </MyButton>
      </Link>
    </div>
  );
};

export default Pagination;
