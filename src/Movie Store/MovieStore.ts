// A movie store is asking you to make an application
// the application can add movies to an inventory array,
// track if a movie is rented out or in stock,
// and calculate a customer's total cost for the # of rentals * # of days.
// A customer can only rent a movie if it is in stock.
const inventory = [ "Equalizer" ]

export function getInventory(movie: string): Array <string> {
    return inventory 
}

export function addInventory(movie: string): Array <string> {
    // const newInventory = [...inventory, movie]
    return [...inventory, movie]
}
// let ids: Array<number>;