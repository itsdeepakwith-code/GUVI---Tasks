// JSON iteration

const myResume = {
    "name": "Deepak",
    "Degree": "Computer Technology",
    "year": 2022
};

// Using a for-in loop
console.log("Using for-in loop:");
for (let key in myResume) {
    console.log(key + ": " + myResume[key]);
}

// Using a for-of loop (for objects)
console.log("Using for-of loop (for objects):");
for (let key of Object.keys(myResume)) {
    console.log(key + ": " + myResume[key]);
}

// Using forEach (for arrays)
console.log("Using forEach (for arrays):");
Object.entries(myResume).forEach(([key, value]) => {
    console.log(key + ": " + value);
});

  
  