import React from 'react'
import '../../style/home/home.less'

import {
  Link
} from "react-router-dom";
class Home extends React.Component<IProps, IState>{
  constructor(props) {
    super(props);
    this.detail = this.detail.bind(this);
    this.state = {
      swiperList: [
        { id: 1, value: '../../assets/img/2019-9-6.jpg' },
        { id: 2, value: '../../assets/img/2019-10-11.jpg' },
        { id: 3, value: '../../assets/img/2020-4-1.jpg' },
        { id: 4, value: '../../assets/img/2020-11-11-1.jpg' }
      ],
      recommendList: [
        { id: 'js防抖与节流的区别及实现', value: '../../assets/img/2019-9-6.jpg' },
        { id: 'js实现中文排序、分类。', value: '../../assets/img/2019-10-11.jpg' },
      ],
      concatList: [
        { id: 1, value: '../../assets/icon/Email.png' },
        { id: 2, value: '../../assets/icon/home.png' },
        { id: 3, value: '../../assets/icon/qq.png' },
        { id: 4, value: '../../assets/icon/weixin.png' }
      ],
      contentList: [

      ]
    }
  }
  componentDidMount() {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    this.getTechnologyShare();
  }
  getTechnologyShare() {
    const that = this;
    fetch('/getTechnologyShare', {
      method: "post",
      body: JSON.stringify({ key: '111', value: '2132' }) // must match 'Content-Type' header
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        that.setState({
          contentList: myJson
        })
        console.log(that.state.contentList);
      });
  }
  detail(key) {
  }
  render() {
    const swiper = this.state.swiperList;
    const recommendList = this.state.recommendList;
    const concatList = this.state.concatList;
    const contentList = this.state.contentList
    return (
      <div className="home">
        <div className="home_top">
          <div className="home_top_swiper">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {
                  swiper.map((item) => {
                    return <div className="swiper-slide"><img src={item.value} alt="" /></div>
                  })
                }
              </div>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
          <div className="home_top_recommend">
            {
              recommendList.map((item) => {
                return <div className="recommend_item">
                  <img src={item.value} alt="" />
                  <span>{item.id}</span>
                </div>
              })
            }
          </div>
          <div className="home_top_author">
            <span className="author_name">jameinfeng</span>
            <div className="author_detail">
              <span>职业：程序员，前端开发工程师，phper</span>
              <span>现居：湖北省-武汉市</span>
              <span>Email：987354940@qq.com</span>
            </div>
            <div className="concat_deatil">
              {
                concatList.map((item) => {
                  return <img src={item.value} alt="" className="icon" />
                })
              }
            </div>
          </div>
        </div>

        <div className="home_content">
          <div className="home_content_left">


            <div className="content_item">
              <div className="title">
                <span>技术分享</span>
              </div>
              <div className="recommend_content">
                {
                  contentList.map((item, key) => {
                    return <div className="recommend_content_item" onClick={this.detail.bind(this, key)} >
                      <Link to={'/detail/'+item.title} key={key}>
                        <img src={item.image} alt="" />
                        <span className="item_title">{item.title}</span>
                        <span className="item_desc">{item.contentdesc}</span>
                        <div className="item_footer">
                          <span className="item_footer_left">+文章阅读</span>
                          <div className="item_footer_right">
                            <img src="../../assets/icon/giveLike.png" alt="" />
                            <span>{item.support}</span>
                          </div>
                        </div></Link>

                    </div>
                  })
                }
              </div>
            </div>

            <div className="content_item">
              <div className="title">
                <span>技术分享</span>
              </div>
              <div className="recommend_content">
                {
                  contentList.map((item) => {
                    return <div className="recommend_content_item">
                      <img src={item.img} alt="" />
                      <span className="item_title">{item.title}</span>
                      <span className="item_desc">{item.desc}</span>
                      <div className="item_footer">
                        <span className="item_footer_left">+文章阅读</span>
                        <div className="item_footer_right">
                          <img src="../../assets/icon/giveLike.png" alt="" />
                          <span>20</span>
                        </div>
                      </div>
                    </div>
                  })
                }
              </div>
            </div>

          </div>

          <div className="home_content_nav">
            <div className="nav_item">
              <div className="title">
                <span>点击排行</span>
              </div>
              <ul className="nav_item_list">
                <li><span className="order">1</span><span className="item_title">Computed 和 Watch</span></li>
                <li><span className="order">1</span><span className="item_title">Computed 和 Watch</span></li>
                <li><span className="order">1</span><span className="item_title">Computed 和 Watch</span></li>
                <li><span className="order">1</span><span className="item_title">Computed 和 Watch</span></li>
              </ul>
            </div>

            <div className="nav_item">
              <div className="title">
                <span>点击排行</span>
              </div>
              <ul className="nav_item_list">
                <li><span className="order">1</span><span className="item_title">Computed 和 Watch</span></li>
                <li><span className="order">1</span><span className="item_title">Computed 和 Watch</span></li>
                <li><span className="order">1</span><span className="item_title">Computed 和 Watch</span></li>
                <li><span className="order">1</span><span className="item_title">Computed 和 Watch</span></li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    )
  }
}

export default Home