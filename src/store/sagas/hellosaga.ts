import { put, takeLatest } from "redux-saga/effects";

export function* workerHello() {
   yield put({type: 'INCREMENT'})
   
  }

  export function* watchHello() {
    yield takeLatest("HELLO", workerHello);
}