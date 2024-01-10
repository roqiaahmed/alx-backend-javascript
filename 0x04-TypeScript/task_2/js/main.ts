interface DirectorInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface{
    workFromHome():string{
        return 'Working from home';
    }
    getCoffeeBreak():string{
        return 'Getting a coffee break';
    }
    workDirectorTasks():string{
        return 'Getting to director tasks';
    }
}


class Teacher implements TeacherInterface{
    workFromHome(){
        return 'Cannot work from home'
    }
    getCoffeeBreak(){
        return 'Cannot have a break'
    }
    workTeacherTasks(){
        return 'Getting to work'
    }
}

function createEmployee(salary: number | string) {
    if (typeof salary === "number" && salary < 500){
        return new Teacher();
    }
    return new Director();
}


function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director{
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: DirectorInterface | TeacherInterface): string{
    if (isDirector(employee)){
        return employee.workDirectorTasks()
    }
    else{
        return employee.workTeacherTasks()
    }
}

type Subjects = "Math" | "History";

function teachClass(todayClass:Subjects){
    if (todayClass === "Math"){
        return "Teaching Math";
    }
    else if (todayClass === "History"){
        return "Teaching History";
    }
}
