import { ADD_ROW, DELETE_ROW } from '../constants/qualityConstants'

const initialState = {
  
    product :[]
    
}



export default function update(state = initialState, action) {
    switch (action.type) {
        case ADD_ROW:
            {
                var quality = {}
                for (const prop in action.row) {
                  quality[prop] = action.row[prop]
                }
                state.product.push(quality);
                return {...state};
              
            }

        case DELETE_ROW:
            {
                for (var i in action.rowKeys)
                    delete state.product[i];
                return { ...state };
            }

        
        default:
            return state
    }
}