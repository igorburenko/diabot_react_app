import React from "react";

import "./authentication.css"
// import FacebookLogin from 'react-facebook-login';

export default class Authentication extends React.Component {


    render() {
        // FB.getLoginStatus(function(response) {
        //     statusChangeCallback(response);
        //     console.log(response);
        // });
        // const responseFacebook = (response) => {
        //     this.props.authData(response)
        // };
        // const {loggedIn} = this.props;
        let classNameAuthentication = 'authentication';
        // if (loggedIn) {
        //     classNameAuthentication += ' active';
        // }
        return (<div className={classNameAuthentication}>
                {/*<FacebookLogin*/}
                {/*    appId="1205130476352392"*/}
                {/*    autoLoad={true}*/}
                {/*    fields="name,email,picture"*/}
                {/*    callback={responseFacebook}*/}
                {/*    cssClass="my-facebook-button-class"*/}
                {/*    render={renderProps => (*/}
                {/*        <button onClick={renderProps.onClick}>This is my custom FB button</button>*/}
                {/*    )}*/}
                {/*/>*/}
                {/*<div className="fb-login-button" data-width="" data-size="large" data-button-type="login_with"*/}
                {/*     data-auto-logout-link="false" data-use-continue-as="false">*/}

                {/*</div>*/}
                </div>

        )
    }
}