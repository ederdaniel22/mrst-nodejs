// Criar serviço http
const http = require("http")
//Criação do app
const app = require("./app")
// Define porta padrão
const port = process.env.PORT || 3000
// Criação do servidor
const server = http.createServer(app)

// Indica a porta a ser usada
server.listen(port)
