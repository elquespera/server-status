export function logger(message: string, userId?: string) {
  console.log(`${userId ? "User " + userId + " " : ""}${message}`);
}
