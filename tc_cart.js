"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: James Volino
   Date:   1/6/20
   
   Filename: tc_cart.js
	
*/

//Definf the variable orderTotal
var orderTotal = 0;

//Display the elements of the variable cartHTML
var cartHTML = "<table>";
cartHTML += "<tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";



//Loop through the the array of items
for (var i = 0; i < item.length; i++) {
   cartHTML += "<tr>";
   cartHTML += "<td>" + "<img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
   cartHTML += "<td>" + itemDescription[i] + "</td>";
   cartHTML += "<td>$" + itemPrice[i] + "</td>";
   cartHTML += "<td>" + itemQty[i] + "</td>";
   
   //Calculate the cost of the items ordered
   var itemCost = itemPrice[i]*itemQty[i];
   cartHTML += "<td>$" + itemCost + "</td>";
   cartHTML += "</tr>";

   // Run the total cost of the items  
   orderTotal += itemCost;
}

//Add a table displaying totalCost
cartHTML += "<tr><td colspan='4'>Subtotal</td>";
cartHTML += "<td>$" + orderTotal + "</td></tr>";

cartHTML += "</table>";

// get the element for cartHTML
document.getElementById("cart").innerHTML = cartHTML;

















