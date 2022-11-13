import axios from "axios";
import bcryptjs from "bcryptjs";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const { username, email, password, fname, lname, mobile, city, state, pincode } = req.body;

  if (
    !username ||
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 5 ||
    !fname ||
    !lname ||
    !mobile ||
    !city ||
    !state ||
    !pincode
  ) {
    res.status(422).json({
      message: "Validation error",
    });
    return;
  }



  const result = await axios.post("http://localhost:8000/user/get-user.php", {
    username: username
  });

  // console.log(result.data.success);


  if (result.data.success) {

    res.status(422).json({ message: "User exists already!" });

    return;

  }

  const data = await axios.post("http://localhost:8000/user/add-user.php", {
    username: username,
    email: email,
    hashed_password: bcryptjs.hashSync(password),
    isAdmin: false
  })

  const user = data.data.user;
  // console.log(user);


  res.status(201).send({
    message: "Created user!",
    _id: user._id,
    username: user.username,
    email: user.email,
    isAdmin: user.isAdmin,
  });
}

export default handler;
