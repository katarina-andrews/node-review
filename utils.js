const roster = `employee dob and emails: 

employee 1 1983-07-23, anastasia1underwood1@outlook.com. employee 2 1990-08-27, foley.iyana@gmail.com. employee 3 1997-03-25, mithhe@gmail.com. employee 4 2004-04-27, ikawall2943@yahoo.com". employee 5 1987-12-15, syd-knee87@gmail.com. `;

function extractDob(roster) {
  const regexDate = /(\d{4}-\d{2}-\d{2})|(\d{2}\/\d{2}\/\d{4})/g;
  return roster.match(regexDate);
}

function extractEmail(roster) {
  const regexEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  return roster.match(regexEmail);
}

export { extractDob };
export { extractEmail };
