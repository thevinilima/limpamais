const Diarista = require('../services/Diarista');

exports.rateDiarista = async (req, res) => {
  try {
    const createdRating = await Diarista.rate(req.body);
    res.json(createdRating);
  } catch (err) {
    res.status(400).json(err);
  }
};
