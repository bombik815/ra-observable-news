import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchGetMoreRequest } from '../store/slicesList';
import News from './News';

export default function ListNews({news, newsGet, loading}) {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setList(news)
  }, [news])
  console.log(news);
  function getMore() {
    dispatch(fetchGetMoreRequest(news[news.length - 1].id));
  }

  if (loading && !newsGet) {
    return <div className="loader">Loading...</div>
  }

  return (
    <>
      <ul className='list-news'>
        {list.map((el) => (
          <li className='item-news' key={el.id}>{<News item={el}/>}</li>
        ))}
      </ul>
      {newsGet ? <div
        className={loading ? 'loader-btn' : 'btn'}
        type='button'
        onClick={getMore}>к предыдущим записям</div> : null}
    </>
  )
}
