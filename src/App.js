import { useState } from 'react'
import {GlobalStyle, Container, ContainerForm, Form, TitleForm} from './styles'

function App() {

  const initialValues = {name: '', email: ''}

  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})



  const handleChange = (e) =>{
    let scrambledField = e.target.id;
    let {value} = e.target


    /* dentro de "setValues" foi repassado o valor do values utilizando spread operators e logo após foi utilizado 
    o '[scrambledField]' para atualizar o valor do campo que foi escrito*/
    setValues({...values, [scrambledField]: value})

  }

  const validate = value => {
    const errors = {}

    if(!value.email){
      errors.email = 'Email Necessario'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
      errors.email = 'Digite um Email valido'
    }

    if(!value.name){
      errors.name = 'Nome Necessario'
    }else if(value.name.length < 3){
      errors.name = 'Digite um nome valido'
    }

    return errors
  }

  const submitChange = (e) => {
    e.preventDefault()

    setErrors(validate(values))

  }

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
              <input type='text' placeholder='Digite seu Nome' id='name' onChange={handleChange} value={values.name}/>
              {errors.name && <div><p>{errors.name}</p></div>}
              <input type='email' placeholder='Digite seu Email' id='email' onChange={handleChange} value={values.email}/>
              {errors.email && <div><p>{errors.email}</p></div>}

              <input type='submit' value='Enviar' onClick={submitChange} />
            </form>
          </Form>
        </ContainerForm>
      </Container>
    </div>
  );
}

export default App;
