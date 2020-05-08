import { createReducer, ActionType } from 'typesafe-actions'
import { Article } from './types'
import * as actions from './actions'

export interface ArticleState {
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

export type Actions = ActionType<typeof actions>

export default createReducer<ArticleState, Actions>(initialState)
  .handleAction(actions.fetchArticleListAsync.request, (state) => ({ ...state,  articles: { ...state.articles, loading: true } }))
  .handleAction(actions.fetchArticleListAsync.success, (state, action) => ({ ...state,  articles: { data: action.payload, loading: false } }))
  .handleAction(actions.fetchArticleListAsync.failure, (state) => ({ ...state,  articles: { ...state.articles, loading: false } }))
