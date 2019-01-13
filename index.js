class Driver {
	constructor (name, startDate){
		this.name = name;
		this.startDate = new Date (startDate);
	}

	yearsExperienceFromBeginningOf(year){
		let lastDay = new Date(year, 1, 1);
		let minutes = 1000 * 60;
		let hours = minutes * 60;
		let days = hours * 24;
		let years = days * 365;
		let yearsExp = Math.floor(lastDay - this.startDate) / years;
		return parseInt(yearsExp);
	}
}

class Route{
	constructor(beginningLocation, endingLocation){
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;
	}

	blocksTravelled(){
		let eastWest = [
  			'1st Avenue',
			'2nd Avenue',
			'3rd Avenue',
			'Lexington Avenue',
			'Park',
			'Madison Avenue',
			'5th Avenue'
			];
		let verticalDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
		let horizontalDistance = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
		return verticalDistance + horizontalDistance;
	}
	estimatedTime(peak){
		let totalDistance = this.blocksTravelled();

		if (peak){
			return totalDistance / 2;
		}
		else {
			return totalDistance / 3;
		}

	}
}
