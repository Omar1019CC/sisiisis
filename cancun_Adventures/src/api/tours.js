//v1 api de tours
//se implementara seguridad y variables de entorno
//unico uso para pruepas y consumir endpoints desde el front
//se implementaran controladores y modelos para la estructura del backend

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(express.json());

const corsOptions = {
  };


  app.use(cors(corsOptions));


const dbConfig = {
  host: 'cancun-adventures-mysql-server.mysql.database.azure.com',
  user: 'admin_ut',
  password: 'Holamundo123',
  database: 'cancun_adventures',
  ssl: {
    rejectUnauthorized: false,
  }
};


const connection = mysql.createConnection(dbConfig);


connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ', err);
    return;
  }
  console.log('Conexión establecida a la base de datos');
});



// Endpoint para obtener todos los tours
app.get('/tours', (req, res) => {
  connection.query('SELECT * FROM tours', (err, results) => {
    if (err) {
      console.error('Error al obtener los tours: ', err);
      res.status(500).json({ error: 'Error al obtener los tours' });
      return;
    }
    res.json(results);
  });
});

// Endpoint para obtener un tour por id
app.get('/tours/:id', (req, res) => {
  const tourId = req.params.id;
  connection.query('SELECT * FROM tours WHERE id = ?', [tourId], (err, results) => {
    if (err) {
      console.error('Error al obtener el tour: ', err);
      res.status(500).json({ error: 'Error al obtener el tour' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Tour no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Endpoint para crear un nuevo tour
app.post('/tours', (req, res) => {
    const { name, price, short_description, img, description, schedule, includes } = req.body;
    connection.query(
      'INSERT INTO tours (name, price, short_description, img, description, schedule, includes) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, price, short_description, img, description, schedule, includes],
      (err, results) => {
        if (err) {
          console.error('Error al crear el tour: ', err);
          res.status(500).json({ error: 'Error al crear el tour' });
          return;
        }
        res.json({ id: results.insertId, ...req.body });
      }
    );
  });



// endpoint para actualizar un tour
app.put('/tours/:id', (req, res) => {
    const tourId = req.params.id;
    const { name, price, description, img, includes, schedule } = req.body;
    connection.query(
      'UPDATE tours SET name = ?, price = ?, description = ?, img = ?, includes = ?, schedule = ? WHERE id = ?',
      [name, price, description, img, includes, schedule, tourId],
      (err, results) => {
        if (err) {
          console.error('Error al actualizar el tour: ', err);
          res.status(500).json({ error: 'Error al actualizar el tour' });
          return;
        }
        if (results.affectedRows === 0) {
          res.status(404).json({ error: 'Tour no encontrado' });
          return;
        }
        res.json({ message: 'El tour ha sido actualizado correctamente' });
      }
    );
  });


// endpoint para eliminar un tour
app.delete('/tours/:id', (req, res) => {
  const tourId = req.params.id;
  connection.query('DELETE FROM tours WHERE id = ?', [tourId], (err, results) => {
    if (err) {
      console.error('Error al eliminar el tour: ', err);
      res.status(500).json({ error: 'Error al eliminar el tour' });
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).json({ error: 'Tour no encontrado' });
      return;
    }
    res.json({ message: 'El tour ha sido eliminado correctamente' });
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado exitosamente');
});
