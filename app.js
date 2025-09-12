class Person {
    name;
    age;
    occupation;
    message;

    constructor(name, age, occupation, message) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.message = message;


    }

    displayInfo() {
         console.log("Name: " + this.name);
         console.log("Age: " + this.age);
         console.log("Occupation: " + this.occupation);
         console.log("Message: " + this.message);

    }
}
const person1 = new Person ("Coco Martin","24","Masahista","Ser, tapos na po");

person1.displayInfo();