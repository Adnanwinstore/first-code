import React from 'react'
import { Spinner } from 'react-bootstrap'


function Loader() {
    return (
        <div>
            <Spinner 
            animation="border"
            role='status'
            className=" mt-4 mb-3 text-info"
            style={{
                height:"60px",
                width:"60px",
                margin: "auto",
                display:"block"
            }}>

                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loader
