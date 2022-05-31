const { createPool } = require("mysql");
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "bird_survey_bangladesh",
})

pool.getConnection((err) => {
    if (err) {
        console.log("Error to connecting DB")
    } else {
        console.log("connected to DB...")
    }
})

const executeQuery = (query, araparams) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, araparams, (err, data) => {
                if (err) {
                    console.log("Error is execuationg the query")
                    reject(err)
                }
                resolve(data)
            })
        } catch (err) {
            reject(err)
        }
    })
}

module.exports = { executeQuery };