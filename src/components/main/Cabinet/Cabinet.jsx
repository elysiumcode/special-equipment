import React from 'react'
import Title from '../Title/Title'
import './Cabinet.scss'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {Grid, Box} from '@material-ui/core'
import TextField from '../../auth/TextField'
import Button from '../../auth/Button'

function Cabinet() {


  const initialValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    address: '',
    number: '',
    passport: ''
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Имя обязательно!'),
    middleName: Yup.string().required('Фамилия обязательна!'),
    lastName: Yup.string().required('Отчество обязательно!'),
    address: Yup.string().required('Адрес обязателен!'),
    number: Yup.number().integer().required('Номер обязателен!'),
    passport: Yup.string().required('Паспорт обязателен!'),
  })

  return (
    <div className='cabinet__container'>
      <div className="title__wrapper">
        <Title>Общая информация</Title>
      </div>
      <div className="form__wrapper">
        <Formik
          initialValues={{...initialValues}}
          validationSchema={validationSchema}
          onSubmit={values => console.log(values)}
        >
          <Form>
            <Grid container spacing={5}>
              <Grid item xs={4}>
                <TextField 
                  name="firstName" 
                  label="Имя"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField 
                  name="middleName" 
                  label="Фамилия"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField 
                  name="lastName" 
                  label="Отчество"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  name="address" 
                  label="Адрес"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField 
                  name="number" 
                  label="Телефон"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={8}>
                <TextField 
                  name="passport" 
                  label="Паспорт"
                  variant="standard"
                />
              </Grid>
              <Box sx={{
                  width: '100%',
                  height: 40
                }}></Box>
              <Grid item xs={2}>
                <Button size="large">Сохранить</Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Cabinet
