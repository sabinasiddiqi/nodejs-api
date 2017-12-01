# Architecture

## Server & router: nodejs & express
## Database: MongoDB
## Other helpers: mongoose, body-parser, node-restful, chai, chai-http

- I chose to use nodejs with mongodb because of the quick ramp up, my familiarity with javascript and my lack of familiarity with apis and dbs.
- I imported the data from the provided csv directly into the database as a collection.
- The import script stores all currency fields as numbers to allow for easy query comparisons using node-restful.

# Assumptions

There were no security precautions taken and the data was assumed to be valid.
There was no data capping but this might be necessary depending on how much data needs to be processed to avoid overloading the server.
For large data sizes sharding (distributing the storage across multiple servers) is recommended in mongodb.

# STEPS 

install node and homebrew

## Install mongodb:
```sh
brew update
brew install mongodb
npm install
```
## Setup db folder:
```sh
$ mkdir /data
$ cd /data
$ mkdir db
$ check permissions
$ sudo chown -R `id -un` /data/db
```
## To start api
Run mongo db deamon
```sh
mongod
```

## Import data and run nodejs
```sh
$ cd nodejs-api
$ ./importScript.sh
$ npm install
$ npm start
```
Go to localhost://3000/api/providers to access api.

## to run automated tests
```sh
$ npm test
```
