import { SAVE } from '../../../constants/oht/velocity_forms_constants/Form4Constants'

const initialState = {
    workstation1: "",
    workstation2: "",
    workstation3: "",
    workstation4: "",
    workstation5: "",
    workstation6: "",
    workstation7: "",
    workstation8: "",
    workstation9: "",
    workstation10: "",
    workstation11: "",
    quality_issues: "",
    sub_assembly: "",
    line_assembly: "",
    volume: "",
    rts_notes: "",
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