import { getDriverStatus } from "./Drivers";

describe("Drivers", () => {
//   test("checking to return driver status", () => {
//     expect(getDriverStatus(6)).toEqual(6) 
//   });

  test("check age is less than 16", () => {
    expect(getDriverStatus(12)).toEqual("too young")
  });

  test("check age is greater than 85", () => {
    expect(getDriverStatus(86)).toEqual("too old")
  })

  test("check if age is between 16 and 85", () => {
    expect(getDriverStatus(32)).toEqual("eligible")
  })

});
