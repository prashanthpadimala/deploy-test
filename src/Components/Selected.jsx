import React from 'react'

export default function Selected({ onEnter }) {
    const [userQuestion, setUserQestion] = React.useState("")
    const getData = (data) => {
        onEnter(userQuestion)
    }
    return (
        <div>
            <textarea
                cols={45}
                placeholder='Enter your Question'
                rows={10}
                className="text-area"
                onChange={(e) => { setUserQestion(e.target.value) }}
            />
            <div >
                <button className='submit-button' onClick={(e) => { getData(e) }} >Submit</button>
            </div>
        </div>
    )
}
