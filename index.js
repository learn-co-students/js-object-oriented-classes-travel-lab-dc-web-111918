let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];


class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  avenueToInteger(avenue){
    return eastWest.indexOf(avenue)
  }

  blocksTravelled(){
    const horizontalDistance = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal);
    const verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
    return Math.abs(horizontalDistance) + Math.abs(verticalDistance)
  }

  estimatedTime(peak=false){
    if (peak) {
      return this.blocksTravelled() / 2
    }else {
      return this.blocksTravelled() / 3
    }
  }
}

// estimatedTime — The method returns the number of minutes estimated for the trip. The estimated time depends on the distance in blocks and whether the trip is occurring during peak hours or off peak hours. During off peak hours, a driver travels three blocks in a minute, while during peak hours a driver travels an estimated two blocks in a minute.
