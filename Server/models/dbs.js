const mongoose = require('mongoose');

// Define the User Order Schema
const userOrderSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    quantity: { type: Number, required: true },
    cardNumber: { type: String, required: true },
    expirationDate: { type: String, required: true },
    cvv: { type: String, required: true },
    orderDate: { type: Date, default: Date.now },
    productName: { type: String, required: true },
    productId: { type: Number, required: true },
    productPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true }
});

// Create the model from the schema
const UserOrder = mongoose.model('UserOrder', userOrderSchema);

module.exports = UserOrder;
