import {BUILD } from '../../constants/fab/BuildConstants'

const initialState = {
            feeder:'',
            main:'',
            total:'',
            volume:''
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case BUILD:
    {   console.log(action);
      return {...state,feeder:action.feeder,main:action.main, total:action.total, volume:action.volume};
    }
	default:
      return state
   }
}
