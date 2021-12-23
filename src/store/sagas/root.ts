import { all } from 'redux-saga/effects';
import { watchHello } from './hellosaga';


  export default function* rootSaga() {
    yield all([
        watchHello()
    ])
  }