import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const rateRes = async (req, res) => {
  try {
    const { user_id, res_id, amount } = req.body;
    await model.rate_res.create({
      user_id,
      res_id,
      amount,
      date_rate: new Date(),
    });
    return res.status(201).json({ message: "Rate Restaurant successfully" });
  } catch (error) {
    return res.status(500).json({ message: "error API rate res" });
  }
};

const getRateByRes = async (req, res) => {
  try {
    let { res_id } = req.params;
    const data = await model.rate_res.findAll({
      where: {
        res_id,
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "error API rate res" });
  }
};
const getRateByUser = async (req, res) => {
  try {
    let { user_id } = req.params;
    const data = await model.rate_res.findAll({
      where: {
        user_id,
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "error API rate res" });
  }
};
export { rateRes, getRateByRes, getRateByUser };
