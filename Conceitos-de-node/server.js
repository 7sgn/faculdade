// ANTIGO 

// const express = require('express')

// NOVO

import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'



const prisma = new PrismaClient()
const app = express()
const PORT = 3000


app.use(express.json())
app.use(cors())




app.get('/usuarios', async (req, res) => {
  try{
    const users = await prisma.user.findMany()

    res.status(200).json(users)
} 
  catch(error){
    res.status(400).json({message: "Erro ao consultar usuário"})
}
 
})

app.post('/usuarios', async (req, res) => {
  try{
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(201).json({ message: "Usuário criado com sucesso"})
} 
  catch(error){
    res.status(400).json({message: "Erro ao criar usuário"})
}
})

app.put('/usuarios/:id', async (req, res) => {
   try{
    const User = await prisma.user.update({
        where: {
            id: req.params.id

        },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(201).json({ message: "Usuário editado com sucesso"})
} catch(error){
    res.status(400).json({message: "Erro ao editar usuário"})
}
})

app.delete('/usuarios/:id', async (req, res) => {
   try{ 
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({message: 'Usuario deletado com sucesso'})
} catch(error){
    res.status(400).json({message: "Erro ao dleetar usuário"})
}
})

app.listen(PORT, () =>{
    console.log(`O servidor está rodando na porta ${PORT}`)
})