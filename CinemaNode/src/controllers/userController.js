import express from "express";
import db from '../services/userService.js';

//variavel 
const router = express.Router();


//request é oq o front envia para o back 
//response oq o back envia para o front
router.post('/', async (request, response) => {

  //const para cada um modo antigo
  /*const email = request.body.email;
  const password = request.body.password;
  const userName = request.body.userName;*/

  const {email, password, userName} = request.body;

  //debug
  //console.log("email:",email,"senha:", password,"usuario:", userName);

  await db.insertUser(email, password, userName);

  response.status(201).json({message: 'Usuario cadastrado com sucesso'});
  
});

export default router;