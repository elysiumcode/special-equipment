import React, {useState} from 'react'
import Logo from '../../assets/images/main-logo.png'
import Logout from '../../assets/images/main-logout.png'
import Change from '../../assets/images/main-change.png'
import Cabinet from '../../components/main/Cabinet/Cabinet'
import Search from '../../components/main/Search/Search'
import Create from '../../components/main/Create/Create'
import {Link, Routes, Route} from 'react-router-dom'
import './Main.scss'



function Main() {

  const nav = {
    search: 'Поиск заявок',
    create: 'Создать новую заявку',
    cabinet: 'Личный кабинет',
    trans: 'Мои транзакции',
    apps: 'Мои заявки'
  }

  const [activeRole, setActiveRole] = useState(0)
  const [activeNav, setActiveNav] = useState('cabinet')

  return (
    <div className="main-page">
      <div className="main__header">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="profile">
          <span>Роль:</span>
          <span 
            className={`role ${activeRole === 0 ? 'active' : ''}`}
            onClick={() => setActiveRole(0)}
          >Заказчик</span>
          <img src={Change} alt="change" />
          <span
            className={`role ${activeRole === 1? 'active' : ''}`}
            onClick={() => setActiveRole(1)}
          >Исполнитель</span>
        </div>
        <div className="logout">
          <div className="logout__img-container">
            <img src={Logout} alt="logout" />
          </div>
        </div>
      </div>
      <div className="main__container">
        <div className="main__nav">
          <div className="main__nav__links">
            {Object.keys(nav).map(key => (
              <Link to={key}>
                <div
                  key={key}
                  className={`link ${key === activeNav ? 'active' : ''}`}
                  onClick={() => setActiveNav(key)}
                  >
                  <span>{nav[key]}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="main__content">
          <Routes>
            <Route path="/cabinet" element={<Cabinet />}/>
            <Route path="/search" element={<Search />}/>
            <Route path="/create" element={<Create />}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Main
