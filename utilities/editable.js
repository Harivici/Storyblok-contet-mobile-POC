import React, { useEffect, useRef } from 'react';
import { Platform, View } from 'react-native';
const Editable = ( props ) => {
    const el = useRef();
    useEffect( () => {
        el.current.outerHTML = props.text;
    }, [] );
    return (
        <View ref={el}/>
    );
};

export default Editable;