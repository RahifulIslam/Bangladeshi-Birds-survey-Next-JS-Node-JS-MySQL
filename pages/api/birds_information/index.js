import nc from "next-connect";
import { getsAllBirdsInformation, createBirdsInformation } from "../../../controller/birds_information/birds_information"
// const multer = require('multer')
// const path = require('path')

// const storage = multer.diskStorage({
//     destination: '../../../public/birds_pic',
//     filename: (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
//     }
// })

// const upload = multer({ storage: storage })
// upload.single('image'),

const handler = nc();
handler.get(getsAllBirdsInformation);
handler.post(createBirdsInformation);

export default handler;