export const Service = {
  getAlldata: () =>
    fetch(`https://jsonplaceholder.typicode.com/users`).then(function (
      response
    ) {
      return response.json();
    }),
};
