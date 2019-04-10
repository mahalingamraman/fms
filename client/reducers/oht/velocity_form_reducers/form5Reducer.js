import { ADD_ROW, DELETE_ROW, EDIT } from '../../../constants/oht/QualityConstants'

const initialState = {
    tableData: [],
}

export default function update(state = initialState, action) {
    switch (action.type) {
        case ADD_ROW:
            {
                var temp = {}
                for (const prop in action.row) {
                  temp[prop] = action.row[prop]
                }
                state.tableData.push(temp);
                return {...state};
              
            }

        case DELETE_ROW:
            {
                alert('The rowkey you drop: ' + action.rowKeys);
                for (var i in action.rowKeys)
                    delete state.tableData[i];
                return { ...state };
            }

        case EDIT:
            {
                var index;
                for (var i = 0; i < state.tableData.length; i++) {
                    if (state.tableData[i].id == action.row.id) {
                        index = i;
                        
                    }
                }
                for (const prop in action.row) {
               
                    state.tableData[index][prop] = action.row[prop];
                  
                  }
                return{...state};
            }

        default:
            return state
    }
}