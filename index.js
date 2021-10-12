function wakeDog(dogName,dogBreed){
  let returnedString = `Wake ${dogName} the ${dogBreed}`
  console.log(returnedString)
  return returnedString
}

function leashDog(dogName,dogBreed){
  let returnedString = `Leash ${dogName} the ${dogBreed}`
  console.log(returnedString)
  return returnedString 
}

function walkToPark(dogName,dogBreed){
  let returnedString =`Walk to the park with ${dogName} the ${dogBreed}`
  console.log(returnedString)
  return returnedString 
}

function throwFrisbee(dogName,dogBreed){
  let returnedString = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(returnedString)
  return returnedString 
}

function walkHome(dogName,dogBreed){
  let returnedString = `Walk home with ${dogName} the ${dogBreed}`
  console.log(returnedString)
  return returnedString 
}

function unleashDog(dogName,dogBreed){
  let returnedString = `Unleash ${dogName} the ${dogBreed}`
  console.log(returnedString)
  return returnedString 
}

let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
]

function exerciseDog(dogName,dogBreed){
  let returnArray = []
  for (let i = 0; i < routine.length; i++){
    returnArray.push(routine[i](dogName,dogBreed))
  }
  return returnArray
}