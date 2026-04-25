const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyParser = require("body-parser")

const rotaProdutos = require("./routes/produtos")
const rotaPedidos = require("./routes/pedidos")

// Para monitorar a execução do projeto e retornar um log
app.use(morgan("dev"))

// Definir o corpo da requisição aceitando apenas
// 1ª linha dados simples, 2ª linha formato json
// como dados de entrada
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Definir a origem do controle de acesso '*' indica todos
// podendo ser servidor especifico 'http://*** */
app.use((req, res, next) => {
  res.header("Acces-Control-Allow-Origin", "*")

  // Quais tipos argumentos de cabeçalhos serão aceitos
  res.header(
    "Acces-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  )

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
    return res.status(200).send({})
  }
  next()
})

app.use("/produtos", rotaProdutos)
app.use("/pedidos", rotaPedidos)

// Quando não encontrar a rota
app.use((req, res, next) => {
  const erro = new Error("Não encontrado")
  erro.status = 404
  next(erro)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  return res.send({
    erro: {
      mensagem: error.message,
    },
  })
})

module.exports = app
