import * as S from './styles'

const Main = ({
  title = 'next-starter',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/next-boilerplate-logo-white.svg"
      alt="Imagem de um Caldeirão com liquido roxo com texto ao lado Next Boilerplate"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um Desenvolvedor de frente para uma tela com código"
    />
  </S.Wrapper>
)

export default Main
