import { NameContainer, NameContent } from '../cards/styles';
import './styles';
import { CardFoto1, CardFoto2, CardFoto3, CardFoto4, CardFoto5, CardFoto6, CardFoto7, CardFoto8, FotosCardsContainer, FotosCardsContent } from './styles';

function CardsFotos() {
    return(
        <FotosCardsContainer>
            <FotosCardsContent>
                <CardFoto1>
                    <NameContainer>
                        <NameContent>Jack Sparrow</NameContent>
                    </NameContainer>
                </CardFoto1>
                <CardFoto2>
                    <NameContainer>
                        <NameContent>Will Turner</NameContent>
                    </NameContainer>
                </CardFoto2>
                <CardFoto3>
                    <NameContainer>
                        <NameContent>Elizabeth Swann</NameContent>
                    </NameContainer>
                </CardFoto3>
                <CardFoto4>
                    <NameContainer>
                        <NameContent>Davy Jones</NameContent>
                    </NameContainer>
                </CardFoto4>
                <CardFoto5>
                    <NameContainer>
                        <NameContent>Hector Barbossa</NameContent>
                    </NameContainer>
                </CardFoto5>
                <CardFoto6>
                    <NameContainer>
                        <NameContent>Tia Dalma</NameContent>
                    </NameContainer>
                </CardFoto6>
                <CardFoto7>
                    <NameContainer>
                        <NameContent>Lord Cutler Beckett</NameContent>
                    </NameContainer>
                </CardFoto7>
                <CardFoto8>
                    <NameContainer>
                        <NameContent>Capitão Sao Feng</NameContent>
                    </NameContainer>
                </CardFoto8>
            </FotosCardsContent>
        </FotosCardsContainer>
    )
}

export default CardsFotos;