import Background from "./styles"
import UserImage from '../../assets/users.png'

function DefaultTopBackground(data) {
    console.log(data)

    return (
        <Background>
            <img src={UserImage} alt='imagem de usuários' />
        </Background>
    )
}

export default DefaultTopBackground



