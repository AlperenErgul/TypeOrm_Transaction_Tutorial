# Transaction Management with Nest.js and TypeORM

This project is an example application that demonstrates step-by-step how to manage transactions using **Nest.js** and **TypeORM**. In this project, a user and user details are saved to the database simultaneously, and if any issue occurs, the transactions are rolled back.

## Project Overview

This project focuses on transaction operations and includes the following features:
- Saving user and user details to the database
- Performing all operations atomically (with a transaction)
- Rolling back all operations if any step fails

### Technologies Used

- **Nest.js**: Backend framework
- **TypeORM**: Object-Relational Mapping (ORM) tool
- **PostgreSQL**: Database management system (other databases are also supported)
- **Node.js**: JavaScript runtime environment

## Setup

Follow these steps to run the project:

### 1. Clone the repository

```bash
git clone https://github.com/AlperenErgul/transaction-tutorial.git

cd transaction-tutorial
npm install

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=your-username
DATABASE_PASSWORD=your-password
DATABASE_NAME=your-database

npm run start:dev

```

## Medium Article
To learn more about this project and read the article I wrote on transaction management, you can visit my Medium article here:  https://medium.com/@alperenergul49/nest-js-ile-typeorm-transaction-y%C3%B6netimi-ad%C4%B1m-ad%C4%B1m-rehber-c71669893c23

## Contributing
If you'd like to contribute to the project, please send a pull request or open an issue.
