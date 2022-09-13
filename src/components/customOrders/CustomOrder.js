//Module for displaying data about a single customOrder:
//1. JSX for customers and employees to see all data in the order
//  a. fetch APT from customOrders
//2. Button for employees only that provides user(employee) ability to mark order as being baked.
//  a. PUT API state changes to customOrders
//3. Button for customers only that provides user(customer) ability to delete the order.
//  a. Button will appear if order is in state of not being baked.
//  b. If order is being baked, text will appear that order is being baked and to contact "Caked by Kimberly" by phone or email with issues.
//  c. POST API state changes to customOrders