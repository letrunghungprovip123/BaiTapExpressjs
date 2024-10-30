import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const likeRes = async (req, res) => {
  try {
    let { user_id, res_id } = req.body;
    await model.like_res.create({
      user_id,
      res_id,
      date_like: new Date(),
    });
    return res.status(201).json({ message: "Like Restaurant successfully" });
  } catch (error) {
    return res.status(500).json({ message: "error API" });
  }
};

const unlikeRes = async (req, res) => {
  try {
    let { like_res_id } = req.params;
    await model.like_res.destroy({
      where: {
        like_res_id,
      },
    });
    return res.status(200).json({ message: "Unlike Restaurant successfully" });
  } catch (error) {
    return res.status(500).json({ message: "error API" });
  }
};

const getLikeByRes = async (req, res) => {
  try {
    let { res_id } = req.params;
    const data = await model.like_res.findAll({
      where: {
        res_id,
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "error API" });
  }
};

const getLikeByUser = async (req, res) => {
  try {
    let { user_id } = req.params;
    const data = await model.like_res.findAll({
      where: {
        user_id,
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "error API" });
  }
};

export { likeRes, unlikeRes, getLikeByRes, getLikeByUser };
