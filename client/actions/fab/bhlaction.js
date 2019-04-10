import {BHL} from '../../constants/fab/BHLConstants'


 export function saveBHLValues(
    frame_fit_up,
    lift_arm_welding,
    frame_robot,
    frame,
    boom,
    liftarm,
    fplan,
    factual,
    fbacklog,
    lplan,
    lactual,
    lbacklog,
    bplan,
    bactual,
    bbacklog,
    fremark,
    lremark,
    weldremark
 ) {
  //console.log() 
  return {
     
     type: BHL,
     frame_fit_up:frame_fit_up,
     lift_arm_welding:lift_arm_welding,
     frame_robot:frame_robot,
     frame:frame,
     boom:boom,
     liftarm:liftarm,
     fplan:fplan,
     factual:factual,
     fbacklog:fbacklog,
     lplan:lplan,
     lactual:lactual,
     lbacklog:lbacklog,
     bplan:bplan,
     bactual:bactual,
     bbacklog:bbacklog,
     fremark:fremark,
     lremark:lremark,
     weldremark:weldremark
   }
 }