const express = require('express')

const routes = express.Router()


//obtener la informacion ya guardada
routes.get('/', (req, res)=>{
  req.getConnection((err, conn)=>{
    if (err) return res.send(err)
    
    conn.query('SELECT * FROM tabla_libros', (err, rows)=>{
        if (err) return res.send(err)
        
        res.json(rows) 
    })
  })
})

//insertar informacion
routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
      if (err) return res.send(err)
      var sql = 'INSERT INTO tabla_libros set ?'
      conn.query(sql, [req.body], (err, rows)=>{
          if (err) return res.send(err)
          
          res.json('Libro insertado....') 
      })
    })
  })


  //eliminar un registro 
routes.delete('/:id', (req, res)=>{
  req.getConnection((err, conn)=>{
    if (err) return res.send(err)
    var sql = 'DELETE FROM tabla_libros WHERE idtabla_libros = ?';
    conn.query(sql, [req.params.id], (err, rows)=>{
        if (err) return res.send(err)
        
        res.json('Libro eliminado....') 
    })
  })
})


  //eliminar un actualizar un registro 
  routes.put('/(:id)', (req, res)=>{
    req.getConnection((err, conn)=>{
      if (err) return res.send(err)
      var sql = 'UPDATE tabla_libros set ? WHERE idtabla_libros= ?';
      conn.query(sql,[req.body,req.params.id], (err, rows)=>{
          if (err) return res.send(err)
          
          res.json('Libro actulizado....') 
      })
    })
  })






module.exports = routes