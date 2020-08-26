import React,{ useEffect } from 'react';
import pressImg from '../assets/img/press-img.png';
import cakeresume from '../assets/img/cakeresume.png';
import { Link } from 'react-router-dom';

function DefaultFooter() {
  return (
    <footer className="py-5">
        <div className="container">
            <div className="row">
            <div className="col-12 col-md-3">
                <a className="press-img" href="https://5xruby.tw/">
                <img width="100%" className="mb-3" src={pressImg} alt="圖片"/>
                </a>
                <a className="press-img" href="https://5xruby.tw/">
                <img className="mr-2" src={cakeresume} width="70%" alt="圖片" />
                <span className="text-dark">找工作</span>
                </a>
            </div>
            <div className="col-12 col-md-9">
                <div className="row">
                <div className="col-12 mt-1 mt-md-0">
                    <div className="footer-nav">
                    <h5><Link to="https://5xruby.tw/" className="text-dark">關於五倍紅寶石</Link></h5>
                    <h5><Link to="https://5xruby.tw/" className="text-dark">媒體報導</Link></h5>
                    <h5><Link to="https://5xruby.tw/" className="text-dark">團隊成員</Link></h5>
                    <h5><Link to="/contacts" className="text-dark">聯絡詢價</Link></h5>
                    <h5><Link to="https://5xruby.tw/" className="text-dark">常見問題</Link></h5>
                    <h5><Link to="https://5xruby.tw/" className="text-dark">工作機會</Link></h5>
                    <h5><Link to="https://5xruby.tw/" className="text-dark">開源專案</Link></h5>
                    <h5><Link to="https://5xruby.tw/" className="text-dark">隱私條款</Link></h5>
                    <h5><Link to="https://5xruby.tw/" className="text-dark">服務條款</Link></h5>
                    </div>
                </div>
                <div className="col-12 mt-4">
                    <div className="row">
                        <div className="col-12 col-md-4 col-xl-3">
                        <strong className="phone-number">02-2331-5247</strong><br />
                        <small>Mon - Fri / 09:30 - 22:00</small><br />
                        <a href="https://5xruby.tw/" className="text-dark"><i className="mr-3 ml-2 mt-3 media-icon fab fa-facebook-f"></i></a>
                        <a href="https://5xruby.tw/" className="text-dark"><i className="mx-2 mt-3 media-icon fab fa-twitter"></i></a>
                        <a href="https://5xruby.tw/" className="text-dark"><i className="mx-2 mt-3 media-icon fab fa-github"></i></a>
                        </div>
                        <div className="col-12 col-md-8 col-xl-9 mt-3 mt-md-0">
                        <p>有任何問題？</p>
                        <a href="mailto:hi@5xruby.tw" className="text-dark">hi@5xruby.tw</a><br />
                        <p>地址：<a target="_blank" href="https://goo.gl/lz5v93" className="text-dark">10046 台北市中正區衡陽路 7 號 5 樓</a></p>                        
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-12 mt-5">
                <div className="text-center copyright-text">
                <p className="mb-0">© 2014 - 2020 五倍紅寶石股份有限公司 (5XRUBY CO., LTD)</p>
                <p className="mb-0">台北市短期補習班立案 第 7594 號</p>
                </div>
            </div>
            </div>
        </div>
    </footer>
  );
}
export default DefaultFooter;