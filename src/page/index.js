import React from 'react';
import {NavComponent} from '../components/nav.js';
import {TipsComponent} from '../components/tips.js';

class IndexPage extends React.Component{
    constructor(props) {
        super(props);
    }


  
    render(){
        return (
            <div>
                <NavComponent/>
                <TipsComponent/>
            </div>
        )
    }
}
export {IndexPage};
