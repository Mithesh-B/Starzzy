# Starzzy - E-commerce Clothing Website
Starzzy is an e-commerce website for buying clothing and accessories. It is built with React.js, Redux Toolkit for state management, SCSS for styling, Strapi CMS for creating REST API and its endpoints to manage content, and Stripe API for payment processing.

![screencapture-localhost-3000-product-1-2023-03-02-11_34_23](https://user-images.githubusercontent.com/115478939/222347333-2933ce03-86bf-4240-bf3a-80951f87bd22.png)

## Table of Contents
1. Features
2. Installation
3. Usage
4. Technologies Used
5. Contributing
6. License

## Features
- Browse products by category.
- A clean minimal modern UI. (more screenshots below)
- Add products to cart.
- Select quantity.
- Remove products from cart.
- Products page with option to filter by content and price.
- Checkout with Stripe payment processing.
- Manage content with Strapi CMS.

## Installation
1. Clone the repository to your local machine using the command:
```git clone https://github.com/Mithesh-B/Starzzy.git```
or download the .zip extension directly.
2. Install the required dependencies for both client and api folders by running the command:
```npm install```
3. Once done installing all the dependencies, run comand: ```npm start``` in client folder. This will start the React app on http://localhost:3000.
4. To connect backend, create a .env file in client/src and paste the following 
```
REACT_APP_API_TOKEN = <paste your strapi token> 
REACT_APP_API_URL = http://localhost:1337/api 
REACT_APP_UPLOAD_URL = http://localhost:1337
```
replace ```<paste your strapi token>``` with the token you get from your strapi admin panel. Read Strapi docs on how to setup a local strapi environment.
5. After setting up local strapi environment, go to api/src and add 
```
STRIPE_KEY=<paste your stripe secret key>
CLIENT_URL=http://localhost:3000
``` 
to the present .env file. To obtain stripe API key, head to stripe docs.
6. Paste your public stripe API key in clients/src/components/cart/cart.jsx/```loadStripe('<enter your public key>')```. Replace ```<enter your public key>``` with your key.
7. Finally run command: ```npm run develop``` in api folder to start your strapi server. 



## Technologies Used
- React.js
- Redux Toolkit
- SCSS
- Strapi CMS
- Stripe API
- Material UI
- React Router

## License
This project is licensed under the MIT License. See the LICENSE file for details.

![screencapture-localhost-3000-product-1-2023-03-02-11_49_49](https://user-images.githubusercontent.com/115478939/222347310-64250887-71ef-4142-bc37-a8d825089f5e.png)

![screencapture-localhost-3000-2023-03-01-18_00_46](https://user-images.githubusercontent.com/115478939/222147010-6b56eda1-a394-4d3f-9fe6-96e8c88b48d1.png)


