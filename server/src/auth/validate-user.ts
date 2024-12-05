export function validateUser(username: string, password: string) {
  return (
    getUsers().findIndex(
      (user) => user.username === username && user.password === password,
    ) >= 0
  );
}

function getUsers() {
  const users: { username: string; password: string }[] = [];

  let index = 1;
  let username: string | undefined;
  let password: string | undefined;

  do {
    username = process.env[`USERNAME_${index}`];
    password = process.env[`PASSWORD_${index}`];
    if (username && password) {
      users.push({ username, password });
    }
    index += 1;
  } while (username && password);

  return users;
}
