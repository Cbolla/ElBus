import Login from "../../utils/userDAO";

export default async function handler(req,res){

  const user = {
    name:req.body.name,
    password:req.body.password
  }

  const response = await Login(user.name, user.password)

  res.status(200).json(response)
}
