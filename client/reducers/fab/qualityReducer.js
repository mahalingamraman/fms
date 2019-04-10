import {ADD,REMOVE,EDIT,TOGGLE_ADD_MODAL } from '../../constants/Fab/QualityConstants'

const initialState = {
    data: [
        // {
        //   defect_type:'New',
        //   defect_note: 'man1',
        // },
        // {
        //   defect_type:'New', 
        //   defect_note: 'man1',
        // }
         
        
        
      ],
      addModal:false
}

export default function update(state = initialState, action) {
   switch (action.type) {
    case ADD:
    {   console.log(action);
        // this.setState(prevState => {
        var temp={};
        temp['defect_type']=action.defect_type;
        temp['defect_note']=action.defect_note;
        state.data.push(temp);
        return {...state, addModal: false};
        // });
    }

    case REMOVE:
    {
        // this.setState(prevState => {
            // you shouldn't mutate, this is just an example.
            delete state.data[action.id];
            return {...state};
        //   })
    }

    case EDIT:
    {
        // this.setState(prevState => {
            // you shouldn't mutate, this is just an example.
            // console.log(defect_note)
            
            state.data[action.id]={}
            state.data[action.id]['defect_type']=action.defect_type;
            state.data[action.id]['defect_note']=action.defect_note;
      
            return {...state};
        //   });
    }
    case TOGGLE_ADD_MODAL:
    {
        // this.setState(prevState => ({
            state.addModal = !state.addModal
            return {...state};
        //   }));
    }

		
	default:
      return state
   }
}
