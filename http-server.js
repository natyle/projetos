const express = require("express")
const fs = require("fs")
const app = express()

app.use(express.static(__dirname + '/public'))

app.use("/create", (req, res) => { //criar
  const { file, text } = req.query
  fs.writeFileSync(file, text)
  res.send("Criado arquivo!") //criado o arquivo
})

app.use("/read", (req, res) => { //ler o arquivo
  const { file } = req.query
  const text = fs.readFileSync(file)
  res.send(text.toString())
})

app.use("/update", (req, res) => { //atualizar o arquivo
  const { file, text } = req.query
   fs.appendFileSync(file,text)
   res.send("atualizado")
})

app.use("/delete", (req, res) => { //deletar o arquivo
  const { file } = req.query
   fs.rmSync(file)
   res.send("deletado")
})

app.listen(3000, () => console.log("Servidor rodando!"))