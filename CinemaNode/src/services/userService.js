import database from '../repository/connection.js'; //escrever a extenção do file

async function insertUser(email, password, userName){
  const conn = await database.connect(); //este comando serve para api e o banco
  //busca as configurações do arquivo connection e realiz a criação da conexão

  //variavel que inseri dados no banco
  //variaveis com ??? para armazenar os dados recebidos do front
  const sql = 'insert into tbl_usuario(email, senha, nome_usuario) values(?,?,?);';
  const dataUser = [email, password, userName];

  //query executa a variavel 'sql' e a 'dataUser' no banco e dados
  conn.query(sql, dataUser); /*comando .query serve para executar a açõa 
  dentro do Banco de dados*/

  //end para finalizar a conexão com o banco, por questões de performace e segurança
  conn.end();
}

export default {insertUser};

