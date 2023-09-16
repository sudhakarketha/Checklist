import React from 'react'

import './Main.css'
import Setting from './Setting'
import Subscription from './Subscription'

const Main = () => {
    return (
        <div>
            <div className='body'>
                <div className='background'></div>
                <div className='box1'>
                    <Setting />
                </div>
                <div className='box2'>
                    <Subscription />
                </div>
            </div>
        </div>
    )
}

export default Main