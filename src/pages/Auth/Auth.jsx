import React, {useState} from 'react'
import './Auth.scss'
import authLogo from '../../assets/images/auth-logo.png'
import authArrow from '../../assets/images/auth-arrow.png'
import AuthModal from '../../components/auth/AuthModal/AuthModal'
import MainForm from '../../components/MainForm'



function Auth() {
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  return (
    <div className="auth-container">
      <div className="header">
        <div className="left-container">
          <img src={authLogo} alt="logo" />
        </div>
        <div className="right-container">
          <div className="lang">
              <select name="lang" id="lang">
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
          </div>
          <div className="auth-modal">
            <div className="auth-modal__text" onClick={() => setIsVisibleModal(true)}>
              Вход / Регистрация
            </div>
            <div className="auth-modal__img">
              <img src={authArrow} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="title-container">
          <h2 className="title-text">Оставить заявку</h2>
        </div>
        <div className="main-form">
          <MainForm variant="filled"/>
        </div>
      </div>
      {isVisibleModal 
        ? <AuthModal setIsVisibleModal={setIsVisibleModal} isVisibleModal={isVisibleModal}/> 
        : ''}
    </div>
  )
}

export default Auth
