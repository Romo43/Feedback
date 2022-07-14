# Feedback
This program is developed with Express.js and MongoDB in order to provide a Feedback service, either to evaluate a company, a product or a service.

## Install
```bash
npm install
```

## Environment variables
To run the program it is necessary to create an .env file and save the environment variables as shown in the [.example.env](https://github.com/Romo43/Feedback/blob/main/.example.env) file.

### Environment Variables (MongoDB Atlas)
* MONGO_USER = Username that has access
* MONGO_PASSWORD = User password
* MONGO_CLUSTER = Cluster name
* MONGO_AUTH = Authentication source
* MONGO_NAME = Database name

## Setup
Before executing the program, it is necessary to select the environment in which the program will run, either in production or development.

### Production
```bash
npm run start
```

### Development
```bash
npm run dev
```