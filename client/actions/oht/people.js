import {PEOPLE } from '../../constants/oht/PeopleConstants'

 export function savePeopleValues(no_of_operators,no_of_apprentice,no_of_agency,injury_free,reason_injury) {
  console.log(reason_injury) 
  return {
     
     type: PEOPLE,
     no_of_operators:no_of_operators,
     no_of_apprentice:no_of_apprentice,
     no_of_agency:no_of_agency,
     injury_free:injury_free,
     reason_injury:reason_injury
   }
 }