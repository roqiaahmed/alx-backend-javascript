export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  const foundStudents = students.filter((student) => student.location === city);
  return foundStudents.map((student) => {
    const found = newGrades.filter(
      (newGrade) => newGrade.studentId === student.id,
    );
    if (found.length > 0) {
      return { ...student, grade: found[0].grade };
    }
    return { ...student, grade: 'N/A' };
  });
}
