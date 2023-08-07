import { getInventory, addInventory } from "./MovieStore";

describe("Movie Store", () => {
    test("check for inventory", () => {
        expect(getInventory("movie")).toEqual(["Equalizer"])
    });

    test("check if movie added", () => {
        expect(addInventory("Barbie")).toEqual(["Equalizer" , "Barbie"])
    })
});
