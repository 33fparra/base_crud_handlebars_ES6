import express from 'express';
import hbs  from 'hbs';
import path from 'path';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url); //ocupo el path busca la direccion
const __dirname = dirname(__filename) 
import userRoutes from './routes/userRoutes.js';
import { sequelize } from './config/db.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Establecer el motor de vistas
app.set('view engine', 'hbs');
app.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/partials")

// Establecer la carpeta de las vistas
app.set('views', path.join(__dirname, 'views'));

// Definir ruta de prueba
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});
app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});
app.get('/register', (req, res) => {
  res.render('register');
});





app.use('/users', userRoutes);


//aqui debo cvolocar todos los datos para ir llenando con este formato

sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  });
