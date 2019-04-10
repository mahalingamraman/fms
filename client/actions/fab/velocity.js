import {TOGGLE_1,TOGGLE_2,TOGGLE_3,TOGGLE_4,TOGGLE_5,TOGGLE_6,TOGGLE_7,TOGGLE_8,TOGGLE_9 ,COLLAPSE_ALL,EXPAND_ALL,PREV,NEXT} from '../../constants/fab/VelocityConstants'
     export function toggle_1() {
         return {
             type:TOGGLE_1
         }
       
      }
      export function toggle_2() {
        return {
            type:TOGGLE_2
        }
        
      }
      export function toggle_3() {
        return {
            type:TOGGLE_3
        }
        
      }
      export function toggle_4() {
        return {
            type:TOGGLE_4
        }
        
      
    }
    export function toggle_5() {
        return {
            type:TOGGLE_5
        }
      
    }
    export function toggle_6() {
        return {
            type:TOGGLE_6
        }
      
    }
    export function toggle_7() {
        return {
            type:TOGGLE_7
        }
        
      
    }
    export function toggle_8() {
        return {
            type:TOGGLE_8
        }
  
    }
    export function toggle_9() {
        return {
            type:TOGGLE_9
        }
    
    }

    export function expandAll(){
        return{
            type:EXPAND_ALL
        }
    }

    export function collapseAll(){
        return{
            type:COLLAPSE_ALL
        }
    }

    export function Next(i){
        return{
            type:NEXT,
            i:i
        }
    }
    export function Prev(i){
        return{
            type:PREV,
            i:i
        }
    }