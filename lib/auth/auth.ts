"use server";
export async function signIn(username: string, password: string) {
  console.log(username, password);
  return "Success!";
}
