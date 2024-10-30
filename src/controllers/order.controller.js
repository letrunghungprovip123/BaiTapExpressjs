import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const orderFood = async (req, res) => {
  try {
    let { user_id, food_id, amount, arr_sub_id } = req.body;
    await model.orders.create({
      user_id,
      food_id,
      amount,
      arr_sub_id,
    });
    return res.status(201).json({ message: "Order Food successfully" });
  } catch (error) {
    return res.status(500).json({ message: "error API order" });
  }
};
export { orderFood };
