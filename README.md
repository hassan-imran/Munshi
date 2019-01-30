# Munshi


This is a concept Inventory Management System (IMS) application.

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


************

## Default user

admin@abc.com ---Username

admin123 ---Password

The admin@abc.com user has the most sample data in it


Sign up using any random email combination (provided that it is a valid format for an email) and password


**********************************************

## Security

The application is designed with some built-in security features.

You cannot access home/index.html or home/products.html or any other html page without authorized access


Upon signup or sign in the dashboard page takes  a little long to load. The reason behind this is the security check and the API calls for the user data from firebase.

*********

## Low Stock

If the stock is lower than 10 then it appears in red indicating that  the stock is low and should be topped up again
