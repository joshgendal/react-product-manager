const index = (req, res) => {
  console.log("GETS HERE");
  res.json({
    message: "Hello World",
  });
};

const createPerson = (req, res) => {
  const { firstName, lastName } = req.body;
  Person.create({ firstName, lastName })
    .then((person) => Response.json(person))
    .catch((err) => res.json(err));
};

module.exports = {
  index,
  createPerson,
};
