import { Banner, BannerLogo, ContainerLogo } from "./styles";
import Logo2 from '../../assets/logos/Logo2_header_piratas.png'

function BannerHome() {
    return(
        <Banner>
            <ContainerLogo>
                <BannerLogo src={Logo2} alt="Piratas do Caribe no Fim do Mundo" />
            </ContainerLogo>
        </Banner>
    )
}

export default BannerHome;