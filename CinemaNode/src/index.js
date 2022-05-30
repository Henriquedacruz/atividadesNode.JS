import express  from  "express";
import routes from './routes.js'//sempre coloque a extenção do arquivo

const api = express();
api.use(express.json());

api.use('/', routes); 

api.listen('3333', () => {
  console.log('Server is Running...');
});

