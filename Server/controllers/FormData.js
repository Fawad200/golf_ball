const UserOrder = require('../models/dbs'); // Ensure this path is correct

exports.create = async (req, res) => {
    try {
        // Log the received data
        console.log('Order Data Received:', req.body);

        // Extract orderData from the request body
        const orderData = req.body.orderData;

        // Create a new order in the database
        const newOrder = new UserOrder(orderData);
        const result = await newOrder.save();

        // Respond with a success message and the created order
        res.status(201).json({ message: 'Order placed successfully', order: result });
    } catch (error) {
        // Log the error and respond with a failure message
        console.error('Error saving order:', error);
        res.status(500).json({ error: 'Failed to place order' });
    }

};

exports.getAll = async (req, res) => {
    try {
        // Fetch all user orders from the database
        const orders = await UserOrder.find();

        // Send the orders in the response as a valid JSON object
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error retrieving orders:', error);
        res.status(500).json({ error: 'Failed to retrieve orders' });
    }
};