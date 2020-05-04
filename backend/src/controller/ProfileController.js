const connection = require("../database/connection")

module.exports = {
    async list(request, response){

        const id = request.headers.authorization;

        const casos = await connection("incidents")
        .where("ong_id", id)
        .select("*")

        return response.json(casos);
    }

}