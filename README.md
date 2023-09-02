# MyUdemy Reactjs Frontend

This README provides an overview of the ReactJS frontend repository for my web application. This application uses Django as the backend API, PostgreSQL as the database, and is hosted on Vercel. Additionally, it incorporates Firebase Authentication for user management and supports CRUD operations for a shopping cart.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Setup](#setup)
4. [Project Structure](#project-structure)
5. [Deployment](#deployment)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction

This repository houses the frontend codebase of your web application. It's built with ReactJS, a popular JavaScript library for building user interfaces. The frontend communicates with a Django backend API, which handles data storage and retrieval in a PostgreSQL database. Firebase Authentication is integrated for user authentication, and the application allows users to perform CRUD (Create, Read, Update, Delete) operations on their shopping carts.

## Features

### 1. Firebase Authentication

- Users can sign up, log in, and log out securely using Firebase Authentication.
- Protects routes to ensure that only authenticated users can access certain parts of the application.
- User profile management features like updating passwords and email addresses.

### 2. Cart CRUD Operations

- Users can view their shopping cart, which displays the items they have added.
- Add items to the cart, update quantities, and remove items.
- Cart data is synchronized with the backend to ensure consistency.

### 3. Integration with Django Backend

- Communicates with a Django backend API to fetch and update data.
- Implements RESTful API calls to perform CRUD operations on resources such as products and user carts.

### 4. PostgreSQL Database

- Utilizes PostgreSQL as the backend database for storing product and user cart data.

### 5. Hosting on Vercel

- The frontend application is hosted on Vercel, a popular cloud platform for frontend deployments.
- Vercel offers scalability, reliability, and ease of deployment.

## Setup

To set up this project locally, follow these steps:

1. **Clone the Repository:** Start by cloning this repository to your local machine using `git clone`.

2. **Install Dependencies:** Navigate to the project's root directory and run `npm install` to install all the required dependencies.

3. **Configure Environment Variables:** Create a `.env` file in the project's root directory to store environment-specific variables such as API endpoints and Firebase configurations.

4. **Run the Application:** Use `npm start` to start the development server. The application will be accessible at `http://localhost:3000`.

## Project Structure

Here's an overview of the project's directory structure:

- `src/`: Contains the source code of the ReactJS application.
  - `components/`: Reusable React components.
  - `containers/`: Higher-level components that manage state and data fetching.
  - `contexts/`: Context providers for managing global state.
  - `services/`: Service functions for interacting with the Django backend.
  - `styles/`: CSS and styling files.
  - `App.js`: The main application component.
- `public/`: Static assets and HTML template files.
- `firebase/`: Firebase configuration and authentication setup.
- `package.json`: Lists project dependencies and scripts.

## Deployment

This ReactJS frontend is hosted on Vercel. To deploy the application to your Vercel account, you can follow the Vercel deployment documentation.
Deployment Link : "https://my-udemy-black.vercel.app/"

## Contributing

Contributions to this project are welcome. If you find issues or have ideas for improvements, please open a GitHub issue or create a pull request following our contribution guidelines.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use it for your own purposes or contribute to make it better!

---

Thank you for using this README file for your ReactJS frontend repository. If you have any questions or need further assistance, please don't hesitate to reach out. Good luck with your project!
