export const OCTAVES = [1, 2, 3, 4, 5, 6, 7]
export const NOTES = ['A', 'C', 'D#', 'F#', 'E']

export const exampleCode = [
  {
    label: 'FizzBuzz',
    value: `for (var i = 1; i < 16; i++) {
    if (i % 15 == 0) console.log('FizzBuzz')
    else if (i % 3 == 0) console.log('Fizz')
    else if (i % 5 == 0) console.log('Buzz')
    else console.log(i)
  }`,
  },
  {
    label: 'console.log()',
    value: `
    console.log("Hello World");
    console.log("Testing...", "1","2","3");
    console.log("DJ Khalid!");
    console.log("Another one");
  `,
  },
]
export const synths = {
  SYNTHONE: 'SYNTHONE',
  SYNTHTWO: 'SYNTHTWO',
}
