// ANTIGO 

// const express = require('express')

// NOVO

import express from 'express'

const app = express()

app.get('/usuarios', (req, res) => {
    res.send("Olá, rota acessada com sucesso")
})

app.post('/usuarios', (req, res) => {
    res.send("Olá")
})


app.listen(3000)