import {GlobalStyle, Container, ContainerForm, Form, TitleForm} from './styles'

function App() {

  return (
    <div>
      <GlobalStyle />

      <Container>
        <ContainerForm>
          <TitleForm>
            <h1>Inscreva-se Para Receber Diversos Emails</h1>
          </TitleForm>

          <Form>
            <form>
              <input type='text' placeholder='Digite seu Nome' />
              <input type='email' placeholder='Digite seu Email'/>

              <input type='submit' value='Enviar' />
            </form>
          </Form>
        </ContainerForm>
      </Container>
    </div>
  );
}

export default App;
