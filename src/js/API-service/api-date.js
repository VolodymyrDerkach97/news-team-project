const date = new Date('2023-03-23');
const formattedDate = `${date.getDate()}/${
  date.getMonth() + 1
}/${date.getFullYear()}`;
console.log(formattedDate); // Output: 23/03/2023
