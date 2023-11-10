import React from "react";

import { connect } from "react-redux";

import { actions } from "../../constant";


import "./index.css";

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <div className="content w">
          <ul>{this.renderList()}</ul>
        </div>
      </div>
    );
  }
  renderList = () => {
    const { data } = this.props;
    if (!data) {
      return null;
    }
    return data.map(item => {
      return (
        <li key={item.id}>
          <a
            title={item.title}
            className="pic"
            href="#"
            onClick={e => e.preventDefault()}
          >
            <img src={"http://127.0.0.1:7001" + item.img} alt={item.title} />
          </a>
          <p className="name" name="title">
            <a title={item.title} href="#" onClick={e => e.preventDefault()}>
              {item.title}
            </a>
          </p>
          <p className="price">
            <span className="now_price">{item.price}</span>
            <a
              className="default_price"
              style={{ textDecoration: "none" }}
              onClick={e => e.preventDefault()}
            >
              定价：
            </a>
            <span className="pre_price">{item.defaultPrice}</span>
            {item.e_price ? (
              <a href="#" className="e_price" onClick={e => e.preventDefault()}>
                <span>电子书：</span>
                <i>{item.e_price}</i>
              </a>
            ) : (
              ""
            )}
          </p>
          <p className="detail">{item.des}</p>
          <div className="shop_button">
            <p className="bottom_p">
              <a
                className="btn_cart"
                onClick={e => e.preventDefault()}
                href="#"
              >
                加入购物车
              </a>
              <a
                className="btn_cart"
                onClick={e => e.preventDefault()}
                href="#"
              >
                购买电子书
              </a>
              <a
                className="btn_collect"
                onClick={e => e.preventDefault()}
                href="#"
              >
                收藏
              </a>
            </p>
          </div>{" "}
        </li>
      );
    });
  };
  /**
   * 当我们挂载完毕的时候调用
   */
  componentDidMount() {
    // 发送异步的 action
    this.props.dispatch({
      type: actions.LIST
    });
  }

  componentDidUpdate(oldProps) {
    // 如果 返回的 status 是3 的话，我们应该跳转回login页面
    if (oldProps !== this.props) {
      const { status, history } = this.props;
      if (status === 3) {
        // 没有权限
        history.replace("/login");
      }
    }
  }
}
const mapStateToProps = state => {
  return {
    ...state.list
  };
};
export default connect(mapStateToProps)(List);
