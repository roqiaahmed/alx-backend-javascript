interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?:number;
    location: string;
    [key: string]: any;
  }

  interface Directors extends Teacher{
    numberOfReports: number;
  }

  interface printTeacherFunction{
    fristName: string;
    lastName: string;
  }

  function printTeacher({fristName, lastName}: printTeacherFunction){
    return `${fristName[0]}. ${lastName}`;
  }

  interface StudentConstructor{
    firstName: string, lastName: string
  }

  class StudentClass{
    firstName:string;
    lastName:string;
    constructor({firstName, lastName}: StudentConstructor){
      this.firstName = firstName;
      this.lastName = lastName;
    }

    workOnHomework(){
      return 'Currently working';
    }

    displayName(){
      return this.firstName;
    }
  }
