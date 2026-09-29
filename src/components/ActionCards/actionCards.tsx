import './styles';
import { CardAction, CardActionFoto1, CardActionFoto2, FotosCardsActionBanner, FotosCardsActionBlock, FotosCardsActionContainer, FotosCardsActionContent } from './styles';

function ActionCards() {
    return(
        <FotosCardsActionContainer>
            <FotosCardsActionBlock>
                <FotosCardsActionContent>
                    <CardActionFoto1 />
                    <CardActionFoto2 />
                </FotosCardsActionContent>
                <FotosCardsActionBanner>
                    <CardAction />
                </FotosCardsActionBanner>
            </FotosCardsActionBlock>
        </FotosCardsActionContainer>
    )
}

export default ActionCards;