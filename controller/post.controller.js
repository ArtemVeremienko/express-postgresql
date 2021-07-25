const db = require("../db");

class PostController {
    async createPost(req, res) {
        const { title, content, userId } = req.body;

        try {
            const newPost = await db.query(
                "INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *",
                [title, content, userId]
            );
            res.json(newPost.rows[0]);
        } catch (error) {
            console.log(error);
            res.json(error.message);
        }
    }

    async getPostByUser(req, res) {
        const { id } = req.query;

        try {
            const posts = await db.query(
                "SELECT * from post where user_id = $1",
                [id]
            );
            res.json(posts.rows[0]);
        } catch (error) {
            console.log(error);
            res.json(error.message);
        }
    }
}

module.exports = new PostController();
