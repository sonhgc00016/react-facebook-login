import React, { PropTypes } from 'react';
import styles from '../styles/facebook.scss';
import RefreshIndicator from 'material-ui/RefreshIndicator';

class FacebookLogin extends React.Component {

  static propTypes = {
    callback: PropTypes.func.isRequired,
    appId: PropTypes.string.isRequired,
    xfbml: PropTypes.bool,
    cookie: PropTypes.bool,
    scope: PropTypes.string,
    textButton: PropTypes.string,
    autoLoad: PropTypes.bool,
    size: PropTypes.string,
    fields: PropTypes.string,
    cssClass: PropTypes.string,
    version: PropTypes.string,
    language: PropTypes.string
  };

  static defaultProps = {
    textButton: 'Login with Facebook',
    scope: 'public_profile, email',
    xfbml: false,
    cookie: false,
    size: 'metro',
    fields: 'name',
    cssClass: 'kep-login-facebook',
    version: '2.5',
    language: 'en_US'
  };

  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      isLoading: true
    };
  }

  componentDidMount() {
    let fbRoot = document.createElement('div');
        fbRoot.id = 'fb-root';

    document.body.appendChild(fbRoot);

    if (window.FB) {
      this.setState({ isLoading: false });
    } else {
      window.fbAsyncInit = () => {
        FB.init({
          appId: this.props.appId,
          xfbml: this.props.xfbml,
          cookie: this.props.cookie,
          version: 'v' + this.props.version,
        });

        if (this.props.autoLoad) {
          FB.getLoginStatus(this.checkLoginState);
        }

        this.setState({ isLoading: false });
      };
    }

    // Load the SDK asynchronously
    ((d, s, id) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/' + this.props.language + '/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  checkLoginState = (response) => {
    if (response.authResponse) {
      this.setState({isFetching: false});
      this.props.callback({success: true, data: response.authResponse});
    } else {
      if (this.props.callback) {
        this.setState({isFetching: false});
        this.props.callback({success: false, data: response.authResponse});
      }
    }
  };

  click = () => {
    this.setState({ isFetching: true});
    FB.login(this.checkLoginState, { scope: this.props.scope });
  };

  render() {
    const myStyles = {
      iconFetching: {
        position: 'absolute',
        top: '4px',
        left: '30px'
      },
      iconFetchingBound: {
        display: 'inline-block',
        position: 'relative',
        backgroundColor: '#4C69BA',
        boxShadow: 'none'
      },
      btnFB: {
        minWidth: '250px',
        width: '25%',
        height: '52px'
      }
    };
    var iconFetching = <div style={myStyles.iconFetching}>
      <RefreshIndicator
        size={40}
        left={10}
        top={0}
        status="loading"
        loadingColor={'white'}
        style={myStyles.iconFetchingBound}
      />
    </div>;
    var textLogin;

    if (this.state.isFetching) {
      textLogin = <div style={{marginLeft: '40px'}}>Logging In...</div>;
    } else {
      iconFetching = this.state.isLoading ? iconFetching : '';
      textLogin = this.state.isLoading ? <div style={{marginLeft: '40px'}}>Loading...</div> : this.props.textButton;
    }

    var isDisabled = this.state.isLoading ? true : false;

    return (
      <div>
        <button style={myStyles.btnFB}
          disabled={isDisabled}
          className={this.props.cssClass + ' ' + this.props.size}
          onClick={this.click}>
          {iconFetching} {textLogin}
        </button>

        <style dangerouslySetInnerHTML={{ __html: styles }}></style>
      </div>
    );
  }
}

export default FacebookLogin;
