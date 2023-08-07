// Create a function that returns a DriverStatus enum value
// based on a given age.
// too young is age less than 16
// too old are ages greater than 85
// eligible is any ages between 16 and 85

export enum DriverStatus {
  TOO_YOUNG = "too young",
  TOO_OLD = "too old",
  ELIGIBLE = "eligible",
}

export function getDriverStatus(age: number): string {
  // return age
  if (age < 16) {
    return DriverStatus.TOO_YOUNG
  }
  else if (age > 85) {
    return DriverStatus.TOO_OLD
  }
  else if (age > 16 && age < 85) {
    return DriverStatus.ELIGIBLE
  }
}



//switch (status.toUpperCase()) {
  //case "ACTIVE":
    //return DriverStatus.ACTIVE;
  //case "INACTIVE":
    //return DriverStatus.INACTIVE;
  //case "ON_LEAVE":
   // return DriverStatus.ON_LEAVE;
  //case "RESIGNED":

// export function sum(a: number, b: number): number {
//   return a + b;
// }

// Enum SPECIES {
// 	DOG=‘DOG, CAT=‘CAT’, BEAR=‘BEAR’
// }

// Class Animal {
// 	name: string;
// 	constructor(name: string) {
// 		this.name = name;
// 	}

// 	public move(distance: number) {
// 		console(`animal moved ${distance} meters’)
// 	}
// }

// new Animal(SPECIES.DOG).move(12)