# Ditto Jobs

## Features

### Tech Used

- **Next.js** - Minimalistic framework for server-rendered React applications.
- **Typescript** - Superset of JavaScript which primarily provides optional static typing, classes and interfaces.
- **Redux** - A predictable state container for JavaScript apps.
- **Express.js**- A minimal and flexible Node.js web application framework that handles server-side rendering and integrates with Next.js.
- **Built-in Project CLI**- Create pages, components, actions, reducers with one command by using built-in cli.
- **Sass/Scss** - CSS preprocessor, which adds special features such as variables, nested rules and mixins (sometimes referred to as syntactic sugar) into regular CSS.
- **Docker** - A tool designed to make it easier to create, deploy, and run applications by using containers.
- **Babel** - The compiler for next generation JavaScript.
- **ESLint** - The pluggable linting utility.
- **Reverse Proxy** - Lightweight server for proxying API requests.
- **Bundler Analyzer** - Visualize the size of webpack output files with an interactive zoomable treemap.
- **Jest** - Javascript testing framework , created by developers who created React.
- **React Testing Library** - Simple and complete React DOM testing utilities that encourage good testing practices.
- **next-runtime-dotenv** - Expose environment variables to the runtime config of Next.js

- **Storybook** - An open source tool for developing UI components in isolation for React.
- **Bootstrap** - The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites.
  <br/>

## Requirements 

- **Node 18** - We use NVM to manage our Node versions

## Setup 
#### Dev Mode
- **yarn install**
- **yarn dev**
#### Build Mode
- **yarn install**
- **yarn build**
- **yarn start**


## Testing

Guidelines for our developers:

<br />

- Try to test functionality, not implementation. Make your tests interact with components as a user would, not as a developer would. This means you’re trying to do more think of things like “what would a user see” or “if a user clicks a button a modal comes up” rather than “make sure this state is correct” or “ensure this library is called”. This isn’t a rule; sometimes you need to test those things too for assurance the app is working correctly. Use your best judgment.


- Every UI I’ve ever worked on changes a lot. Try to not unnecessarily spin your wheels on things that aren’t important and are likely to change.

* In general when I encounter a bug that is important for me to go back and fix, I’ll write a test that would have caught that bug. Actually what I’ll do is before I fix it, I’ll write the test that fails. That way I fix it I’ll know I won’t regress back there.

- Ask yourself what’s important about your app and spend your time testing that. Ask yourself “if a user couldn’t do X then the app is worthless” sort of questions and test those more thoroughly. If a user can’t change themes then it’s probably not the end of the world so you can spend less time testing that but if a user can’t log in then the app is worthless. Test that.
