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
            res.render('login.ejs', {
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
                res.redirect('/welcomes');
            } else {
                res.send('Usuario o contraseña inválidos');
            }
        });
    });
};
controller.welcomes =(req, res) => {
    const { usuario, contraseña } = req.body;
    res.redirect('welcomes');
};

module.exports = controller;