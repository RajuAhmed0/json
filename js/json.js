const students = [
    {
        id: 1,
        name: "sajib khan",
        age: 24,
        roll: 121,
        sub: "physicology",
        gender: "male"
    },
    {
        id: 2,
        name: "ramim ahmed",
        age: 23,
        roll: 12,
        sub:  "physics",
        gender: "male"
    },
    {
        id: 3,
        name: "mehedi khan",
        age: 25,
        roll: 21,
        sub: "science",
        gender: "male"
    }
];

const studentInfo = JSON.stringify(students);
const studentJS = JSON.parse(studentInfo);
// console.log(students);
// console.log(studentInfo);
// console.log(studentJS);

