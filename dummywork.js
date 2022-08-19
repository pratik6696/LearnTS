// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 10000);
//     });
//   }
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: "resolved"
//   }
//   asyncCall();
// Normal await code above
// async function printdelayed(elements: String[]){
//    // console.log(elements);
//     for(let a in elements){
//         await retarder(8000);
//         console.log(elements[a]);
//     }
// }
// async function retarder(milliseconds: number) {
//         let p = new Promise((pz) => {
//             setTimeout(() => {pz()}, milliseconds);
//         });
//         await p;
// }
// printdelayed(["Hello","I","am","Good"]);
// printdelayed(["How","Are","You"]);
// printdelayed(["The","Weather","is","Nice"]);
// asyc await code above
var parElement = document.getElementById("app");
var textToAdd = document.createTextNode("Text to be added");
parElement.appendChild(textToAdd);
