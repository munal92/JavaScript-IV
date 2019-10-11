// CODE here for your Lambda Classes
class Person {
    constructor(prsonAttrb){
        this.name = prsonAttrb.name;
        this.age = prsonAttrb.age;
        this.location = prsonAttrb.location;
       
    }
    speak(){
        return `Hello my name is ${this.name} I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(insAtrrb){
        super(insAtrrb);
        this.specialty = insAtrrb.specialty;
        this.favLanguage = insAtrrb.favLanguage;
        this.catchPhrase = insAtrrb.catchPhrase;
        

    }

    demo(subject){
        return `Today we are learning about ${subject}`;
    }

    grade(student,subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(stuAttrb){
        super(stuAttrb);
        this.previousBackground = stuAttrb.previousBackground;
        this.className = stuAttrb.className;
        this.favSubjects = stuAttrb.favSubjects;
    }

    listsSubjects (){
        return console.log(this.favSubjects);
    }
    PRAssignment (subject){
        return `${this.name} has submitted a PR for ${subject}`;

    }
    sprintChallenge (subject){
        return `${this.name} has begun sprint challenge on ${subject}` ;
    }
}

class TeamLeader extends Instructor{
    constructor(tlAttrb){
        super(tlAttrb);
        this.gradClassName = tlAttrb.gradClassName;
        this.favInstructor = tlAttrb.favInstructor;
    }

    standUp (channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode (studentOb , subject){
      return  `${this.name} debugs ${studentOb.name}'s code on ${subject}`;
    }
}

const sam = new Instructor({
    name: "sam",
    location: "NY",
    age: 47,
    favLanguage: "HTML",
    specialty: "Front-end",
    catchPhrase: `Homies`
});

const jamal = new Instructor({
    name: "jamal",
    location: "San Francisco",
    age: 33,
    favLanguage: "Phyton",
    specialty: "Fullstack",
    catchPhrase: `Hey`
});

const fatih = new Student({
    name: "Fatih",
    location: "San Francisco",
    age: 27,
    favSubjects: ["HTML", "Java"],
    previousBackground: "Engineer",
    className:"WEPT11"
});

const laura = new Student({
    name: "Laura",
    location: "Las Vegas",
    age: 37,
   favLanguage: ["C++", "Python"],
   previousBackground: "Front desk",
   className:"WEPT11"
});

const ryan = new TeamLeader({
    name: "Ryan",
    location: "Arizona",
    age: 38,
    gradClassName: "Webt22",
    favInstructor:"Sean"
});

const kenny = new TeamLeader({
    name: "Kenny",
    location: "Seattle",
    age: 30,
    gender: "male",
    gradClassName: "Webt10",
    favInstructor:"Britt"
});

console.log (fatih.speak());
console.log (ryan.speak());
console.log (kenny.standUp("CS11"));
console.log(laura.sprintChallenge("Javascript"));
console.log(ryan.debugsCode(fatih,"JS"));
console.log(sam.grade(laura, "CSS"));