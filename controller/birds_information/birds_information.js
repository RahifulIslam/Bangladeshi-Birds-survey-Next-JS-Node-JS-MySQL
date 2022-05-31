import { executeQuery } from "../../config/db"
const getsAllBirdsInformation = async (req, res) => {
    try {
        let birdsData = await executeQuery('SELECT * FROM BIRDS_INFORMATION', [])
        res.send(birdsData)
    } catch (err) {
        res.status(500).json(err)
    }

};
// req.file.filename
const createBirdsInformation = async (req, res) => {
    console.log("upload input are:", req.body)
    try {
        let insertBirdsData = await executeQuery(
            `INSERT INTO BIRDS_INFORMATION(NAME_OF_BIRDS, ORDER_OF_BIRDS, FAMILY_OF_BIRDS, SIZE_OF_BIRDS, COLOR_OF_BIRDS, TOTAL_COUNTS_OF_BIRDS, IMAGE_OF_BIRDS)
            VALUES(?, ?, ?, ?, ?, ?, ?)`,
            [req.body.name, req.body.order, req.body.family, req.body.size, req.body.color,
            req.body.total, req.body.image]
        );
        res.status(201).json(insertBirdsData)
    } catch (err) {
        res.status(400).json(err)
    }

};

export { getsAllBirdsInformation, createBirdsInformation };