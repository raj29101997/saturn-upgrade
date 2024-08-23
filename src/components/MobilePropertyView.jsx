import React, { useEffect, useState } from 'react'
import PropertyTitle from './PropertyTitle'
import "./PropertyDetail.css"
import PropertyBasicDetails from './PropertyBasicDetails'
import Ameneties from './Ameneties'
import GoogleMap from './GoogleMap'
import PropertyImageSlider from './PropertyImageSlider'
import image1 from '../assets/svg/img1.png'
import image2 from '../assets/svg/img2.png'
import image3 from '../assets/svg/img3.png'
import image4 from '../assets/svg/img4.png'
import axios from 'axios'

const dummyImgList = [
    {
        img:image1,
        name: "property1",
    },
    {
        img:image2,
        name: "property2",
    },
    {
        img:image3,
        name: "property3",
    },
    {
        img:image4,
        name: "property4",
    },
]

const MobilePropertyView = () => {
    const [propertyData, setPropertyData] = useState({})
    const [images, setImages] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4001/getData').then((result)=>{
            setPropertyData(result.data[0])
            setImages(dummyImgList)
        })
    }, [])

    return (
        <div className='detail-page-container'>
            <div className='title-header'>
                <div className='lux'>
                    LUXURY
                </div>
                <div className='en-btn'>
                    <button className='btn-enq'>Enquire Now</button>
                </div>
            </div>
            <div className='top-section'>
                <PropertyImageSlider imgList={images} />
                <PropertyTitle
                    title={propertyData?.houseName}
                    description={propertyData?.description}
                />
                <PropertyBasicDetails {...propertyData} />
            </div>
            <div className='bottom-section'>
                <div className='action-btn'>
                    <button className='btn-alternate'>Know More</button>
                    <button className='btn-normal'>Schedule Site Visit</button>
                </div>
                <Ameneties ameneties={propertyData?.amenities} />
                <div className="map-container">
                    {/* <GoogleMap /> */}
                </div>
            </div>
        </div>
    )
}

export default MobilePropertyView