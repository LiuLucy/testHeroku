import React,{ useEffect,useState } from 'react';
import $ from 'jquery';
import './home.css';
import { image_link_sm , image_link_md , image_link_lg } from './../../enums.js';
function Home() {
  const [imageLink, setImageLink] = useState(image_link_lg)
  useEffect(() => {
    if($(window).width() <= 375){
      setImageLink(image_link_sm)
    } else if($(window).width() <= 376 && $(window).width() >= 768){
      setImageLink(image_link_md)
    } else {
      setImageLink(image_link_lg)
    }
    
  });
  useEffect(() => {
    var fp = {},
    fpCarousel = $('#fp-carousel'),
    fpItem = fpCarousel.find('.item'),
    fpIndicator = fpCarousel.find('.carousel-indicators li'),
    fpItem_index = 0,
    isNext = true;
    fp.playTimer = null;
    function isActive(classname) {
      var index = classname.indexOf('active');
      if (index == -1) {
        return false;
      } else {
        return true;
      }
    }
    function updateIndicator() {
      for(var j = 0, m = fpIndicator.length; j < m; j++){
        $(fpIndicator[j]).attr('class', '');
        $(fpIndicator[fpItem_index]).attr('class', 'active');
      }
    }
    function carousel_init() {
      for (var i = 0, l = fpItem.length; i < l; i++) {
        var self = $(fpItem[i]);
        if (!isActive(self.attr('class'))) {
          isNext ? self.css({'left': self.width()}) : self.css({'left': -self.width()});
        }
      }
      updateIndicator();
    }
    function carousel_play(dir) {
      if (!arguments.length) {
        carousel_init();
        //给下一个item配置active
        for (var i = 0, l = fpItem.length; i < l; i++) {
            var self = $(fpItem[i]);

            if (isActive(self.attr('class'))) {
              isNext ? self.animate({'left': -$(window).width()},'fast').attr({'class': 'item width100 w-height'}).hide() :
                self.animate({'left': $(window).width()},'fast').attr({'class': 'item width100 w-height'}).hide();
                if(isNext){
                  if (fpItem_index >= l - 1) {
                    fpItem_index = 0;
                  } else {
                    fpItem_index = i + 1;
                  }
                } else {
                  if (fpItem_index <= 0) {
                    fpItem_index = l-1;
                  } else {
                    fpItem_index = i - 1;
                  }
                }
            }
        }
        $(fpItem[fpItem_index]).show().animate({'left': 0},'fast').attr({'class': 'item active width100 w-height'});
        carousel_init();
      } else {
        switch(arguments[0]){
          case 'next':
            isNext = true;
            carousel_play();
            break;
          case 'prev':
            isNext = false;
            carousel_play();
            break;
          }
        }
      }
      fp.playTimer = setInterval(function () {
        carousel_play();
      }, 5000);
      fpCarousel.on('mouseenter', function () {
        clearInterval(fp.playTimer);
      }).on('mouseleave', function () {
        fp.playTimer = setInterval(function () {
          carousel_play();
        }, 3000);
      });
     
      fpIndicator.click(function () {
       
      })
  },[]);
  return (
    <div className="home-page h-100">
      {/* fp-carousel */}
      <div id="fp-carousel" class="width100 w-height">
          <ol class="carousel-indicators">
              <li data-target="#app-carousel" data-slide-to="0" class="active"></li>
              <li data-target="#app-carousel" data-slide-to="1"></li>
              <li data-target="#app-carousel" data-slide-to="2"></li>
              <li data-target="#app-carousel" data-slide-to="3"></li>
          </ol>
          <div class="width100 w-height carousel-content">
              <div class="item active width100 w-height">
                  <div class="col-md-12 appWrap px-0">
                      <section class="introItem1 container-fluid px-0">
                        <img width="100%" src={imageLink.banner_astro}></img>
                      </section>
                  </div>
              </div>
              <div class="item width100 w-height">
                <div class="col-md-12 appWrap px-0">
                      <section class="introItem1 container-fluid px-0">
                        <img width="100%" src={imageLink.banner_5xruby}></img>                                
                      </section>
                  </div>
              </div>
              <div class="item width100 w-height">
                <div class="col-md-12 appWrap px-0">
                      <section class="introItem1 container-fluid px-0">
                        <img width="100%" src={imageLink.banner_imcodingit}></img>                                
                      </section>
                  </div>
              </div>
              <div class="item width100 w-height">
                  <div class="col-md-12 appWrap px-0">
                      <section class="introItem1 container-fluid px-0">
                        <img width="100%" src={imageLink.banner_mokumokukai}></img>                                
                      </section>
                  </div>
              </div>                
          </div>                
      </div>
      {/* fp-carousel */}

      {/* about */}
      <div className="about-5x block-dark py-5">
        <div className="title text-center">
          <h4>關於五倍紅寶石 About 5xRuby</h4>
          <div className="justify-content-center d-flex">
            <span className="line"></span>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-3">
              <div className="group-vertical text-center">                
                <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img1-0d20ab19.png"></img>
                <div className="mt-3">
                  <h4 className="mb-0">網頁設計</h4>        
                  <h4 className="mb-0">前後端課程教學</h4>
                </div>
                <div className="mt-3">
                  <p>帶你掌握程式技能轉職工程師，程式課程從入門到進階讓你快速上手，學員好評推薦轉職課程！</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="group-vertical text-center">
                <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img2-26e4ca80.png"></img>
                <div className="mt-3">
                  <h4 className="mb-0">頂尖技術</h4>
                  <h4 className="mb-0">網頁製作、專案開發</h4>
                </div>
                <div className="mt-3">
                  <p>網站開發到行動裝置 App 工程服務、系統設計開發甚至系統架設，提供專業的建議與頂尖的技術。</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="group-vertical text-center">
                <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img3-d0a4089e.png"></img>
                <div className="mt-3">
                  <h4 className="mb-0">資訊軟體開發</h4>
                  <h4 className="mb-0">技術顧問</h4>
                </div>
                <div className="mt-3">
                  <p>協助您將現有人力快速打造為 Ruby/Rails 團隊，無須經歷繁瑣的人才招募就有即戰力！</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="group-vertical text-center">
                <img src="https://5xruby.tw/assets/images/index/feature-list/feature-list-img4-13321bf0.png"></img>
                <div className="mt-3">
                  <h4 className="mb-0">前後端工程師</h4>
                  <h4 className="mb-0">社群經營</h4>
                </div>
                <div className="mt-3">
                  <p>Ruby 社群經營、舉辦各類活動，促進 Ruby 社群發展，歡迎前後端工程師分享交流。</p>
                </div>
              </div>
            </div>        
          </div>  
        </div>  
      </div>
      {/* about */}     

      {/* class-recommend */}
      <div className="class-recommend">
        <div className="title text-center py-5">
          <h4>熱門網頁設計課程推薦</h4>
          <div className="justify-content-center d-flex">
            <span className="line"></span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-3 mb-lg-0">
            <div className="card">
              <img className="card-img-top" src="https://5xruby.tw/assets/images/talks/cover/functional-09be0f61.jpg" alt="Card image cap" />
              <div className="card-body pt-2">
                <div className="mb-2">
                  <span className="bage bage-warning mr-1">新開課</span>
                  <span className="bage bage-danger">開放報名中</span>
                </div>
                <div className="class-detail">  
                  <h5 className="card-title mb-4">工作上用得到的函數式程式設計：從觀念到實務 - 假日班</h5>
                  <span>講師：蘇泰安(Taian Su)</span>
                  <hr className="mb-3 mt-2"></hr>
                  <div className="input-group">
                    <span>開課時間</span>
                    <span className="class-time-bage ml-3 px-2 py-1">2月｜假日班</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-0">
            <div className="card">
              <img className="card-img-top" src="https://5xruby.tw/assets/images/talks/cover/rwd-99b9e59b.jpg" alt="Card image cap" />
              <div className="card-body pt-2">
                <div className="mb-2">
                  <span className="bage bage-danger">開放報名中</span>
                </div>
                <div className="class-detail">  
                  <h5 className="card-title mb-4">客製化進階 RWD 手機版網頁設計班 - 假日班</h5>
                  <span>講師：李建杭(Amos Lee)</span>                
                  <hr className="mb-3 mt-2"></hr>
                  <div className="input-group">
                    <span>開課時間</span>
                    <span className="class-time-bage ml-3 px-2 py-1">3月｜假日班</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-0">
            <div className="card">
              <img className="card-img-top" src="https://5xruby.tw/assets/images/talks/cover/vue-js-61eaa1c7.jpg" alt="Card image cap" />
              <div className="card-body pt-2">            
                <div className="mb-2">
                  <span className="bage bage-danger">開放報名中</span>
                </div>
                <h5 className="card-title mb-4">Vue.js 與 Vuex 前端開發實戰課程 - 假日班</h5>
                <div className="class-detail">                
                  <span>講師：許國政(Kuro Hsu)</span>                
                  <hr className="mb-3 mt-2"></hr>
                  <div className="input-group">
                    <span>開課時間</span>
                    <span className="class-time-bage ml-3 px-2 py-1">3月｜假日班</span>
                  </div>
                </div>
              </div>
            </div>
          </div>      
        </div>
        <div className="more-class text-center my-5">
          <button>看更多網頁課程</button>
        </div>
      </div>     
      {/* class-recommend */}

      {/* user-recommend */}
      <div className="block-dark">
        <div className="title text-center py-5">
          <h4>網頁課程推薦</h4>
          <div className="justify-content-center d-flex">
            <span className="line"></span>
          </div>
        </div>
        
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators slide-icon">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="carousel-caption d-block">
                <div className="input-group container row justify-content-center mx-auto">
                  <img className="col-md-6 col-12 px-0 mb-md-0 mb-3 mr-0 mr-md-4" src="https://5xruby.tw/assets/images/testimoney/avatar/hana-4ae009cb.jpg" alt="First slide" />                
                  <div className="col-md-6 col-12 px-md-0 px-3 text-start user-recommend">
                    <p>慕凡和龍哥是業界數一數二的 Ruby 大師，他們不光是底子深厚，也很懂得引導、訓練學習路上遇到挫折的 Ruby/Rails 學子。很慶幸有他們的協助讓我進入紅寶石的美妙世界。</p>
                    <h4>Hana Chang</h4>
                    <h6>Co-Founder and CEO of BountyHunter</h6>
                  </div>
                </div>
              </div>              
            </div>
            <div class="carousel-item">
              <div class="carousel-caption d-block">
                <div className="input-group container row justify-content-center mx-auto">
                  <img className="col-md-6 col-12 px-0 mb-md-0 mb-3 mr-0 mr-md-4" src="https://5xruby.tw/assets/images/testimoney/avatar/victor-3ec52916.jpg" alt="Second slide" />
                  <div className="col-md-6 col-12 px-md-0 px-3 text-start user-recommend">
                    <p>Programmer 最有價值的是經驗值，「五倍紅寶石」的導師都是社群內數一數二的資深 Rubyist，由他們來帶領學員一探 Ruby 世界的神奇之處，實在是最佳選擇。</p>
                    <h4>Victor Lam</h4>
                    <h6>連續創業家，自由工作者</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="carousel-caption d-block">
                <div className="input-group container row justify-content-center mx-auto">
                  <img className="col-md-6 col-12 px-0 mb-md-0 mb-3 mr-0 mr-md-4" src="https://5xruby.tw/assets/images/testimoney/avatar/jason-e7e95cad.jpg" alt="Third slide" />
                  <div className="col-md-6 col-12 px-md-0 px-3 text-start user-recommend">
                    <p>Eddie and his team are of the most dedicated Ruby evangelists I have ever come across. With their passion and professionalism, Ruby learners will leapfrog in their progress.</p>
                    <h4>Jason Hs</h4>
                    <h6>founder of The Big Questions & TEDxTaipei</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="carousel-caption d-block">
                <div className="input-group container row justify-content-center mx-auto">
                  <img className="col-md-6 col-12 px-0 mb-md-0 mb-3 mr-0 mr-md-4" src="https://5xruby.tw/assets/images/testimoney/avatar/felix-d1d4db69.jpg" alt="Third slide" />
                  <div className="col-md-6 col-12 px-md-0 px-3 text-start user-recommend">
                    <p>還在尋找專業的 Ruby/Rails 師資嗎？別懷疑了，台灣最頂尖的 Rubyist 盡在「五倍紅寶石」！</p>
                    <h4>Felix Lin</h4>
                    <h6>dappei.com 「搭配」網站創辦人</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="carousel-caption d-block">
                <div className="input-group container row justify-content-center mx-auto">
                  <img className="col-md-6 col-12 px-0 mb-md-0 mb-3 mr-0 mr-md-4" src="https://5xruby.tw/assets/images/testimoney/avatar/johnsie-7322ca81.jpg" alt="Third slide" />
                  <div className="col-md-6 col-12 px-md-0 px-3 text-start user-recommend">
                    <p>選擇程式語言很重要，但選擇優秀的導師更重要！能跟擁有多年 Ruby/Rails 實戰經驗、活躍於社群的頂尖 Rubyist 學習，將一窺程式開發殿堂之藝術！我堅信：專業事讓專業的來，而專業的「五倍紅寶石」是寶藏，就等大家來挖掘。</p>
                    <h4>John Sie</h4>
                    <h6>Accuvally Inc.共同創辦人暨營運長</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="carousel-caption d-block">
                <div className="input-group container row justify-content-center mx-auto">
                  <img className="col-md-6 col-12 px-0 mb-md-0 mb-3 mr-0 mr-md-4" src="https://5xruby.tw/assets/images/testimoney/avatar/benlin-54e253f4.jpg" alt="Third slide" />
                  <div className="col-md-6 col-12 px-md-0 px-3 text-start user-recommend">
                    <p>「五倍紅寶石」的導師們都是業界經驗豐富的實戰高手，提供的課程及咨詢絕對能讓你大幅省去自行摸索的時間。</p>
                    <h4>Ben Li</h4>
                    <h6>連續創業家，自由工作者</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>         
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="works mb-5">
        <div className="title text-center py-5">
          <h4>案例作品 Showcase</h4>
          <div className="justify-content-center d-flex">
            <span className="line"></span>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 mb-3 mb-md-0">
              <div class="card h-100">
                <img class="card-img-top" src="https://5xruby.tw/assets/images/showcases/space_next_door-4dfdfeb6.png" alt="Card image cap" />
                <div class="card-body">
                  <h6 className="card-title">SpaceNextDoor</h6>
                  <p class="card-text">Space Next Door is inspired by the sharing economy in which we hope to encourage people to put up their unused space so that users looking for personal or business storage space have better options, closer to where they need it. We are striving to build a trusted community marketplace for you to list, discover and book the nearest and best space at affordable prices.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-3 mb-md-0">
              <div class="card h-100">
                <img class="card-img-top" src="https://5xruby.tw/assets/images/showcases/shopmatic_go-f7b86d46.png" alt="Card image cap" />
                <div class="card-body">
                  <h6 className="card-title">Shopmatic Go app</h6>                
                  <p class="card-text">Shopmatic Go is an exciting online platform where you can create a unique and comprehensive online store for your business, in a matter of minutes.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-3 mb-md-0">
              <div class="card h-100">
                <img class="card-img-top" src="https://5xruby.tw/assets/images/showcases/shopmatic-92ff9dcf.jpg" alt="Card image cap" />
                <div class="card-body">
                  <h6 className="card-title">跨境電子商務 Shopmatic</h6>                
                  <p class="card-text">Shopmatic manages the entire ecosystem for anyone wanting to sell online. We go the extra mile to ensure that we help you in every step of the process to grow your business online - from developing your own unique webstore, to listing you on marketplaces and social channels, to providing you insights on how to sell online.</p>
                </div>
              </div>
            </div>
            <div className="px-3 w-100 d-flex justify-content-end mt-4">
              <span className="more">..更多案例</span>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="know-about-us">
        <div className="title text-center py-5">
          <h4>想更瞭解我們嗎？</h4>
          <div className="justify-content-center d-flex">
            <p className="text">您可以看看<span>常見問題</span>或者直接<span>線上洽詢</span>，會有親切的客服人員回答您的問題，<br></br>也可以透過社群網站隨時關注我們的動態。</p>          
          </div>
          <div className="row justify-content-center mx-0">
            <div className="col-3 col-md-1">
              <img src="https://5xruby.tw/assets/images/index/icon/icon-fb-2f24e7a0.png"></img>
            </div>
            <div className="col-3 col-md-1">
              <img src="https://5xruby.tw/assets/images/index/icon/icon-twitter-89f8d087.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;