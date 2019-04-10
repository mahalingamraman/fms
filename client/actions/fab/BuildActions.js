import {BUILD} from '../../constants/fab/BuildConstants'

 export function saveBuildValues(feeder,main,total,volume) {
  console.log(feeder) 
  console.log(main) 
  console.log(total)
  console.log(volume)  
  return {
     
     type: BUILD,
     feeder:feeder,
     main:main,
     total:total,
     volume:volume
   }
 }