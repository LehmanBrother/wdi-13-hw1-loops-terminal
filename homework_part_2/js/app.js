//Part 1
//1. Concatenation consists of appending one string to the end
//of another using the "+" operator; interpolation requires
//the evaluation of a variable into its corresponding value
//Concat example: "Hello " + "World"
//Interp example: var x = "Hello "; var y = "World"
//console.log(xy)

//2. DRY stands for Don't Repeat Yourself; it allows for more
//efficient coding. Tools such as switch and loops help us
//write DRY code

//3. Declaring a variable creates the variable (and sometimes
//stores a value), whereas assigning a value simply sets its
//value. Defining a variable consists of changing its value
//from undefined to an actual value.

//4. Use const when you don't want a variable to be updated;
//use let when you do (we never learned this and I don't really
//understand it)

//5. A parent directory is a directory that contains
//sub- or children directories

//6. man

//7. Tab completion allows you to click tab to autocomplete
//directory or file names, thus saving much time

//Part 2
//1. <
//2. >
//3. ==
//4. <, <
//5. ==, !=
//6. ==
//7. ==

//Part 3
//1. This is an infinite loop, because the while clause will
//always evaluate to true, so the console.log command will
//never stop running.

//2. This is an infinite loop, because runProgram is a const
//and cannot be redeclared to false

//3. This code will result in "A" being written 20 times

//Part 4
//1. For loops will run for a specified number of iterations,
//whereas while loops will run for an indefinite number of
//iterations until a specific criterion is met.

//2. 

for (let i = 0; i < 1000; i++) {
  console.log(i);
}


//3. 
//The first part of the control statement sets the initial
//value of i.
//The second part of the control statement specifies the
//condition(s) under which the loop will run.
//The third part of the control statement specifies how
//the value of i will change with each iteration.

//4. 

for (i = 999; i >= 0; i--) {
  console.log(i);
}


//5.
for (i = 1; i <= 10; i++) {
  console.log(`The value of i is: ${i} of 10`);
}