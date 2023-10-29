// OOPS task

class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  
  function getPG(movieArray) {
    return movieArray.filter(movie => movie.rating === "PG");
  }
  
  // Creating an instance of the Movie class
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  // Example array of movies
  const movieArray = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "PG-13"),
    new Movie("Movie 3", "Studio 3", "R"),
  ];
  
  console.log("Movies with a rating of 'PG':");
  const pgMovies = getPG(movieArray);
console.log(pgMovies);
  


//2.

class Person {
    constructor(name, age, address) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  
    // Method to display person details
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Address: ${this.address}`);
    }
  }
  
  //new var
  const person1 = new Person("John Doe", 30, "123 Main St, City");
  
  // Displaying person details
  person1.displayDetails();

  
//3.
  
class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute) {
      this.baseFare = baseFare; // Base fare 
      this.costPerKilometer = costPerKilometer; // Cost per kilometer 
      this.costPerMinute = costPerMinute; // Cost per minute
    }
  
    calculatePrice(distanceInKm, timeInMinutes) {
      // Calculate the price based on the provided distance and time
      const price = this.baseFare + (distanceInKm * this.costPerKilometer) + (timeInMinutes * this.costPerMinute);
      return price;
    }
  }
  
  // Example usage:
  const myUberPriceCalculator = new UberPriceCalculator(3.5, 1.2, 0.2); // Example pricing rates
  const distance = 10; // Distance in kilometers
  const time = 20; // Time in minutes
  
  const totalPrice = myUberPriceCalculator.calculatePrice(distance, time);
  console.log(`The estimated Uber price is $${totalPrice.toFixed(2)}`);
  
  