import {BHL} from '../../constants/fab/BHLConstants'

const initialState = {
    frame_fit_up:'',
    lift_arm_welding:'',
    frame_robot:'',
    frame:'',
    boom:'',
    liftarm:'',
    fplan:'',
    factual:'',
    fbacklog:'',
    lplan:'',
    lactual:'',
    lbacklog:'',
    bplan:'',
    bactual:'',
    bbacklog:'',
    fremark:'',
    lremark:'',
    weldremark:''
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case BHL:
    {   console.log(action);
      return {...state,frame_fit_up:action.frame_fit_up,lift_arm_welding:action.lift_arm_welding,
    frame_robot:action.frame_robot, frame:action.frame,boom:action.boom,liftarm:action.liftarm,
fplan:action.fplan, factual:action.factual,fbacklog:action.fbacklog,
lplan:action.lplan, lactual:action.lactual,lbacklog:action.lbacklog,
bplan:action.bplan, bactual:action.bactual,bbacklog:action.bbacklog,
fremark:action.frame, lremark:action.lremark, weldremark:action.weldremark    
};
    }
		// return { ...state, isValidUser : action.userName === "admin" ? true : false};;}
	default:
      return state
   }
}
