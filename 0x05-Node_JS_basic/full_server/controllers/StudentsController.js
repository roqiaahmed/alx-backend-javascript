/* eslint-disable no-plusplus */
import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        let result = 'This is the list of our students\n';
        const keys = Array.from(data.keys()).sort((a, b) => b - a);
        for (let i = 0; i < keys.length; i++) {
          const k = keys[i];
          let text = `Number of students in ${k}: ${
            data.get(k).length
          }. List: ${data.get(k).join(', ')}`;
          if (i !== keys.length - 1) {
            text += '\n';
          }
          result += text;
        }
        return response.status(200).send(result);
      })
      .catch((e) => {
        response
          .status(500)
          .send(`This is the list of our students\n${e.message}`);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2])
      .then((data) => response.status(200).send(`List: ${data.get(major).join(', ')}`))
      .catch(() => response.status(500).send('Cannot load the database'));
  }
}

export default StudentsController;
