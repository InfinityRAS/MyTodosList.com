# MyTodosList.com


Hey Coders!

Welcome to MyTodosList.com, 

This is my first react-project namely: MyTodosList.com. Using this website you can add some todos- means the work that you're needed to do in future.. You can add them up here, so that you will not forget them and once you've done the todo, you can delete the todo also! 

To get started you can follow the following instructions!


## Getting Started

You first are needed to download and install git from [Here](https://git-scm.com/downloads)
and then open any folder in your Computer, you're needed to right click and click on git bash here option.

After opening the git bash run the following command (if you've the ssh key configured in your pc, like me)
``` bash 
git clone git@github.com:AryanSisodiya/MyTodoList.com.git
```

and if you don't have ssh configured in your pc, don't worry, run the following command
``` bash
git clone https://github.com/AryanSisodiya/MyTodoList.com.git
```

## Starting the Server

After cloning the repoitory in your pc, run this command
``` bash
cd MyTodoList.com/
```

After you run the above command, run the following command to start the react-app in development mode! 
``` bash
npm i
npm start 
```

After the server is Started, you need to go [localhost:80](localhost:80)


## Components

MyTodoList.com has three main Components, i.e., Header, Add Todo Input form and the Todos section

### The Header Component

The Header Component consists of the links used for going to different pages of this Website.

It basically consists the Home page link and a About page link.. and a Header title with home as an endpoint

Since it's a react app so the page wouldn't reload when you click on links... a top-loading-bar is created for more better look

### The Add Todo form Component

The add todo form is basically consists of a input form for giving an title to your todo and a short description textarea..

#### Adding a Todo

To add a todo, you need to fill the input forms because todo will not be added if you leave them blank

After you fill out the form, you're simply needed to click on Add Todo button to add your Todo.

### Viewing the Todos - The Todo Display Component

Once you click on add Todo button, todo with the auto-generated todo number will be added, and displayed in the Todo Display Component

Todos will be saved in the localstorage, so you will not get them lost, once you reload the page

## Deleting a Todo

To delete a Todo, you need to click on the Delete Todo button, present below the Todo's description

Once you click on the delete todo button your todos will be deleted permanently, so click that button after thinking alot!





## Authors

- [Aryan Sisodiya](https://www.github.com/AryanSisodiya)

  
## Contributing

Contributions are always welcome!


  
## Documentation

[React Js](https://reactjs.org/docs/getting-started.html)

[React Router DOM](https://reactrouter.com/web/guides/quick-start)

[React Top Loading Bar](https://www.npmjs.com/package/react-top-loading-bar)

[Node Js](https://nodejs.org/en/docs/)

[NPM](https://docs.npmjs.com/)


## I hope you may like this website...
### Happy Coding!
  