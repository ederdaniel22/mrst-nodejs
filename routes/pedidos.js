const express = require("express")
const router = express.Router()

// Criação das rotas
router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Retorna todos os pedidos",
  })
})

// Insere um pedido no BD
router.post("/", (req, res, next) => {
  const pedido = {
    id_produto: req.body.id_produto,
    quantidade: req.body.quantidade,
  }

  res.status(201).send({
    mensagem: "O pedido foi criado",
    pedidoCriado: pedido,
  })
})

// Busca um pedido pelo id
router.get("/:id_pedido", (req, res, next) => {
  const id = req.params.id_pedido
  res.status(200).send({
    mensagem: "Retorna os detalhes de um pedido",
    id_pedido: id,
  })
})

// Exclui um pedido
router.delete("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Pedido excluído",
  })
})

module.exports = router
