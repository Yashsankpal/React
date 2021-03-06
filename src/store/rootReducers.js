import { combineReducers } from "redux";
import {reducer as toastreducer} from "react-redux-toastr"
import { reducer } from "./reducer";
import { reducer as modalReducers } from "../modals/modalReducers"
import {reducer as asyncReducer} from "../async/asynReducer"
import {reducer as testReducer} from "../test/testReducer"
import {reducer as authReducer} from "../auth/authReducers"
import { reducer as Formreducer} from 'redux-form'
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase"
 

const rootReducers = combineReducers({
    form : Formreducer,
    event : reducer,
    modals : modalReducers,
    async: asyncReducer,
    test : testReducer,
    toastr: toastreducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth:authReducer,
})

export default rootReducers