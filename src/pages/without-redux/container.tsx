import * as React from 'react'
import { createReducer, ActionType, createAsyncAction } from 'typesafe-actions'

interface Article {
  slug: string;
  title: string;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
}

interface ArticleState {
  articles: {
    data: Article[];
    loading: boolean;
  };
}

const initialState: ArticleState = {
  articles: {
    data: [],
    loading: false
  }
}

const actions = {
  fetchArticleListAsync: createAsyncAction(
    'FETCH_ARTICLE_LIST_REQUEST',
    'FETCH_ARTICLE_LIST_SUCCESS',
    'FETCH_ARTICLE_LIST_FAILURE',
  )<{offset: number; limit?: number}, Article[], undefined>()
}

export type Actions = ActionType<typeof actions>

const reducer = createReducer<ArticleState, Actions>(initialState)
  .handleAction(actions.fetchArticleListAsync.request, (state) => ({ ...state,  articles: { ...state.articles, loading: true } }))
  .handleAction(actions.fetchArticleListAsync.success, (state, action) => ({ ...state,  articles: { data: action.payload, loading: false } }))
  .handleAction(actions.fetchArticleListAsync.failure, (state) => ({ ...state,  articles: { ...state.articles, loading: false } }))

export default function Container() {
  const [state, dispatch] = React.useReducer(reducer, initialState)


  console.log(state)
  return (
    <>
      <button onClick={() => dispatch(actions.fetchArticleListAsync.request({ offset: 1 }))}>Fetch articles</button>
    </>
  )
}
