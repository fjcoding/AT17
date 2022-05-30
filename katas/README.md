# Katas Folder

Welcome to the Katas folder!

This folder will contain the katas for AT17. "Katas" are small coding exercises whose aim is to help to exercise
coding practices and get more familiar with different features of the chosen language, for this specific case, Javascript.

## How to use this folder?
Each Kata will have its own folder that will be a child of katas folder. For each kata folder, there will be a
README file describing the kata details. Each student will individually work on his/her solution for each kata by
creating a child folder under kata/<kata name> folder, this folder must be named with student's name (first name only, all lowercase) and it should contain all necessary files to solve the kata.

For example, say we have "args" kata, the following files will be created by the trainer
```
katas/args
katas/args/README.md
```

Then, students read kata description in the README.md file and proceed to solve the kata. Say, for student "student1", the student creates the following files
```
katas/args/student1
katas/args/student1/main.js
katas/args/student1/moduleA.js
katas/args/student1/moduleB.js
```

The files "main.js", "moduleA.js" and "moduleB.js" are part of the solution that "student1" will create. Note that "moduleA.js", "moduleB.js" are just examples, those files could be named according to the solution of the student.

## How to run single file of code
Edit ![](../package.json) and add necessary scripts to run the code. For "args" kata of "student1" example above, student would add the following
```
  "scripts": {
    "args:student1": "node katas/args/student1/main.js"
  },
```

Then, run the file using npm
```
npm run args:student1
```

This change must be also commited in the repo