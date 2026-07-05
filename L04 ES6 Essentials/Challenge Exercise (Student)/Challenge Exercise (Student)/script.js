let movies = [
  { id: 1, title: "Inception", price: 4.99 },
  { id: 2, title: "The Matrix", price: 3.99 },
  { id: 3, title: "Interstellar", price: 5.99 },
  { id: 4, title: "Tenet", price: 4.99 },
  { id: 5, title: "Dunkirk", price: 3.49 },
  { id: 6, title: "Avatar", price: 4.49 },
  { id: 7, title: "The Godfather", price: 3.99 },
  { id: 8, title: "The Dark Knight", price: 4.99 }
];

let rentals = [
  {
    customerId: 1001,
    name: "Alice Johnson",
    movieIds: [1, 2]
  },
  {
    customerId: 1002,
    name: "Bob Smith",
    movieIds: [3, 4, 5]
  },
  {
    customerId: 1003,
    name: "Cathy Brown",
    movieIds: [6]
  },
  {
    customerId: 1004,
    name: "David Wilson",
    movieIds: [7, 8]
  }
];

// Get all movie titles for the given array of movie IDs
const getMovieTitles = movieIds =>
  movieIds.map(id => movies.find(m => m.id === id).title);

console.log(getMovieTitles(rentals[1].movieIds));
// ['Interstellar', 'Tenet', 'Dunkirk']

// Get the total rental price for the given array of movie IDs
const getCustomerTotalPrice = movieIds =>
  movieIds
    .map(id => movies.find(m => m.id === id).price)
    .reduce((sum, price) => sum + price, 0);

console.log('$ ' + getCustomerTotalPrice(rentals[2].movieIds).toFixed(2));
// $ 4.49
