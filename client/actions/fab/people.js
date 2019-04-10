import {FABPEOPLE } from '../../constants/fab/PeopleConstants'

 export function savePeopleValues(no_of_operators,no_of_apprentice,no_of_agency,injury_free,reason_injury,
  no_of_operators1,no_of_apprentice1,no_of_agency1,injury_free1,reason_injury1,
  no_of_operators2,no_of_apprentice2,no_of_agency2,injury_free2,reason_injury2) {
  console.log(reason_injury) 
  return {
     
     type: FABPEOPLE,
     no_of_operators:no_of_operators,
     no_of_apprentice:no_of_apprentice,
     no_of_agency:no_of_agency,
     injury_free:injury_free,
     reason_injury:reason_injury,


     no_of_operators1:no_of_operators1,
     no_of_apprentice1:no_of_apprentice1,
     no_of_agency1:no_of_agency1,
     injury_free1:injury_free1,
     reason_injury1:reason_injury1,


     no_of_operators2:no_of_operators2,
     no_of_apprentice2:no_of_apprentice2,
     no_of_agency2:no_of_agency2,
     injury_free2:injury_free2,
     reason_injury2:reason_injury2
   }
 }