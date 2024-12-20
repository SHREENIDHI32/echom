import userModel from "../models/userModel.js";

// Add to user cart
const addToCart = async (req, res) => {
   try {
      // Find user by ID
      let userData = await userModel.findById(req.body.userId);

      // Ensure cartData exists
      let cartData = userData.cartData || {}; // Default to an empty object if undefined

      // Add item to cart
      if (!cartData[req.body.itemId]) {
         cartData[req.body.itemId] = 1;
      } else {
         cartData[req.body.itemId] += 1;
      }

      // Update user's cart in the database
      await userModel.findByIdAndUpdate(req.body.userId, { cartData });

      res.json({ success: true, message: "Added To Cart" });
   } catch (error) {
      console.error("Error in addToCart:", error);
      res.status(500).json({ success: false, message: "Error adding to cart" });
   }
};

// Remove food from user cart
const removeFromCart = async (req, res) => {
   try {
      // Find user by ID
      let userData = await userModel.findById(req.body.userId);

      // Ensure cartData exists
      let cartData = userData.cartData || {};

      // Remove item from cart (if exists)
      if (cartData[req.body.itemId] > 0) {
         cartData[req.body.itemId] -= 1;

         // Remove item from cart if quantity reaches 0
         if (cartData[req.body.itemId] === 0) {
            delete cartData[req.body.itemId];
         }
      }

      // Update user's cart in the database
      await userModel.findByIdAndUpdate(req.body.userId, { cartData });

      res.json({ success: true, message: "Removed From Cart" });
   } catch (error) {
      console.error("Error in removeFromCart:", error);
      res.status(500).json({ success: false, message: "Error removing from cart" });
   }
};

// Get user cart
const getCart = async (req, res) => {
   try {
      // Find user by ID
      let userData = await userModel.findById(req.body.userId);

      // Ensure cartData exists
      let cartData = userData.cartData || {};

      res.json({ success: true, cartData });
   } catch (error) {
      console.error("Error in getCart:", error);
      res.status(500).json({ success: false, message: "Error fetching cart" });
   }
};

export { addToCart, removeFromCart, getCart };
