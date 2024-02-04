// 1. Square Star Pattern 

const num = 5;

// for (let i = 0 ; i < num ; i ++){
//     pattern = ""
//     for (let j = 0 ; j < num ; j ++){
//         pattern += "*"
//     }
//     console.log(pattern);
// }

// 2. Hollow Square Pattern 

// for (let i = 0; i < num; i ++){
//     pattern = ""
//     for (let j = 0; j < num; j ++){
//         if (i == 0 || i == (num -1) ){

//             pattern += "*"
//         }
//         else{
//             if(j==0 || j== (num - 1)){
//                 pattern += "*"
//             }
//             else{
//                 pattern += " "
//             }
//         }
//     }
//     console.log(pattern)
// }

// 3. Left Right Triangle 

// for (let i = 1; i <= num; i ++){
//     pattern = ""
//     for (let j = 0; j < i; j ++){
//         pattern += "*"
//     }
//     console.log(pattern);
// }

// 4. Right Triangle

//     *
//    **
//   ***
//  ****
// *****

// Ajay's Method

// for (let i = 5; i > 0; i--){
//     pattern = ""
//     for(let j = 0; j <= num; j++){
//         if (j>=i){
//             pattern += "*"

//         }
//         else {
//             pattern += " "
//         }
//     }
//     console.log(pattern);
// }

// No Confidence in it

// for (let i = 0; i < num ; i ++){
//     pattern = ""
//     for (let j = 0 ; j < num; j ++){
//         if(j>= (num-i-1)){
//             pattern+="*"
//         }
//         else{
//             pattern+=" "
//         }
//     }
//     console.log(pattern);
// }

// -----------------------------------------------------------------

// 5. Downward Triangle Star Pattern

// *****
// ****
// ***
// **
// *

// for (let i=0; i < num; i++){
//     pattern =""
//     for (let j = 0; j <= num ; j++){
//         if (j<(num - i)) {
//             pattern +="*"
//         }
//     }
//     console.log(pattern);
// }

// -----------------------------------------------------------------

// 6. Hollow Triangle Star Pattern

// *
// **
// * *
// *  *
// *   *
// ******

// -------------------------------------------------------------------

// for (let i=0; i < num; i++){
//     pattern = ""
//     for (let j=0; j<=i; j++){
//         if ( i == 0 || i == (num-1)) {
//             pattern +="*" 
//         }
//         else {
//             if (j == 0 || j == i){
//                 pattern +="*"
//             }
//             else{
//                 pattern += " "
//             }
//         }
        
//     }
//     console.log(pattern);
// }

// -------------------------------------------------------------------

// 7. Reversed Hollow Triangle Star Pattern

// *****
// *  *
// * *
// **
// *

// -------------------------------------------------------------------

// for (let i=num-1; i >= 0; i--){
//     pattern = ""
//     for (let j=0; j<=i; j++){
//         if ( i == 0 || i == (num-1)) {
//             pattern +="*" 
//         }
//         else {
//             if (j == 0 || j == i){
//                 pattern +="*"
//             }
//             else{
//                 pattern += " "
//             }
//         }
        
//     }
//     console.log(pattern);
// }

// -------------------------------------------------------------------

// 8. Javascript Pyramid Pattern

//     *
//    ***
//   *****
//  *******
// *********

// -------------------------------------------------------------------

// for (let i = 0; i < num; i ++){
//     pattern = ""
//     for (let j = 0; j < num; j++){
//         if (j < (num - i-1)){

//             pattern += " "
//         }
//         else{
//             pattern += "*"
//         }
        
//     }
//     for (let k =0; k < i; k++){
//         pattern += "*"
//     }
//     console.log(pattern);
// }

// Aundha Ghuma Do - Pel Do

// for (let i = num; i > 0; i --){
//     pattern = ""
//     for (let j = 0; j < num; j++){
//         if (j < (i-1)){

//             pattern += " "
//         }
//         else{
//             pattern += "*"
//         }
        
//     }
//     for (let k =num; k > i; k--){
//         pattern += "*"
//     }
//     console.log(pattern);
// }

// -------------------------------------------------------------------

// 9. Javascript Hollow Pyramid Pattern

//     *
//    * *
//   *   *
//  *     *
// *********

// -------------------------------------------------------------------

