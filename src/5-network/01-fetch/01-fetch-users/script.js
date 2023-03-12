
async function getUsers(names) {
  let responses = [];

  names.forEach((name) => {
    let response = fetch(`https://api.github.com/users/${name}`)
      .then((result) => result.status === 200 ? result.json() : `User "${name}" not found`);

    responses.push(response);
  });

  return await Promise.all(responses);;
}

getUsers(['efandor', 'javascript-tutorial', 'efandorrrrr']).then(
  (result) => console.log(result));
