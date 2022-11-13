import axios from "axios";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
    if(req.method !== "GET") {
        return;
    }
    const session = await getSession({ req });
    if (!session) {
        return res.status(401).send('signin required');
    }
    const _id = req.query.id;
    const result = await axios.post("http://localhost:8000/user/get-user-by-id.php", {
            _id
        })
    const user = result.data.user;
    res.send(user);
};

export default handler;
