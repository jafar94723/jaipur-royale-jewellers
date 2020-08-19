/*
function upperV(strings, ...vars) {
  // make vars uppercase 
  console.log("vars: ", vars)       // an array of the passed in variables
  console.log("strings:", strings)  // the string parts

  // put them together
  return vars.reduce((str, v, i) => str + v.toUpperCase() + strings[i+1], strings[0]);
}

let adverb = "boldly"
let output = upperV`to ${adverb} split infinitives that no ${'man'} had split before...`;
console.log(output)

*/