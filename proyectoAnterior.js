app.get('/', (req, res) => {
    res.send(`
    <html>
    <head>
      <title>Login Form</title>
      <style>
        /* Estilos para el formulario */
        form {
          width: 300px;
          margin: 50px auto;
          padding: 50px;
          background-color: #f7f7f7;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        /* Estilos para el título */
        h2 {
          text-align: center;
          margin-bottom: 40px;
        }
        /* Estilos para los campos de entrada */
        input[type='text'], input[type='password'] {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          box-sizing: border-box;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        /* Estilos para el botón */
        button {
          width: 100%;
          padding: 14px 20px;
          margin-top: 20px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        /* Estilos adicionales */
        .container {
          text-align: center;
        }
      </style>
    </head>
    <body>
    <form action="/login" method="post">
    <div class="container">
          <h2>Login Form</h2>
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Ingresa el usuario" name="username" id="Michael" required>
          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Ingresa la contraseña" id="1234" name="password" required>
          <button type="submit">Login</button>
        </div>
      </form>
    </body>
  </html>
`);
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Aquí se debería validar el nombre de usuario y la contraseña con una base de datos o algún otro método
  if (username === 'Michael' && password === '1234') {
    res.write('<script> window.location.href = "/index"</script>');
  } else {
    res.send('Incorrect username or password');
  }
});
app.get('/index', (req, res) => {
    res.send(`<html>
    <head>
    <title>Welcome</title>
    <style>
      /* Estilos para el título */
      h1 {
        text-align: center;
        color: blue;
        font-size: 3em;
        margin-top: 50px;
      }
      /* Estilos para la imagen */
      img {
        width: 200px;
        height: 200px;
        display: block;
        margin: 0 auto;
        margin-top: 50px;
      }
      /* Estilos para el botón */
      button {
        display: block;
        margin: 0 auto;
        margin-top: 50px;
        padding: 10px 20px;
        font-size: 1.5em;
        background-color: green;
        color: white;
        border: none;
        cursor: pointer;
      }
    </style>
    </head>
    <body>
    <h1>Acceso Aprobado Con Éxito!</h1>
    <img src="https://i.pinimg.com/originals/18/4c/51/184c515146b9a891c744ec9a266f2229.png" alt="Welcome Image">
    <button onclick="location.href='sisweb20.42web.io'">Go to website</button>
    </body>
    </html>`)
    });