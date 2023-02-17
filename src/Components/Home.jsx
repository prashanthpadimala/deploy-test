import React from 'react'
import { AppItems } from '../JsonData/appData'

export default function Home({ selectedOption }) {
    return (
        <div>
            <h3>Home</h3>
            <div className='main-div'  >
                {AppItems.map((data, index) => (
                    <div key={data.id} className="main-child" onClick={() => { selectedOption(data) }}>
                        <h3>{data.name}</h3>
                        <p>{data.description}</p>
                    </div>
                ))}
            </div>

        </div >
    )
}
