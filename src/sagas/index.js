import { fork, take, call, put, takeEvery } from "redux-saga/effects";
import * as Types from "./../constants/ActionTypes";
import { actTakeInterns } from "./../actions/index";
import axios from "axios";

//fork: re nhanh, phan chia process: non-blocking 
//take: phan hoi cac action khi dc dispatch: blocking
//call: goi api: blocking
//put: dispatch cac action: non-blocking 

function* takeListInterns() {
    yield take(Types.TAKE_INTERNS);
    const uri = "http://localhost:3001/api/v1/interns";
    const res = yield call(axios.get, uri);
    yield put(actTakeInterns(res.data));
}

function* addIntern(action) {
    const uri = "http://localhost:3001/api/v1/interns";
    const res = yield call(axios.post, uri, action.intern);
    console.log(res.data.data);
}

function* updateIntern(action) {
    const uri = `http://localhost:3001/api/v1/interns/${action.intern.id}`;
    console.log(uri);
    const res = yield call(axios.put, uri, action.intern);
    console.log(res.data.data);
    // yield put(actUpdateIntern(res.data.data));
}

function* deleteIntern(action) {
    console.log(action.id);
    const uri = `http://localhost:3001/api/v1/interns/${action.id}`;
    yield call(axios.delete, uri);
    // yield put(actDeleteIntern())
}

function* rootSaga() {
    yield fork(takeListInterns);
    yield takeEvery(Types.ADD_INTERN, addIntern);
    yield takeEvery(Types.UPDATE_INTERN, updateIntern);
    yield takeEvery(Types.DELETE_INTERN, deleteIntern);
}

export default rootSaga;
