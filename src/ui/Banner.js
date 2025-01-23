import React from 'react'

export default function Banner() {
    return (
        <div className="Banner">
            <div className="cta">
                <div>
                    <h1>Dynamic Learning Path</h1>
                    <div className="desc">
                        <p>Create learning paths for _VOIS employees<br />
                            Choose your path and let's get started!</p>
                    </div>
                </div>
                <div><input type="button" className="cta-btn" value="CTA" /></div>
            </div>
            <div className="image"></div>
        </div>
    )
}
