// Code your solution in this file!
function distanceFromHqInBlocks(currentStreet) {
    if (currentStreet >= 42){
        return currentStreet - 42
    }
    else if (currentStreet < 42){
        return 42 - currentStreet
    }
}

function distanceFromHqInFeet(currentStreet) {
    if (currentStreet >= 42){
        return ( (currentStreet - 42) * 264 )
    }   else {
        return ( (42 - currentStreet) * 264 )
       }
}

function distanceTravelledInFeet(start, destination) {
    return (Math.abs(start - destination) * 264)
}

function calculatesFarePrice(start, destination) {
    if ( (Math.abs(start - destination) * 264) < 400 ){
        return 0
    }
    else if ( ( (Math.abs(start - destination) * 264) >= 400 ) && ( (Math.abs(start - destination) * 264) <= 2000 ) ){
        return ( 0.02 * ( (Math.abs(start - destination) * 264) - 400 ) )
   }
   else if ( ( (Math.abs(start - destination) * 264) > 2000) && ( (Math.abs(start - destination) * 264) < 2500 ) ){
       return 25
   }
   else if ( (Math.abs(start - destination) * 264) >= 2500){
       return "cannot travel that far"
   }
}
