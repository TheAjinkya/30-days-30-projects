import { act } from 'react-dom/test-utils'
import { legacy_createStore } from 'redux'

const initialState = {
    value: 10
}

const counterReducer = (state = initialState, action) => {
    if (action.type = "increment") {
        return { value: state.value + 1 }
    }
    if (action.type = "decrement") {
        return { value: state.value - 1 }
    }
    return state;
}

const mainStore = legacy_createStore(counterReducer);

export default mainStore