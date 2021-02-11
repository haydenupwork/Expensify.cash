import React from 'react';
import {StackActions, getStateFromPath, getActionFromState} from '@react-navigation/native';
import ROUTES from '../ROUTES';
import linkingConfig from './NavigationContainer/linkingConfig';

export const navigationRef = React.createRef();
export const routerRef = React.createRef();
export const modalRef = React.createRef();

function navigate(route) {
    console.debug('Navigating to route: ', route);

    const state = getStateFromPath(route, linkingConfig.config);
    const action = getActionFromState(state, linkingConfig.config);

    navigationRef.current?.dispatch(action);

    if (route === ROUTES.HOME) {
        window.history.pushState({}, 'Expensify.cash', '/');
    } else {
        window.history.pushState({}, 'Expensify.cash', route);
    }
}

function goBack() {
    navigationRef.current?.goBack();
}

function dismissModal() {
    navigationRef.current?.dispatch(StackActions.popToTop());
    navigationRef.current?.goBack();
}

export default {
    navigate,
    goBack,
    dismissModal,
};
