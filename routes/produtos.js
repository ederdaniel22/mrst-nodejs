const express = require("express")
const router = express.Router()
const mysql = require("../mysql").pool

// Criação das rotas
router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Retorna todos os produtos",
  })
})

// Insere um produto no BD
router.post("/", (req, res, next) => {
  mysql.getConnection((err, conn) => {
    if (err) {
      return res.status(500).send({
        error: err,
        response: null,
      })
    }

    conn.query(
      "INSERT INTO produtos (nome, preco) VALUES (?, ?)",
      [req.body.nome, req.body.preco],
      (error, results, fields) => {
        conn.release()
        if (error) {
          return res.status(500).send({
            error: error,
            response: null,
          })
        }
        res.status(201).send({
          mensagem: "Produto inserido com sucesso",
          id_produto: results.insertId,
        })
      },
    )
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
