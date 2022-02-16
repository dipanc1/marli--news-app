import React from 'react'

const Error = () => {
    return (
        <div className="text-center">
            <h2>Sorry Baby, This API Doesn't Work As of Now, I Love You &#10084;</h2>
            <h5>You Can Use Your Other Apps Meanwhile</h5>
            <ul className="list-unstyled my-3">
                <li className="ms-3 my-2">
                    <a className="text-decoration-none" href="https://marleen-weather.netlify.app" target={'_blank'} rel='noreferrer'>Marleen's Weather App</a>
                </li>
                <li className="ms-3 my-2">
                    <a className="text-decoration-none" href="https://marleen-quiz.netlify.app" target={'_blank'} rel='noreferrer'>Marleen's Quiz App</a>
                </li>
                <li className="ms-3 my-2">
                    <a className="text-decoration-none" href="https://marleen-google.netlify.app" target={'_blank'} rel='noreferrer'>Marleen's Google</a>
                </li>
                <li className="ms-3 my-2">
                    <a className="text-decoration-none" href="https://marleen-video-calling.netlify.app" target={'_blank'} rel='noreferrer'>Marleen's Video Calling App</a>
                </li>
                <li className="ms-3 my-2">
                    <a className="text-decoration-none" href="https://marleen-mappin.netlify.app" target={'_blank'} rel='noreferrer'>Marleen's Map Pin App</a>
                </li>
                <li className="ms-3 my-2">
                    <a className="text-decoration-none" href="https://marleen-travel.netlify.app" target={'_blank'} rel='noreferrer'>Marleen's Travel App</a>
                </li>
            </ul>
        </div>
    )
}

export default Error