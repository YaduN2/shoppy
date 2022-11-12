import axios from "axios";
import bcryptjs from "bcryptjs";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const { name, email, password } = req.body;

  if (
    !name ||
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 5
  ) {
    res.status(422).json({
      message: "Validation error",
    });
    return;
  }



  const result = await axios.post("http://localhost:8000/user/get-user.php", {
    username: name
  });

  // console.log(result.data.success);


  if (result.data.success) {

    res.status(422).json({ message: "User exists already!" });

    return;

  }

  const data = await axios.post("http://localhost:8000/user/add-user.php", {
    username: name,
    email: email,
    hashed_password: bcryptjs.hashSync(password),
    isAdmin: false
  })

  const user = data.data.user;
  console.log(user);


  res.status(201).send({
    message: "Created user!",
    _id: user._id,
    name: user.username,
    email: user.email,
    isAdmin: user.isAdmin,
  });
}

export default handler;
