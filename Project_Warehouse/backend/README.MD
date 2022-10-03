# Backend Side Programming

## Product Side

- Route has a basic schema
- it will have a regular schema
- but looking up a product using mongoDB object id is a mess, thus I built the program such a way that you can look up products using their Serial Number
- Serial Number of a product is Alpha Numeric ID - is unique to each product. Serial Number has all the features of the product. Basically if you know what product you are looking for then you can just follow a simple formula, and you can get the serial number of the product
- Deleting and Updating a product is not advised, but if you want to delete and update the product then we will ask you to do it using the MongoDB Object ID
- The reason for that is Updating a product can mess up the Serial Number, this is why it is advised not to update products, but if you insisit on updating the product then you also have to update the Serial Number
- Using MongoDB object id for deletion is an extra measure of assurance that you actually want to delete the product, as you have to go out of your way to look up the object id.


### Serial Number of Product

  Serial ID explained for iPhones 14 Pro Max Black Colored with 512 gb of storage
  
  Every product will have a unique serial ID
  Serial ID is a combination of the physical specs of the product
  In our example we have AMP1411BLK512FT0000
  A - Apple
  MP - Mobile Phone
  14 - Product Number (this will be same for all the iPhone 14s)
  11 - Pro Max (00-Base 14; 01-Base 14 Max; 10-Pro 14; 11-Pro 14 Max)
  BLk - Color Black
  512 - Storage
  F - Not Refurbished
  T - is Cellular
  000 - No carrier lock (000-No Lock, 001-ATT, 010-Verizon, 011-Sprint, 100-TMobile)
 