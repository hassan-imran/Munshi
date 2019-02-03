# Munshi


This is a concept Inventory Management System (IMS) web-based application using HTML, CSS, JS, BootStrap, Firebase RealTime Database.

The project is live for testing. Find the links and details below.

*****

## Purpose

The purpose of it is to 

1. Provide a sign up login & maintain each user's data separately

2. Features adding products with details such as 
	product name
	barcode
	manufacturer
	cost price
	selling price
	units sold
	units in stock
	discount
	description

3. Adding details of sales & updating stock

4. Adding Stores and their location and details

5. Viewing Complete inventory / stock

**********************************************

## Security

The application is designed with some built-in security features.

You cannot access home/index.html or home/products.html or any other html page without authorized access

Try visiting any of the webpages in [this directory](home) on the hosted link.
(For example the [dashboard page](https://munshi-ims.firebaseapp.com/home/index.html) at https://munshi-ims.firebaseapp.com/home/index.html)


Upon signup or sign in the dashboard page takes  a little long to load. The reason behind this is the security check and the API calls for the user data from firebase.

*********

## Responsive

The project is built upon the latest stable version of bootstrap (v4.2.1).

It uses basic and light-weight bootstrap components to impart awesomeness and responsiveness to the webapp.

***

## Low Stock

If the stock is lower than 10 then it appears in red indicating that  the stock is low and should be topped up again

********

## Data-Structure & Database

This project uses Firebase realtime database.

Here is a [sample](data-structure.json) about how the data is strucured in the database


*********

## The Project is live at

[munshi-ims](https://munshi-ims.firebaseapp.com)

************

## Default user

admin@abc.com ---Username

admin123 ---Password

The admin@abc.com user has the most sample data in it


Sign up using any random email combination (provided that it is a valid format for an email) and password

*****

## Project is still developing

We are still working on this project to make sub-inventories of each store that can be managed individually
