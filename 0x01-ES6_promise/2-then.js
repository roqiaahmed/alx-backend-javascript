function handleResponseFromAPI(promise) {
  return promise.then(
    () => {
      console.log("Got a response from the API");
      return { status: 200, body: "Success" };
    },
    () => {
      console.log("Got a response from the API");
      return Error();
    }
  );
}
