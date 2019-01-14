let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor(name, startDate) {
    this.name = name ;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(yearString) {
    let endYear = parseInt(yearString);
    let startYear = this.startDate.getFullYear();
    return endYear - startYear;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }


  blocksTravelled() {
    let verticalDistance = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);

    let horizontalStarting = () => {
      let i = 0;
      let startingIndex = 0;
      for (const ele of eastWest) {
        if (this.beginningLocation.horizontal === ele) {
          startingIndex = i;
        }
        i ++;
      }
      return startingIndex;
    }

    let horizontalEnding = () => {
      let i = 0;
      let endingIndex = 0;
      for (const element of eastWest) {
        if (this.endingLocation.horizontal === element) {
          endingIndex = i;
        }
        i ++;
      }
      return endingIndex;
    }

    let horizontalDistance = Math.abs(horizontalEnding() - horizontalStarting());

    return verticalDistance + horizontalDistance;
  }


  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
