import express from "express";
import { getUsers, Register, Login, Logout, deleteUser } from "../controllers/users.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/refreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.delete('/deleteuser', deleteUser);
router.get("/tetsi", function(req, res) {
    res.send("konaapa konaa")
})

export default router;