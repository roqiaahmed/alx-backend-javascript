/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Teacher.ts" />

export const cpp : Subjects.Cpp = new Subjects.Cpp();
export const react : Subjects.React = new Subjects.React();
export const Java : Subjects.Java = new Subjects.Java();

const cTeacher:Subjects.Teacher = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    experienceTeachingC: 10
};

cpp.setTeacher(cTeacher);
console.log(cpp.getAvailableTeacher());
console.log(cpp.getRequirements());

react.setTeacher(cTeacher);
console.log(react.getAvailableTeacher());
console.log(react.getRequirements());

Java.setTeacher(cTeacher);
console.log(Java.getAvailableTeacher());
console.log(Java.getRequirements());
