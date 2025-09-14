// Exercises: Level 1
// Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.com/v3.1/all';

fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(
        `Country: ${country.name}, 
Capital: ${country.capital || "No capital"}, 
Languages: ${country.languages.map(lang => lang.name).join(", ")}, 
Population: ${country.population}, 
Area: ${country.area || "N/A"}`
      );
    });
  })
  .catch(error => console.error(error));
  
// Exercises: Level 2
// Print out all the cat names in to catNames variable.
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))
// Exercises: Level 3
// Read the cats api and find the average weight of cat in metric unit.
fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    let totalWeight = 0;
    let count = 0;

    data.forEach(cat => {
      if (cat.weight && cat.weight.metric) {
        const [min, max] = cat.weight.metric.split(" - ").map(Number);
        const avg = (min + max) / 2; 
        totalWeight += avg;
        count++;
      }
    });

    const overallAverage = totalWeight / count;
    console.log(`Average cat weight (metric): ${overallAverage.toFixed(2)} kg`);
  })
  .catch(error => console.error(error));

// Read the countries api and find out the 10 largest countries
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    let largestCountries = 0;
    let count = 0;

    data.forEach(country => {
      if (cat.weight && cat.weight.metric) {
        const [min, max] = cat.weight.metric.split(" - ").map(Number);
        const avg = (min + max) / 2; 
        totalWeight += avg;
        count++;
      }
    });

    const overallAverage = totalWeight / count;
    console.log(`Average cat weight (metric): ${overallAverage.toFixed(2)} kg`);
  })
  .catch(error => console.error(error));

// Read the countries api and count total number of languages in the world used as officials.
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    let totalWeight = 0;
    let count = 0;

    data.forEach(cat => {
      if (cat.weight && cat.weight.metric) {

        const [min, max] = cat.weight.metric.split(" - ").map(Number);
        const avg = (min + max) / 2; 
        totalWeight += avg;
        count++;
      }
    });

    const overallAverage = totalWeight / count;
    console.log(`Average cat weight (metric): ${overallAverage.toFixed(2)} kg`);
  })
  .catch(error => console.error(error));
