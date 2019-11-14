/*

****1****
***123***
**12345**
*1234567*
123456789

*/

// const ROWS = 5;

// let start = 0;
// let end = ROWS * 2 - 1;

// for (let i = 0; i < ROWS; i++) {
//   let row = '';
//   let n = 1;

//   for (let j = 0; j < ROWS * 2 - 1; j++) {
//     let value = ' ';

//     if (j >= start && j < end) {
//       value = n;
//       n++;
//     }

//     row += value;
//   }

//   start++;
//   end--;

//   console.log(row);
// }

const ROWS = 5;

let start = ROWS - 1;
let end = ROWS;

for (let i = 0; i < ROWS; i++) {
  let row = '';
  let n = 1;

  for (let j = 0; j < ROWS * 2 - 1; j++) {
    let value = ' ';

    if (j >= start && j < end) {
      value = n;
      n++;
    }

    row += value;
  }

  start--;
  end++;

  console.log(row);
}
