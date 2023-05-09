# Members-only

This project is part of <a href='https://www.theodinproject.com/lessons/nodejs-members-only'>TheOdinProject</a>.

In this project I'll be building an web app where users can write anonymous posts. Users can get a membership if they fill in the secret key ("numero"). Only members can see the author of a post. 

## Clubhouse

An exclusive clubhouse where members can write anonymous posts and outsiders can only wonder who wrote it.

## Features

The web app has Messages and Users. The web app allows you to use all the CRUD operations. Create, Read, Update and Delete.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from the official website (https://nodejs.org/en/).

You will also need to have MongoDb as database, you can download and install mongoDb (atlas) from the official website (https://www.mongodb.com/).

### Installing

1. Clone the repository to your local machine

```sh
git clone https://github.com/Noliqe/members-only.git
```

2. Install NPM packages

```sh
npm install
```

3. Create a .env file in the root directory of the project and add your mongoDB URL:

    For example *mongoDBKey="mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/Inventory?retryWrites=true&w=majority"*

    mongoDBKey="Insert your mongodb url here"

5. Run the app

```sh
npm start
```

The application will now be running on http://localhost:3000.