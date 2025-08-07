// // 1
// let n = 10; // 원하는 항의 수
// let result = [0, 1];
// for (let i = result.length; i < n; i++) {
//   result.push(result[i - 1] + result[i - 2]);
// }
// console.log(`피보나치 수열(${n}항):`, result); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// // 2
// let results = [];
// let start = 1,
//   end = 100; // 범위

// while (start <= end) {
//   let count = 0;
//   for (let i = start; i > 1; i--) {
//     if (start % i === 0) {
//       count += 1;
//     }
//   }
//   if (count < 2 && start !== 1) results.push(start);
//   start++;
// }

// console.log(results); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

// // 3
// results2 = 0;
// const numbers = [5, 10, 15, 20, 25]; // 배열

// for (v of numbers) {
//   results2 += v;
// }

// console.log(results2); // 75

// // 4
// const str = 'Hello, World!';
// let reversed = '';

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }

// console.log('뒤집힌 문자열:', reversed); // "!dlroW ,olleH"

// // 5
// let n = 5; // 예시 숫자
// let factorial = 1;

// for (let i = n; i >= 1; i--) {
//   factorial *= i;
// }

// console.log(`${n}의 팩토리얼:`, factorial); // 출력 120
