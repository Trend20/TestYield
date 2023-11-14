const Test = require("../models/testModel");

exports.addCode = async (res, res) => {
  const { componentName, componentCode } = req.body;
  try {
    // Save the component data to the database
    const savedComponent = await Test.create({
      componentName,
      componentCode,
    });

    // Further logic for test generation (omitted for brevity)
    res.status(201).json(savedComponent);
  } catch (error) {
    console.error("Error saving component:", error.message);
    res.status(500).send(error.message);
  }
};
