const pool = require("../config/pool");
const format = requiere("pg-format");

const getAllJewels = async ({ limits = 6, page = 1, order_by = "id_ASC" }) => {
  const [field, order] = order_by.split("_");
  const offset = (page - 1) * limits;
  const formattedQuery = format(
    "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s",
    field,
    order,
    limits,
    offset
  );

  const { rows: jewels } = await pool.query(formattedQuery);
  return jewels;
};

const getFilteredJewels = async ({
  price_min,
  price_max,
  category,
  metal,
}) => {};

module.exports = {
  getAllJewels,
  getFilteredJewels,
};
