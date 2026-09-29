import './styles';
import { ActorCardsContainer, CardBanner1, CardBanner2, CardBanner3, CardBanner4, CardsContent, NameContainer, NameContent } from './styles';

function Cards(){
    return(
        <ActorCardsContainer>
            <CardsContent>
                <CardBanner1>
                    <NameContainer>
                        <NameContent>Jack Sparrow</NameContent>
                    </NameContainer>
                </CardBanner1>
                <CardBanner2>
                    <NameContainer>
                        <NameContent>Will Turner</NameContent>
                    </NameContainer>
                </CardBanner2>
                <CardBanner3>
                    <NameContainer>
                        <NameContent>Elizabeth Swann</NameContent>
                    </NameContainer>
                </CardBanner3>
                <CardBanner4>
                    <NameContainer>
                        <NameContent>Davy Jones</NameContent>
                    </NameContainer>
                </CardBanner4>
            </CardsContent>
        </ActorCardsContainer>
    )
}

export default Cards;