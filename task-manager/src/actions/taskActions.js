export const FETCH_TASKS_REQUEST="tasks/FETCH_TASKS_REQUEST";
export const FETCH_TASKS_REQUEST_SUCCESS="tasks/FETCH_TASKS_REQUEST_SUCCESS";
export const FETCH_TASKS_REQUEST_FAILURE="tasks/FETCH_TASKS_REQUEST_FAILURE";
export const ADD_TASK_REQUEST="tasks/ADD_TASK_REQUEST";
export const ADD_TASK_REQUEST_SUCCESS="tasks/ADD_TASK_REQUEST_SUCCESS";
export const ADD_TASK_REQUEST_FAILURE="tasks/ADD_TASK_REQUEST_FAILURE";
export const DELETE_TASK_REQUEST="tasks/DELETE_TASK_REQUEST";
export const DELETE_TASK_REQUEST_SUCCESS="tasks/DELETE_TASK_REQUEST_SUCCESS";
export const DELETE_TASK_REQUEST_FAILURE="tasks/DELETE_TASK_REQUEST_FAILURE";
export const SET_SEARCH_TERM= "tasks/SET_SEARCH_TERM";
export const SET_SEARCH_TERM_SUCCESS="tasks/SET_SEARCH_TERM_SUCCESS";
export const SET_SEARCH_TERM_FAILURE="tasks/SET_SEARCH_TERM_FAILURE";

//action creators

export const fetchTasksRequest=()=>({
    type: FETCH_TASKS_REQUEST
})

export const fetchtasksRequestSuccess=(tasks)=>({
    type: FETCH_TASKS_REQUEST_SUCCESS,
    payload: tasks
})

export const fetchtasksRequestFailure=(error)=>({
    type: FETCH_TASKS_REQUEST_FAILURE,
    payload: error
})

export const addTaskRequest=(title)=>({
    type: ADD_TASK_REQUEST,
    payload: {tempId: `temp-${Date.now()}`,title}
})

export const addTaskRequestSuccess=(tempId)=>({
    type:ADD_TASK_REQUEST_SUCCESS,
    payload: {tempId}
})

export const addTaskRequestFailure=(tempId,error)=>({
    type:ADD_TASK_REQUEST_FAILURE,
    payload: {tempId,error}
})

export const deleteTaskRequest=(id)=>({
    type: DELETE_TASK_REQUEST,
    payload: {id}
})

export const deleteTaskRequestSuccess=(id)=>({
    type: DELETE_TASK_REQUEST_SUCCESS,
    payload: {id}
})

export const deleteTaskRequestFailure=(id,error)=>({
    type: DELETE_TASK_REQUEST_FAILURE,
    payload: {id,error}
})

export const setSearchTerm=(term)=>({
    type: SET_SEARCH_TERM,
    payload: {term}
})

export const setSearchTermSuccess=(tasks)=>({
    type: SET_SEARCH_TERM_SUCCESS,
    payload:{tasks}
})

export const setSearchTermFailure=(error)=>({
    type: SET_SEARCH_TERM_FAILURE,
    payload: {error}
})