const array = ["1-Python", "2-C++", "3-C#", "4-PHP"];

const newArray = array.map((item) => item.split("-")[1]);

console.log(newArray);