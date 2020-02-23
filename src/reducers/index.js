import { combineReducers } from 'redux';
import interns from "./interns";
import internEditing from "./internEditing";

const appReducers = combineReducers({
    interns: interns,
    internEditing: internEditing
});

export default appReducers;
