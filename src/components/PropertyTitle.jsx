import React from 'react'

const PropertyTitle = ({ title, description }) => {
    return (
        <div className="detail-header">
            <div className="title">
                {title}
            </div>
            <div className="description">
                {description}
            </div>
        </div>
    )
}

export default PropertyTitle