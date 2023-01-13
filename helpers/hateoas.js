require("dotenv").config({ path: "./.env" });

const formatHATEOAS = async (jewel, queryStrings) => {
  const domain = process.env.DOMAIN;
  const PORT = process.env.PORT;
  const { limits, page } = queryStrings;

  const offset = (page - 1) * limits;

  try {
    const results = jewel.map((j) => {
      return {
        name: j.nombre,
        href: `${domain}:${PORT}/joyas/${j.id}`,
      };
    });
    const total = jewel.length;

    const HATEOAS = {
      total,
      prev: `${domain}:${PORT}?page=${offset - 2}`,
      next: `${domain}:${PORT}?page=${offset}`,
      results,
    };
    return HATEOAS;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { formatHATEOAS };
