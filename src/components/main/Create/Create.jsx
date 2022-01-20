import React from 'react'
import Title from '../Title/Title'
import './Create.scss'
import MainForm from '../../MainForm'


function Create() {
  return (
    <div className='cabinet__container'>
      <div className="title__wrapper">
        <Title>Общая информация</Title>
      </div>
      <div className="form__wrapper">
      <MainForm variant="standard"/>
      </div>
    </div>
  )
}

export default Create
