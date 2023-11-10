import React from "react";

import "./index.css";

import { connect } from "react-redux";

import { actions } from "../../constant";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    isHint: false
  };
  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username.trim() === "" || password.trim() === "") {
      // 说明用户名密码为空，进行提示
      this.setState({
        isHint: true
      });
    } else {
      // 拿着用户名密码 发送action，判断用户名密码是否正确
      this.props.dispatch({
        type: actions.LOGIN,
        data: {
          username,
          password
        }
      });
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <>
        <div className="header">
          <div className="header-wrapper">书城</div>
        </div>
        <div className="login">
          <header className="login-header">
            <h1 id="login-title"> 登录</h1>
          </header>

          <div className="content">
            <div
              className={[
                "alert-error",
                this.state.isHint ? "show" : "hide"
              ].join(" ")}
            >
              <span className="kc-feedback-text">无效的用户名或密码。</span>
            </div>
            <div className="form">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username" className="control-label">
                    用户名
                  </label>
                  <input
                    id="username"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    type="text"
                    autoFocus=""
                    autoComplete="off"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="control-label">
                    密码
                  </label>
                  <input
                    id="password"
                    className="form-control"
                    name="password"
                    type="password"
                    autoComplete="off"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>

                <div id="form-buttons" className="form-group">
                  <input
                    className="btn btn-primary btn-block btn-lg"
                    name="login"
                    id="kc-login"
                    type="submit"
                    value="登录"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  componentWillUpdate(newProps) {
    // 根据传递过来的 status 来判断是否登录成功
    if (newProps !== this.props) {
      const { status, history } = newProps;
      if (status === 1) {
        // 登录成功
        history.replace("/list");
      } else if (status === 2) {
        // 登录失败，提示用户
        this.setState({
          isHint: true
        });
      }
    }
  }
}
const mapStateToProps = state => {
  return {
    ...state.user
  };
};
export default connect(mapStateToProps)(Login);
