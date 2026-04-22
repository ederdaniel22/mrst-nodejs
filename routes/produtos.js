const express = require("express")
const router = express.Router()

// Criação das rotas
router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Retorna todos os produtos",
  })
})

// Insere um produto no BD
router.post("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "Produto inserido com sucesso",
  })
})

// Busca um produto pelo id
router.get("/:id_produto", (req, res, next) => {
  const id = req.params.id_produto

  if (id === "especial") {
    res.status(200).send({
      mensagem: "Retorna um pedido pelo id",
      id: id,
    })
  } else {
    res.status(200).send({
      mensagem: "Sem Jesus o caminho está errado",
    })
  }
})

// Alteração de produtos
router.patch("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "Produto alterado",
  })
})

// Exclui um produto
router.delete("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Produto excluído",
  })
})

module.exports = router
