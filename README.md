# Feedback
This program is developed with Express.js and MongoDB in order to provide a Feedback service, either to evaluate a company, a product or a service.

## Environment variables
To run the program it is necessary to create an .env file and save the environment variables as shown in the .example.env file.

### Cloud Environment Variables (MongoDB Atlas)
* MONGO_NAME
* MONGO_PORT
* MONGO_PASSWORD 
* MONGO_USER

### Local environment variables (MongoDB)
* MONGO_NAME

## Setup
Before executing the program, it is necessary to select the environment in which the program will run, either in production or development and select the database that you want to use, either in the cloud or locally

### Production
```bash
npm run start
```
### Development

#### In the cloud
```bash
npm run dev:prod
```
#### Locally
```bash
npm run dev:local
```
