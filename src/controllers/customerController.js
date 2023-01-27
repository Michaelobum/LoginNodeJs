const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM login', (err, logins)=>{
            if (err) {
                res.json(err);
            }
            res.render('login.ejs', {
                data: logins
            });
        });
    });
};
controller.listUsuarios = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM login', (err, logins)=>{
            if (err) {
                res.json(err);
            }
            res.render('ListUsuarios.ejs', {
                data: logins
            });
        });
    });
};
controller.validate = (req, res) =>{
    req.getConnection ((err, conn)=>{
    const { usuario, contraseña } = req.body;
    conn.query("SELECT * FROM login WHERE usuario = ? AND contraseña = ?", [usuario, contraseña], (err, result) => {
            if (result.length > 0) {
                res.redirect('/listUsuarios');
            } else {
                res.send('Usuario o contraseña inválidos');
            }
        });
    });
};
controller.logout = (req, res) => {
    res.render('login')
};
controller.mostrarregistro=(req, res) => {
    res.render('registro.ejs'); 
};
controller.registroUsuarios = (req, res) => {
    req.getConnection ((err, conn)=>{
        const { nombre, apellido, usuario, contraseña } = req.body;

        // Inserta los datos en la tabla
        const query = `INSERT INTO login (nombre, apellido, usuario, contraseña) VALUES ('${nombre}', '${apellido}', '${usuario}', '${contraseña}')`;
        conn.query(query, (error, result) => {
          if (error) {
            console.log(error);
            res.status(500).send('Error al registrar al usuario');
          } else {
            res.redirect('/');
        }
        })
        });
};
controller.skeeleton = (req,res)=>{
    res.render('skeleton.ejs'); 
};
controller.pureCss = (req,res)=>{
    res.render('purecss.ejs'); 
};
controller.tailwind = (req,res)=>{
    res.render('Tailwind.ejs'); 
};
controller.etiquetas = (req,res)=>{
    res.render('etiquetas.ejs'); 
};
controller.listas = (req,res)=>{
    res.render('listas.ejs'); 
};

module.exports = controller;