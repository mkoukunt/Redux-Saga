import {takeEvery,put} from 'redux-saga/effects';
import { delay } from 'redux-saga/effects';
function* ageUpAsync(){
    console.log('ageUpAsync');
    yield delay(4000);
    console.log('ageUpAsync111111');
    yield put({type:'AGE_UP_ASYNC',vale:1});

}
export function* watchAgeUp(){
    console.log('watchAgeUp1111');
    yield takeEvery('AGE_UP',ageUpAsync);
}