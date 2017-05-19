import React from 'react';
import { connect } from "react-redux"

import { checkMsg, msgStore } from "../actions/commonActions"
import { getUserInfo, settingsStore, setFullnameStore, setCityStore, setStateStore, setUsernameStore, saveSettings } from "../actions/settingsActions"

import SettingsForm from '../components/Settings.jsx'
import { Grid, Row, Col } from 'react-bootstrap';

@connect((store, ownProps) => {
    return {
        user: store.auth.user,
        router: ownProps.router,
        settings: store.settings.obj
    };
})
export default class Settings extends React.Component {
    componentWillMount() {
        let newThis = this;

        if(!this.props.user) {
            this.props.router.push('/');
        }
        getUserInfo(this.props.user, function(data) {
            newThis.props.dispatch(settingsStore(data));
        });

    }

    changeFullname(value){
        this.props.dispatch(setFullnameStore(value.target.value));
    }

    changeCity(value){
        this.props.dispatch(setCityStore(value.target.value));
    }

    changeUsername(value){
        //console.log('change username', value.target.value);
        this.props.dispatch(setUsernameStore(value.target.value));
    }

    changeState(value){
        this.props.dispatch(setStateStore(value.target.value));
    }

    chlickSave() {
        let newThis = this;
        saveSettings(this.props.settings, function(data) {
            checkMsg(function(msg) {
                if(msg) {
                    //console.log('msg view', msg);
                    newThis.props.dispatch(msgStore(msg));
                }
            });
        });
    }

    render() {
        return (
            <Grid>
                <SettingsForm
                    obj={this.props.settings}
                    changeFullname={this.changeFullname.bind(this)}
                    changeCity={this.changeCity.bind(this)}
                    changeUsername={this.changeUsername.bind(this)}
                    changeState={this.changeState.bind(this)}
                    chlickSave={this.chlickSave.bind(this)}
                />
            </Grid>
        )
    }
}