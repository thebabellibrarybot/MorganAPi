const db = require("../models");

// create main model
const Folio = db.folios;
const Tomb = db.tombs;

// view single tomb

const getSingleTomb = async (req, res) => {

    const id = req.params.id;

    try {
        const tomb = await Tomb.findOne({ where: { id: id } });
        res.status(200).send(tomb);
    } catch (err) {
        res.status(500).send({ message: err.message || "Error retrieving tomb with id=" + id });
    }
}

// view all tombs

const getAllTombs = async (req, res) => {
    
    console.log("getAllTombs");

    try {
        const tombs = await Tomb.findAll({});
        res.status(200).send(tombs);
    } catch (err) {
        res.status(500).send({ message: err.message || "Error retrieving tombs" });
    }
}

module.exports = {
    getSingleTomb,
    getAllTombs
};