import { uploadPhoto, createUser } from "./utils.js";

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then(
    (value) => {
      console.log(value[0].body, value[1].firstName, value[1].lastName);
    },
    () => {
      console.log("Signup system offline");
    }
  );
}
