# How to run the app

Run `npm install` to install packages, the run `npm start` to start the webpack dev server.
To build simply `npm run build` this will create a build directory.
To watch changes only in ts simply `npm run watch` this will create a dist directory.

# The core domain model

In this application, we want to manage collections of media of different types:

- Books
- Movies
- More, if you want

Each media type will have specific characteristics. For example, movies will have the following:

- A duration
- A director

Whereas books will have the following:

- The number of pages
- An author

Next to that, all media types will also have common characteristics such as the following:

- A unique identifier
- A name
- A description
- A picture location
- A genre

Building MediaMan has many TypeScript features,such as the following:

- Type definitions (typings)
- String literal types
- Union and intersection types
- Decorators
- The any special type
- The keyof index type query operator
- Mapped types

Since this is offline web application we use IndexDB to store the state.

The list of Library and API used.

- localForage
- Promise API
- class-transformer to serialize and deserialize data
