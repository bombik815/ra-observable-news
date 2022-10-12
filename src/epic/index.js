import { ofType } from "redux-observable";
import { map, mergeMap, retry } from "rxjs";
import { ajax } from "rxjs/ajax";
import { fetchGetMoreRequest, fetchGetMoreSuccess, fetchGetRequest, fetchGetSuccess } from "../store/slicesList";

export const getNewsEpic = (action$) => action$.pipe(
  ofType(fetchGetRequest),
  mergeMap(() => ajax.getJSON(process.env.REACT_APP_NEWS_URL).pipe(
    retry(5),
    map((o) => fetchGetSuccess(o))
  ))
)

export const getNewsMoreEpic = (action$) => action$.pipe(
  ofType(fetchGetMoreRequest),
  map((o) => o.payload),
  mergeMap((id) => ajax.getJSON(`${process.env.REACT_APP_NEWS_URL}?lastSeenId=${id}`).pipe(
    retry(5),
    map((o) => fetchGetMoreSuccess(o))
  ))
)