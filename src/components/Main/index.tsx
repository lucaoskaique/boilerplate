import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um Átomo com texto React Avançado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>Typescript, ReactJS e Styled Components</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um Desenvolvedor de frente para uma tela com código"
    />
  </S.Wrapper>
)

export default Main
