const db = require("../db");

class UserController {
    async createUser(req, res) {
        const { name, surname } = req.body;
        try {
            const newPerson = await db.query(
                "INSERT INTO person (name, surname) values ($1, $2) RETURNING *",
                [name, surname]
            );
            res.json(newPerson.rows[0]);
        } catch (error) {
            console.log(error);
            res.json(error.message);
        }
    }

    async getUsers(req, res) {
        try {
            const users = await db.query("SELECT * FROM person");
            res.json(users.rows);
        } catch (error) {
            console.log(error);
            res.json(error.message);
        }
    }

    async getUser(req, res) {
        const { id } = req.params;

        try {
            const user = await db.query("SELECT * FROM person WHERE id = $1", [
                id,
            ]);
            res.json(user.rows[0]);
        } catch (error) {
            console.log(error);
            res.json(error.message);
        }
    }

    async updateUser(req, res) {
        const { id, name, surname } = req.body;

        try {
            const user = await db.query(
                "UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *",
                [name, surname, id]
            );
            res.json(user.rows[0]);
        } catch (error) {
            console.log(error);
            res.json(error.message);
        }
    }

    async deleteUser(req, res) {
        const { id } = req.params;

        try {
            const user = await db.query("DELETE FROM person WHERE id = $1", [
                id,
            ]);
            res.json(user.rows[0]);
        } catch (error) {
            console.log(error);
            res.json(error.message);
        }
    }
}

module.exports = new UserController();
