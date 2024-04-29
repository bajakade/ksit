# Kano State Institute of Information Technology


## Basic Commands

`clear` clear the screen

`ls` means list current directory content. 

`cd` means change directory is a command used to move between folders. e.g

`cd project` # change to project directory

`cd ../` # move back to parent directory

## Git

To clone(copy) the git repo using `ssh`  use `git clone` command as shown below

`git clone git@github.com:bajakade/ksit.git`

## SSH Configuration
#### Generate keys
- To generate an ssh key use the `ssh-keygen` utility
    `ssh-keygen -t rsa -b 1024`
where `-t` flag option indicates the type of algorithm which is `rsa` in the above example and `-b` indicates the size of the key in bits

Git init

Git branch

Git pull

Git push

Git Checkout

Git commit

Git add

## Navigation Bar
this is a menu bar commonly place at the top of many website/web applications to easy site navigation

## Media Query
The @media rule, introduced in CSS2, made it possible to define different style rules for different media types.

Media queries can be used to check many things, such as:

- width and height of the viewport
- orientation of the viewport (landscape or portrait)
- resolution

### CSS  Media Types
| Value 	| Description                                        |
|-----------|----------------------------------------------------|
| all	    | Used for all media type devices
| print	    | Used for print preview mode
| screen	| Used for computer screens, tablets, smart-phones etc.

Here are some commonly used media features:

| Value     	| Description                                      |
|---------------|--------------------------------------------------|
| orientation	| Orientation of the viewport. Landscape or portrait
| max-height	| Maximum height of the viewport
| min-height	| Minimum height of the viewport
| height	    | Height of the viewport (including scrollbar)
| max-width	    | Maximum width of the viewport
| min-width	    | Minimum width of the viewport
| width	        | Width of the viewport (including scrollbar)

### Syntax 
```
@media not|only mediatype and (media feature) and (media feature) {
  CSS-Code;
}
```
The mediatype is optional (if omitted, it will be set to all). However, if you use not or only, you must also specify a mediatype.

example
```
/* Container for flexboxes */
.row {
  display: flex;
  flex-wrap: wrap;
}

/* Create four equal columns */
.columnumn {
  flex: 25%;
  padding: 20px;
}

/* On screens that are 992px wide or less, go from four columns to two columns */
@media screen and (max-width: 992px) {
  .columnumn {
    flex: 50%;
  }
}

/* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .row {
    flex-direction: column;
  }
}
```

### Screen Sizes

- 320px — 480px: Mobile devices
- 481px — 768px: iPads, Tablets
- 769px — 1024px: Small screens, laptops
- 1025px — 1200px: Desktops, large screens
- 1201px and more —  Extra large screens, TV

source [W3 School](https://www.w3schools.com/css/css3_mediaqueries.asp)

## JS *if...else*
Conditional statements are used to perform different actions based on different conditions.

Use the `if` statement to specify a block of JavaScript code to be executed if a condition is true.
Use the `else` statement to specify a block of code to be executed if the condition is false.

### Syntax
```
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
```
### Example
If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":
```
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

## The For Loop
The for statement creates a loop with 3 optional expressions:
```
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
```

- Expression 1 is executed (one time) before the execution of the code block.
- Expression 2 defines some boolean condition to be satisfied for executing the code block.
- Expression 3 is executed (every time) after the code block has been executed.

### Example
```
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
```