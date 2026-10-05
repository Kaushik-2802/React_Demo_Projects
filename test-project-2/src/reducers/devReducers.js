import {handleActions} from 'redux-actions'

export const Types={
    GET_ALL_BIOS:"GET_ALL_BIOS",
    ADD_DEVELOPER:"ADD_DEVELOPER"
}

const devActions={
    getAllBiosActionCreator: (developers)=>({
        type: Types.GET_ALL_BIOS,
        developers
    }),
    addDeveloperActionCreator: (developer)=>({
        type: Types.ADD_DEVELOPER,
        developer
    }),
    reducer:handleActions({
        [Types.GET_ALL_BIOS]:(state,action)=>({
            ...state,
            developers:action.developers
        }),
        [Types.ADD_DEVELOPER]:(state,action)=>({
            ...state,
            developers:[...state.developers,action.developer]
        })
    },{
        developers:[]
    })
}

export default devActions;