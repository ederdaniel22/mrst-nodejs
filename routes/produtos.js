const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Só Jesus Salva",
  })
})

router.post("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "Com Deus para vencer",
  })
})

router.get("/:id_produto", (req, res, next) => {
  const id = req.params.id_produto

  if (id === "especial") {
    res.status(200).send({
      mensagem: "Jesus Salva e Guia meus passos",
      id: id,
    })
  } else {
    res.status(200).send({
      mensagem: "Sem Jesus o caminho está errado",
    })
  }
})

module.exports = router
