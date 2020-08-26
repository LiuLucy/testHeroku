import React,{ useEffect,useState,useReducer } from 'react';
import './contacts.css';
import Modal from 'react-modal';
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '600px',
      height                : '450px',
    }
  };

function Contacts() {
    var initContactData = {
        name:'',
        email:'',
        phoneNumber:'',
        theme:'',
        content:'',
    }
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [name, setName] = useState('test');
    const [email, setEmail] = useState('test@gmail');
    const [phoneNumber, setPhoneNumber] = useState('09123123');
    const [theme, setTheme] = useState('專案開發');
    const [content, setContent] = useState('12313');

    function showModal(){
        console.log(initContactData)
        if(initContactData.name != '' && initContactData.email != '' && initContactData.phoneNumber != '' && initContactData.theme != '' && initContactData.content != ''){             
            setIsOpenModal(true);           
        }
        
    }
    function closeModal(){
        setIsOpenModal(false)
        setName('');
        setEmail('');
        setPhoneNumber('');
        setTheme('');
        setContent('');
    }
    useEffect(() => {
        initContactData.name = name;
        initContactData.email = email;
        initContactData.phoneNumber = phoneNumber;
        initContactData.theme = theme;
        initContactData.content = content;
    },[name,email,phoneNumber,theme,content]);
    useEffect(() => {
        Modal.setAppElement('body'); 
    },[]);
    return (
        <div className="contacts">        
            <div className="row">
                <div className="col-md-6">
                <Modal
                    isOpen={isOpenModal}
                    style={customStyles}
                    contentLabel="Modal #1 Global Style Override Example"
                >
                    <div className="p-5 text-center"> 
                        <h4>姓名：{name}</h4>
                        <h4>信箱：{email}</h4>
                        <h4>電話號碼：{phoneNumber}</h4>
                        <h4>談論主題：{theme}</h4>
                        <h4>內容：{content}</h4>
                        <input onClick={closeModal} type="submit" className="w-100 btn-form" value="關閉"/>
                    </div>
                </Modal>
                </div>
                <div className="col-md-6">
                    <div className="jumbotron jumbotron-fluid text-center m-5">   
                        <div className="container">
                            <p className="mt-2">任何問題都歡迎您透過以下表單詢問，我們會盡快回覆您！</p>
                            <form>
                                <div className="w-100 btn-group-vertical d-flex justify-content-center">
                                    <input value={name} name="name" onChange={(event) =>{setName(event.target.value)}} className="form-control my-2" placeholder="名字" type="text" required></input>
                                    <input value={email} name="email" onChange={(event) =>{setEmail(event.target.value)}} className="form-control my-2" placeholder="信箱" type="email" required></input>
                                    <input value={phoneNumber} name="phoneNumber" onChange={(event) =>{setPhoneNumber(event.target.value)}} className="form-control my-2" placeholder="電話" type="text" required></input>            
                                    <select value={theme} name="theme" onChange={(event) =>{setTheme(event.target.value)}} className="form-control input-lg my-2" required>
                                        <option value>請選擇主題</option>
                                        <option value="專案開發">專案開發</option>
                                        <option value="技術諮詢">技術諮詢</option>            
                                        <option value="企業內訓">企業內訓</option>
                                        <option value="課程詢問">課程詢問</option>         
                                        <option value="其他">其他</option>       
                                    </select>
                                    <textarea value={content} name="content" onChange={(event) =>{setContent(event.target.value)}}  row="5" className="form-control my-2" placeholder="留下你的訊息" required></textarea>
                                    <button className="w-100 btn-form" onClick={showModal}  type='button'>送出</button> 
                                </div>                
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contacts;