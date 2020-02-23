import * as Types from "./../constants/ActionTypes";

export const actTakeInterns = (interns) => {
    return {
        type: Types.TAKE_INTERNS,
        interns: interns
    }
}

export const actAddIntern = (intern) => {
    return {
        type: Types.ADD_INTERN,
        intern: intern
    }
}

export const actGetIntern = (intern) => {
    return {
        type: Types.EDIT_INTERN,
        intern: intern
    }
}

export const actUpdateIntern = (intern) => {
    return {
        type: Types.UPDATE_INTERN,
        intern: intern
    }
}

export const actDeleteIntern = (id) => {
    return {
        type: Types.DELETE_INTERN,
        id
    }
}
