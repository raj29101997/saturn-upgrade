import React from 'react'
import useMobile from '../hooks/useMobile'
const BoldDetails = ({
    price,
    pricePerSqFt,
    plotSize,
    area
}) => {
    return (
        <>
            <div className='detail-box'>
                <div className='box-header text-gold'>
                    {price}
                </div>
                <div className="box-subheader">
                    {pricePerSqFt}
                </div>
            </div>
            <div className='detail-box'>
                <div className='box-header text-gold'>
                    Plot Size
                </div>
                <div className="box-subheader">
                    {plotSize}
                </div>
            </div>
            <div className='detail-box'>
                <div className='box-header text-gold'>
                    Area
                </div>
                <div className="box-subheader">
                    {area}
                </div>
            </div>
        </ >
    )
}
const SmallDetails = ({
    totalUnits,
    projectType,
    status
}) => {
    return (
        <>
            <div className='detail-box'>
                <div className='box-header'>
                    Total Units
                </div>
                <div className="box-subheader">
                    {totalUnits}
                </div>
            </div>
            <div className='detail-box'>
                <div className='box-header'>
                    Project type
                </div>
                <div className="box-subheader">
                    {projectType}
                </div>
            </div>
            <div className='detail-box'>
                <div className='box-header'>
                    Status
                </div>
                <div className="box-subheader">
                    {status}
                </div>
            </div>
        </>
    )
}
const PropertyBasicDetails = ({
    price,
    pricePerSqFt,
    plotSize,
    area,
    totalUnits,
    projectType,
    status
}) => {
    const isMobile = useMobile()
    return (
        <div className="property-info">
            {
                !isMobile ?
                    <>
                        <div className='bold-details'>
                            <BoldDetails
                                {...{
                                    price,
                                    pricePerSqFt,
                                    plotSize,
                                    area
                                }}
                            />
                        </div>
                        <div className='small-details'>
                            <SmallDetails
                                {...{
                                    totalUnits,
                                    projectType,
                                    status
                                }}
                            />
                        </div>
                    </>
                    :
                    <>
                        <BoldDetails
                            {...{
                                price,
                                pricePerSqFt,
                                plotSize,
                                area
                            }}
                        />
                        <SmallDetails
                            {...{
                                totalUnits,
                                projectType,
                                status
                            }}
                        />
                    </>

            }
        </div>
    )
}

export default PropertyBasicDetails