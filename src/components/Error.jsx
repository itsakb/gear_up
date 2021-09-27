import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div className="Error">
            <h1>Oops!!</h1>
            <p>you have reached the wrong page</p>
            <br />
            <button className="Error-btn">
                <Link to="/">
                    Go back Home
                </Link>
            </button>
        </div>
    )
}