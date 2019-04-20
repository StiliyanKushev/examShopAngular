# The app

ExamShop is a simple shopping app that has all of the functionality that a shopping site needs.

## Idea
At the start, the user is provided only with a home view,that shows the last 2 products that are added to the shop. The shop view that has the option to buy a product, but redirects to the login page. And the login page itself, as well as a register page.

A logged-in user can sell or buy products. He can also edit and delete his own products. If the user goes into his inventory, he can see all products that he is selling, sold or bought.

Admins can do all thing as normal logged-in users, however they can edit and delete everyone's products if they feel like it.

## Basic file structure (only the important parts)
```
├── core			       // the core module that holds general functionality
|
├── forms-pages				// the forms-pages module holds functionality related to forms
|   ├── login				// (example) the login 
|   ├── register			// and register components
|   └── shared				// (example) the forms-service.ts
|
├── products-listing		        // the products-listing module holds functionality related to products
|   ├── home		
|   ├── shop		
|   └── inventory			
└── app.module.ts
```

## Global State
The global state holds the user data, so it can be accessed anywhere

I am using a global state service that keeps all the important data in itself with Redux.

## Security and Validation
The app validates everything that the user is doing, and the backend logic will **NOT** let anyone who is not friendly to do harmful things. 

In case of an error, or if someone purposely tries to "cheat" or "break" the app, the backend will respond with a meaningful error message that the client/angular will receive and display with the help of [ngx-toastr](https://www.npmjs.com/package/ngx-toastr) library.

## Modules

The app split in 4 modules
1. **Core Module** - *Holds some general functionality.*.
2. **Forms-Pages Module** - *Holds all things related to forms (forms components,services,reslovers etc)*
3. **Products-Listing Module** - *Holds all things related to products (forms components,services,reslovers etc)*
4. **App-Routing Module** - *basically holds the routes of the angular app and aplies the nessesary resolvers and Guards*

## Auth Guard
Basically just checks if the user is authenticated or not. Based on that the app will decide wether or not to give the user access to the selected url or to redirect him to another page.

## Routes

The app split in 3 parts
1. **Public** - *Anyone can access it*.
2. **Private** - *Only users can access it.*
3. **Administrative** - *Admins have full control over the things in it.*

## Services
1. #### Form Service 
- handles the input tags on change, and on submit of a form. Also holds functionality for every form in the app. ex (login,register,sell,edit etc)
2. #### Product Service 
- has functions for making a fetch to the server and doing CRUD operations. 
3. #### Toast Response Service
- handles the response body after a fetch and "toasts" the app with the provided by the backend message. It also calls a callback function if the fetch was successful.
