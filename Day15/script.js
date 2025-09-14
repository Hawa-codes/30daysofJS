// Exercises Level 1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Aniimal {
    constructor(name, age, color, legs){
        console.log(this) 
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
}
const animal = new Aniimal()

console.log(animal);  // Animal {name: undefined, age: undefined, color: undefined, legs: undefined}
// method 2
class Animal {
  constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
  getAnimalInfo() {
    const info = this.name + ' ' + this.age + ' ' + this.color + ' ' + this.legs
    return info
  }
}

const animal1 = new Animal('Cat', 250, 'black', '4')
const animal2 = new Animal('Goat', 28, 'Brown', '4')

console.log(animal1.getAnimalInfo())
console.log(animal2.getAnimalInfo())

// method 3 getter
class Annimal {
  constructor(name, color) {
        this.name = name
        this.color = color
        this.age = 10
        this.legs = 4
    }
  getAnimalInfo() {
    const info = this.name + ' ' + this.color 
    return info
  }
  get getAge() {
    return this.age
  }
  get getLegs() {
    return this.legs
  }
}
const animal3 = new Annimal('Cat','black')
const animal4 = new Annimal('Goat', 'Brown',)

console.log(animal3.getAge); // 10
console.log(animal4.getAge); // 10

console.log(animal3.getLegs);  // 4
console.log(animal4.getLegs);  // 4

// Create a Dog and Cat child class from the Animal Class.
// dog
class Dogg extends Animal {
    
}

// Cat
class Catt extends Animal {
    
}

// Exercises Level 2
// Override the method you create in Animal class
// dog
class Dog extends Animal {
    constructor(name, color, gender) {
        super(name, color)
        this.gender = gender
    }
    tye() {
    return this.gender
  }
}

// Cat
class Cat extends Animal {
    constructor(name, color, breed) {
        super(name, color)
        this.breed = breed
    }
    tpe() {
        return this.breed
    }
}

const dog1 = new Dog("Rocky", "Brown", "female")
const cat1 = new Cat("Milo", "White", "ginger")

console.log(dog1.getAnimalInfo()) ; 
console.log(dog1.tye());          

console.log(cat1.getAnimalInfo()); 
console.log(cat1.tpe()); 

// Exercises Level 3
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
class Statistics {
  constructor(data) {
    this.data = data
  }
  count() {
    return this.data.length
  }

  sum() {
    return this.data.reduce((a, b) => a + b, 0)
  }

  min() {
    return Math.min(...this.data)
  }

  max() {
    return Math.max(...this.data)
  }

  range() {
    return this.max() - this.min()
  }

  mean() {
    return Math.round(this.sum() / this.count())
  }

  median() {
    const sorted = [...this.data].sort((a, b) => a - b)
    const mid = Math.floor(sorted.length / 2)
    return sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid]
    }

  mode() {
    const freq = {}
    this.data.forEach(num => (freq[num] = (freq[num] || 0) + 1))

    let maxCount = 0
    let mode = null
    for (let [num, count] of Object.entries(freq)) {
      if (count > maxCount) {
        maxCount = count
        mode = Number(num)
      }
    }
    return { mode, count: maxCount }
  }

  var() {
    const mean = this.mean()
    const squaredDiffs = this.data.map(num => (num - mean) ** 2)
    return squaredDiffs.reduce((a, b) => a + b, 0) / this.count()
  }

  std() {
    return Math.round(Math.sqrt(this.var()) * 10) / 10
  }

  percentile(p) {
    const sorted = [...this.data].sort((a, b) => a - b)
    const index = (p / 100) * (sorted.length - 1)
    const lower = Math.floor(index)
    const upper = Math.ceil(index)
    if (lower === upper) return sorted[lower]
    return sorted[lower] + (sorted[upper] - sorted[lower]) * (index - lower)
  }

  freqDist() {
    const freq = {}
    this.data.forEach(num => (freq[num] = (freq[num] || 0) + 1))

    return Object.entries(freq)
      .map(([num, count]) => [(count / this.count()) * 100, Number(num)])
      .sort((a, b) => b[0] - a[0])
  }
} 

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = new Statistics(ages);

console.log('Count:', statistics.count()) 
console.log('Sum:', statistics.sum()) 
console.log('Min:', statistics.min()) 
console.log('Max:', statistics.max()) 
console.log('Range:', statistics.range()) 
console.log('Mean:', statistics.mean()) 
console.log('Median:', statistics.median()) 
console.log('Mode:', statistics.mode()) 
console.log('Variance:', statistics.var()) 
console.log('Standard Deviation:', statistics.std()) 
console.log('Percentile(50):', statistics.percentile(50)) 
console.log('Frequency Distribution:', statistics.freqDist())