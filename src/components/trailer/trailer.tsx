import './styles';
import { Button, Content, Description, Sinopse, TrailerContainer, TrailerContent } from './styles';
import Video from '../../assets/videos/piratas.mp4';
import ThumbNail from '../../assets/imagens/thumbnail2.jpg';

function Trailer() {
    
    return(
        <TrailerContainer>
            <Content>
                <TrailerContent controls src={Video} poster = {ThumbNail} >
                    Seu navegador não suporta o elemento de vídeo.               
                </TrailerContent>
                <Sinopse>
                    <Description>
                    Will Turner e Elizabeth Swann unem forças com o Capitão Barbossa para libertarem Jack Sparrow da prisão de Davy Jones. Enquanto isso, a tripulação do barco fantasma O Holandês Voador causa estragos nos Sete Mares. Os amigos devem navegar através de águas perigosas para enfrentarem o pirata chinês São Feng e, finalmente, eles devem escolher em que lado ficar na batalha, pois a vida do pirata está em jogo.
                    </Description>
                    <Button>Comprar Ingresso</Button>
                </Sinopse>
            </Content>
        </TrailerContainer>
    )
}

export default Trailer;
