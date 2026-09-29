import styled from "styled-components";
import BannerJack from '../../assets/banners/banner_jack.jpg'

export const Banner = styled.div`
 background-image: url(${BannerJack});
 background-size: cover;
 background-position:50% 21%;
 height: 450px;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: end;
`;

export const ContainerLogo = styled.div`
 display: flex;
`;

export const BannerLogo = styled.img`
 width: 240px;
 margin-bottom: 10px;
`;