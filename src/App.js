import ListNews from './components/ListNews';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGetRequest } from './store/slicesList';


function App() {
  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetRequest());
  }, [dispatch])

  return (
    <ListNews news={state.news} newsGet={state.newsGet} loading={state.loading}/>
  );
}

export default App;
