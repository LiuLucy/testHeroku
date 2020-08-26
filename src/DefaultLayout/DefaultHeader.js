import React,{ useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
function DefaultHeader() {
  return (
    <header className="App-header px-3  bg-light">
      <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top bg-light w-100">
        <Link className="navbar-brand" to="/"><img src={logo} alt="圖片" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">          
        <ul className="navbar-nav">
          <li className="nav-item mx-2">
            <Link className="nav-link d-flex justify-content-center" to="/online-class"><i className="far fa-gem mr-2 d-flex align-items-center"></i>線上課程</Link>
          </li>          
          <li className="nav-item mx-2">
            <Link className="nav-link d-flex justify-content-center" to="/camp"><i className="far fa-compass fa-lg mr-2 d-flex align-items-center"></i>ASTRO Camp<span className="tag p-1 ml-2">報名優惠中</span></Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link d-flex justify-content-center" to="/talks">短期課程</Link>
          </li> 
          <li className="nav-item mx-2">
            <Link className="nav-link d-flex justify-content-center" to="/project-dev">專案開發</Link>
          </li> 
          <li className="nav-item mx-2">
            <Link className="nav-link d-flex justify-content-center" to="/training">企業代訓</Link>
          </li> 
          <li className="nav-item mx-2">
            <Link className="nav-link d-flex justify-content-center" to="/space">空間租借</Link>
          </li> 
          <li className="nav-item mx-2">
            <Link className="nav-link d-flex justify-content-center" to="/posts">最新消息</Link>
          </li> 
        </ul>
        </div>
      </nav>
    </header>
  );
}
export default DefaultHeader;