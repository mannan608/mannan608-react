import React from 'react'

const Circle = (props) => {
    return (

        <>
            <p className='progress-text'>{props.children}</p>
            <p className='progress-label'>{props.label}</p>
        </>
    )
}

export default Circle