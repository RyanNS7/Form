import { useState, useEffect, useRef } from 'react'
import {GlobalStyle, Container, ContainerForm, Form, TitleForm} from './styles'
import emailjs from '@emailjs/browser';

function App() {

  const initialValues = {name: '', email: ''}

  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  useEffect(()=>{
    emailjs.init('wmbnHe3sqWPVavfGL')
  }, [])



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

  const form = useRef();

  const submitChange = (e) => {
    e.preventDefault()
    aleatoryMessage()

    setErrors(validate(values))

    emailjs.sendForm('service_gn9blos', 'template_swuaqe8', form.current, 'wmbnHe3sqWPVavfGL')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  }

  async function aleatoryMessage(){
    const api = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await api.json()

    setMessage(data.value)
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
            <form ref={form}> 
              <input type='text' placeholder='Digite seu Nome' id='name' name='name' onChange={handleChange} value={values.name}/>
              {errors.name && <div><p>{errors.name}</p></div>}
              <input type='email' placeholder='Digite seu Email' id='email' name='email' onChange={handleChange} value={values.email}/>
              {errors.email && <div><p>{errors.email}</p></div>}
              <input type='hidden' name='message' value={message}/>

              <input type='submit' value='Enviar' onClick={submitChange} />
            </form>
          </Form>
        </ContainerForm>
      </Container>
    </div>
  );
}

export default App;
