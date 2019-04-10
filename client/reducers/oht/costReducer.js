import { SAVE } from '../../constants/oht/CostConstants'

const initialState = {
    rework_time: "",
    rs_cost: ""
}

export default function update(state = initialState, action) {
    switch (action.type) {
        case SAVE:
            {
                console.log(action);

                for (const prop in action.value) {

                    state[prop] = action.value[prop];

                }
                return { ...state };
            }

        default:
            return state
    }
}