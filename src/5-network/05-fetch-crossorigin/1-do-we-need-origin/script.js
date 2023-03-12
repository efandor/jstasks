
async function getUsers(names) {
  let url = new URL('https://api.github.com/users/');
  let responses = [];

  names.forEach((name) => {
    try {
      let response = fetch(`${url}${name}`)
      .then((result) => result.status === 200 ? result.json() : `User "${name}" not found`);
      responses.push(response);
    } catch(error) {
      console.log(error);
    }
  });

  return await Promise.all(responses);;
}

getUsers(['efandor', 'javascript-tutorial', 'efandorrrrr']).then(
  (result) => console.log(result));
