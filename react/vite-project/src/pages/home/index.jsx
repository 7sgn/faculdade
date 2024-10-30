import { useRef } from 'react'
import api from '../../services/api.js'
import { Container, Form, ContainerInputs, Input, InputLabel } from './styles.js'
import { useNavigate } from 'react-router-dom'


import Button from '../../components/Button'
import Background from '../../components/TopBackground'
import Title from '../../components/Title'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    const data = await api.post('/usuarios', {

      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,

    })
    console.log(data)
  }

  return (
    <Container>
      <Background />
        
      

      <Form>
        <Title>Cadastro de usuários</Title>
        <ContainerInputs>

          <div>
            <InputLabel>
              Nome<span>*</span>
            </InputLabel>

            <Input type='text' placeholder='Nome do usuário' ref={inputName} />
          </div>
          <div>
            <InputLabel>
              Idade:<span>*</span>
            </InputLabel>

            <Input type='number' placeholder='Idade do usuário' ref={inputAge} />
          </div>
        </ContainerInputs>
        <div style={{ width: '100%' }}>
          <InputLabel>
            Email:<span>*</span>
          </InputLabel>

          <Input type='email' placeholder='E-mail do usuário' ref={inputEmail} />
        </div>


        <Button type='button' onClick={registerNewUser} theme='primary'>Cadastrar Usuário</Button>
      </Form>

        <Button type='button' onClick={() => navigate('./lista-de-usuarios')}>Ver Lista de Usuários</Button>

    </Container>


  )
}

export default Home


/*
  Exportar padrão -> Uma coisa só por página
  apenas exportar -> 


*/