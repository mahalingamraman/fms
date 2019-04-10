
import {TOGGLE_1,TOGGLE_2,TOGGLE_3,TOGGLE_4,TOGGLE_5,TOGGLE_6,TOGGLE_7,TOGGLE_8,TOGGLE_9 ,COLLAPSE_ALL,EXPAND_ALL,PREV,NEXT} from '../../constants/Fab/VelocityConstants'

const initialState = {
    collapse:[false,false,false,false,false,false,false,false,false]
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case TOGGLE_1:
    {   

        state.collapse[0]=!state.collapse[0];
        return {...state};
    }
    case TOGGLE_2:
    {   
 
        state.collapse[1]=!state.collapse[1];
        return {...state};
    }
    case TOGGLE_3:
    {   

        state.collapse[2]=!state.collapse[2];
        return {...state};
    }
    case TOGGLE_4:
    {   
 
        state.collapse[3]=!state.collapse[3];
        return {...state};
    }
    case TOGGLE_5:
    {   
 
        state.collapse[4]=!state.collapse[4];
        return {...state};
    }
    case TOGGLE_6:
    {   
   
        state.collapse[5]=!state.collapse[5];
        return {...state};
    }
    case TOGGLE_7:
    {   
    
        state.collapse[6]=!state.collapse[6];
        return {...state};
    }
    case TOGGLE_8:
    {   
    
        state.collapse[7]=!state.collapse[7];
        return {...state};
    }
    case TOGGLE_9:
    {   
    
        state.collapse[8]=!state.collapse[8];
        return {...state};
    }
    case EXPAND_ALL:
    {
        var temp=[true,true,true,true,true,true,true,true,true];
        state.collapse=temp
        return {...state};

    }
    case COLLAPSE_ALL:
    {
        var temp=[false,false,false,false,false,false,false,false,false];
        state.collapse=temp
        return {...state};
    }
    case NEXT:
    {
        state.collapse[action.i]=false;
         state.collapse[action.i+1]=true;
          return {...state};
      
    }

    case PREV:
    {
        
          
            state.collapse[action.i]=false;
            state.collapse[action.i-1]=true;
            return {...state};
          
    }
		
	default:
      return state
   }
}