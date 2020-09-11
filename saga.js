import {takeLatest, put} from 'redux-saga/effects';
// import {takeLatest} from 'redux-saga/effects';
import delay from 'redux-saga';

// "function*"  is the generator function of saga
function* ageUpAsync(){

    yield delay(1000);
    console.log('AgeUpAsync');
    yield put({
        type: 'AgeUpAsync',
        value: 1
    });
}

export function* watchAgeUp(){

    // if i click 5 times then it delay 5000 and value is increse 5 times
    // yield takeEvery('AgeUpAsync', ageUpAsync);

// but, it gives the latest value after multiple clicks and delay time
    yield takeLatest('Age', ageUpAsync);
}