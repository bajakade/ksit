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
.column {
  flex: 25%;
  padding: 20px;
}

/* On screens that are 992px wide or less, go from four columns to two columns */
@media screen and (max-width: 992px) {
  .column {
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

source [W3 School](https://www.w3schools.com/css/css3_mediaqueries.asp)