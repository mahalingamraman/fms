import { COST } from '../constants/costConstants_lptm'

const initialState = {
    reworkTime:0 ,
    rejectionScrapCost:0
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case COST:
		return { ...state, reworkTime:action.reworkTime,rejectionScrapCost:action.rejectionScrapCost};
	default:
      return state
   }
}
