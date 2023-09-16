import React from 'react'

const Subscription = () => {
    return (
        <div>
            <div className='subscribe'>
                <h2>How would you like the subscribe to help?</h2>
                <p>We'll recommend the right plan for you</p>
                <div className='check'>
                    <div className='check-item'>
                        <input type="checkbox" id='checkbox'/>
                        <label htmlFor="">To job search with confidence</label>
                    </div>
                    <div className='check-item'>
                        <input type="checkbox" id='checkbox'/>
                        <label htmlFor="">To develope my proficional skills</label>
                    </div>
                    <div className='check-item'>
                        <input type="checkbox" id='checkbox'/>
                        <label htmlFor="">To grow my network or manage my reputation</label>
                    </div>
                    <div className='check-item'>
                        <input type="checkbox"  id='checkbox'/>
                        <label htmlFor="">To find leads more effectively</label>
                    </div>
                    <div className='check-item'>
                        <input type="checkbox" id='checkbox' />
                        <label htmlFor="">To find and hire talent faster</label>
                    </div>
                    <div className='buttons'>
                        <button className='btn skip'>skip</button>
                        <button className='btn next'>Next</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Subscription