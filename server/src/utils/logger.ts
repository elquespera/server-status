import chalk from "chalk";

export function logger(message: string, userId?: string) {
  console.log((userId ? chalk.bold("User " + userId) + " " : "") + message);
}
