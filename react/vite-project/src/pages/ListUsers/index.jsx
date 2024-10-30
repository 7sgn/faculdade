import { useEffect, useState } from 'react'
import Button from '../../components/Button'
import  TopBackground  from '../../components/TopBackground'
import Title from '../../components/Title'
import { Container } from '../home/styles'
import { useNavigate } from 'react-router-dom'

import api from '../../services/api'

import UserImage from '../../assets/users.png'


function ListUsers() {
const [users, setUsers] = useState([])
    useEffect(()=> {

      async function getUsers(){

        const { data } = await api.get('/usuarios')

        setUsers(data)
    }
        getUsers()

    }, [])

    const navigate = useNavigate()

    return (
        <Container>
            <TopBackground>
                <img src={UserImage} alt='imagem de usuários' />
            </TopBackground>
            <Title>Consulta de usuários</Title>

            {users.map( (user) => (
               <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.age}</p>
                <p>{user.email}</p>
               </div> 
            ))}

            <Button type='button' onClick={() => navigate('/')}>Voltar</Button>


        </Container>


    )
}

export default ListUsers