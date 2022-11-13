import axios from 'axios';
import { getSession } from 'next-auth/react';
import User from '../../../../models/User';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || !session.user.isAdmin) {
    return res.status(401).send('admin signin required');
  }
  // await db.connect();
  // const users = await User.find({});
  // await db.disconnect();

  const result = await axios.post("http://localhost:8000/user/get-all.php")
  const users = result.data.users


  res.send(users);


};

export default handler;
