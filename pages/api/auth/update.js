import { getSession } from 'next-auth/react';
import bcryptjs from 'bcryptjs';
import User from '../../../models/User';
import db from '../../../utils/db';
import axios from 'axios';

async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(400).send({ message: `${req.method} not supported` });
  }

  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send({ message: 'signin required' });
  }

  const { user } = session;
  const { password, fname, lname, mobile, city, state, pincode } = req.body;

  if (
    !email ||
    !email.includes('@') ||
    !password ||
    (password && password.trim().length < 5) ||
    !fname ||
    !lname ||
    !mobile ||
    !city ||
    !state ||
    !pincode
  ) {
    res.status(422).json({
      message: 'Validation error',
    });
    return;
  }

  let isAdmin = false;
  if(user.isAdmin) {
    isAdmin = true;
  }

  const result = await axios.post("http://localhost:8000/user/update-user.php", {
    _id: user._id,
    isAdmin,
    hashed_password: bcryptjs.hashSync(password), 
    fname, 
    lname, 
    mobile, 
    city, 
    state, 
    pincode
  })

  // await db.connect();
  // const toUpdateUser = await User.findById(user._id);
  // toUpdateUser.name = name;
  // toUpdateUser.email = email;

  // if (password) {
  //   toUpdateUser.password = bcryptjs.hashSync(password);
  // }

  // await toUpdateUser.save();
  // await db.disconnect();
  res.send({
    message: result.data.message,
  });
}

export default handler;
