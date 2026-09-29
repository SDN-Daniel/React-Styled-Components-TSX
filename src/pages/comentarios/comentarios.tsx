import './styles';
import Header from '../../components/header/header'
import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/navContext';
import { Comment, CommentBlock, CommentH1, CommentPack, CommentsContainer, CommentsContent, CommentTitle, Icon, User } from './styles';
import Footer from '../../components/footer/footer';
import PirataIcon from '../../assets/icons/piratas_icon.png';

function Comentarios() {
    const {item, setItem} = useContext(UserContext);
    
    useEffect (() => {
        if (item !== 'comentarios') {
            setItem('comentarios')
        }
    })

    return(
        <>
        <Header />
        <CommentsContainer>
            <CommentsContent>
                <CommentBlock>
                    <CommentH1>Comentários do Público</CommentH1>

                    <User>
                        <Icon src={PirataIcon} alt='Ícone de Piratas do Caribe'/>
                        <CommentTitle>
                        Usuário anônimo 5543
                        </CommentTitle>
                    </User>

                    <CommentPack>
                        <Comment>
                            Incrível! O ator do Jack fez um papel incrível, um dos meus filmes favoritos. A cena de Elizabeth Swann e Will se casando é linda, esse filme foi muito bem elaborado, um dos melhores filmes que já vi! Quando vejo esse filme, dá até vontade de ser realmente uma pirata. É totalmente espetacular esse filme.Incrível! </Comment>
                    </CommentPack>

                </CommentBlock>
                <CommentBlock>

                    <User>
                        <Icon src={PirataIcon} alt='Ícone de Piratas do Caribe'/>
                        <CommentTitle>
                        Usuário anônimo 6741
                        </CommentTitle>
                    </User>

                    <CommentPack>
                        <Comment>
                        O fim da trilogia de Gore Verbinski. Sem dúvida, foi um final muito bem elaborado. Essa é a história mais ousada de Piratas do Caribe, mas ainda consegue contar uma história muito boa. Nos mesmos padrões que os filmes anteriores, este também é maravilhoso. </Comment>
                    </CommentPack>

                </CommentBlock>
                <CommentBlock>

                    <User>
                        <Icon src={PirataIcon} alt='Ícone de Piratas do Caribe'/>
                        <CommentTitle>
                        Usuário anônimo 8962
                        </CommentTitle>
                    </User>

                    <CommentPack>
                        <Comment>
                        Novamente uma Obra-Prima de filme. História sensacional e muito bem elaborada. Novamente um elenco excelente, com destaque para Johnny Depp, uma atuação impecável como protagonista. Filme clássico e marcante que mistura muita ação, aventura, um pouco de comédia e drama. Vale muito a pena assistir, um dos melhores filmes de todos os tempos. </Comment>
                    </CommentPack>

                </CommentBlock>
                <CommentBlock>

                    <User>
                        <Icon src={PirataIcon} alt='Ícone de Piratas do Caribe'/>
                        <CommentTitle>
                        Usuário anônimo 3126
                        </CommentTitle>
                    </User>

                    <CommentPack>
                        <Comment>
                        Este terceiro filme encerra a trilogia de forma grandiosa, apesar de ser o mais longo e com um ritmo mais cadenciado nas primeiras horas. O roteiro é bem elaborado, com humor ácido, suspense e várias reviravoltas. Destacam-se as cenas de batalha espetaculares, como a tempestade com redemoinho e o ataque ao navio de Lorde Beckett. A parte técnica é impecável, com fotografia, figurinos e efeitos visuais impressionantes, além da trilha sonora de Hans Zimmer. Gore Verbinski dirige com maestria, criando um filme essencial para os fãs da série. </Comment>
                    </CommentPack>

                </CommentBlock>
                <CommentBlock>

                    <User>
                        <Icon src={PirataIcon} alt='Ícone de Piratas do Caribe'/>
                        <CommentTitle>
                        Usuário anônimo 7914
                        </CommentTitle>
                    </User>

                    <CommentPack>
                        <Comment>
                        Este terceiro filme encerra a trilogia de forma grandiosa, destacando-se pelo desenvolvimento dos personagens Will e Elizabeth. Embora eu tenha sentido falta de mais batalhas navais ao longo da série, a atuação lendária dos personagens, com toques de comédia, drama e romance, compensa isso. O roteiro é bem elaborado, com humor ácido, suspense e várias reviravoltas. A parte técnica é impecável, com fotografia, figurinos e efeitos visuais impressionantes, além da trilha sonora de Hans Zimmer. Gore Verbinski dirige com maestria, criando um filme essencial para os fãs da série. </Comment>
                    </CommentPack>
                    
                </CommentBlock>
            </CommentsContent>
        </CommentsContainer>    
        <Footer />
        </>
    )
}

export default Comentarios;