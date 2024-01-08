export default function getListStudentIds(Students) {
  if (Array.isArray(Students) === false) {
    return [];
  }
  return Students.map((student) => student.id);
}
