import React from 'react';
import Items from './Item';


export default class News extends React.Component {
    
    render () { 
        console.log('RENDER');
        return (          
            <div>
                <Items />
            </div>
        )
    }
}