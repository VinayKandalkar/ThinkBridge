// Problem 1) Create an object representing a person with properties like name, age, and city.
const person = {
  name: "Vinay",
  age: 24,
  city: "Amravati"
};
console.log("Person:", person);

// Problem 2) Nested object & method
const car = {
  brand: "Tata",
  model: "Nexon",
  owner: person,
  start: function() {
    console.log(`${this.brand} is starting...`);
  }
};
car.start();
console.log("Car owner:", car.owner.name);


// Problem 3) Array of objects
const students = [
  { name: "Ali", age: 20 },
  { name: "Bebo", age: 22 },
  { name: "Cherry", age: 23 }
];
console.log("Students:", students);
students.forEach(student => {
  console.log(`${student.name} is ${student.age} years old.`);
}
);


// Problem 4) Accessing and modifying object properties
console.log("Original age:", person.age);
person.age += 1; // Happy Birthday!
console.log("New age:", person.age);
person.city = "Mumbai"; // Moved to a new city
console.log("New city:", person.city);
console.log("Updated Person:", person);


// Problem 5) Looping through object properties
console.log("Person properties:");
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
console.log("Car properties:");

for (let key in car) {
  if (key !== "start") { // Skip the method
    console.log(`${key}: ${car[key]}`);
  }
} 
console.log("Student properties:");
students.forEach((student, index) => {
  console.log(`Student ${index + 1}:`);
  for (let key in student) {
    console.log(`  ${key}: ${student[key]}`);
  }
});


// Problem 6) Deleting a property
console.log("Before deletion:", person);
delete person.city;
console.log("After deletion:", person);
console.log("Before deletion:", car);
delete car.owner;
console.log("After deletion:", car);

console.log("Before deletion:", students);
students.splice(1, 1); // Remove the second student (Bebo)
console.log("After deletion:", students);
console.log("Students after deletion:");
students.forEach(student => {
  console.log(student);
});


// Problem 7) Object methods and 'this' keyword
const rectangle = {
  width: 10,
  height: 5,
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  }
};
console.log("Rectangle area:", rectangle.area());
console.log("Rectangle perimeter:", rectangle.perimeter());
console.log("Rectangle properties:");
for (let key in rectangle) {
  if (typeof rectangle[key] !== "function") {
    console.log(`${key}: ${rectangle[key]}`);
  } 
}


// Problem 8) Merging objects
const address = {
  street: "123 Main St",
  zip: "400001"
};
const fullPerson = { ...person, ...address };
console.log("Full Person:", fullPerson);
console.log("Full Person properties:");
for (let key in fullPerson) {
  console.log(`${key}: ${fullPerson[key]}`);
}

