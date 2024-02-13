export default getNeighborhoodsList;
  // Initialize an array property 'sanFranciscoNeighborhoods'
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Define a method 'addNeighborhood' using arrow syntax
  this.addNeighborhood = (newNeighborhood) => {
    // Add the new neighborhood to the array
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    
    // Return the updated array
    return this.sanFranciscoNeighborhoods;
