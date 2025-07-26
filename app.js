import { extractDob, extractEmail } from "./utils.js";
import chalk from "chalk";

const roster = `employee dob and emails: 

employee 1 1983-07-23, anastasia1underwood1@outlook.com. employee 2 1990-08-27, foley.iyana@gmail.com. employee 3 1997-03-25, mithhe@gmail.com. employee 4 2004-04-27, ikawall2943@yahoo.com". employee 5 1987-12-15, syd-knee87@gmail.com. `;

console.log(chalk.blueBright("Birthdays:"));
console.log(extractDob(roster));
console.log(chalk.red.bold("Emails:"));
console.log(extractEmail(roster));
