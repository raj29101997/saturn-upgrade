import React, { useEffect, useState } from 'react'
import BookIcon from '../assets/svg/BookIcon'
import GoogleMap from './GoogleMap'
import PropertyTitle from './PropertyTitle'
import PropertyBasicDetails from './PropertyBasicDetails'
import Ameneties from './Ameneties'

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

const PropertyDetails = () => {

    const [propertyData, setPropertyData] = useState({})
    const [previewImage, setPreviewImage] = useState({})
    const [images, setImages] = useState([])
    function handlePreviewImage(item) {
        console.log('item', item)
        setPreviewImage(item)
    }
    useEffect(() => {
        axios.get('http://localhost:4001/getData').then((result)=>{
            setPropertyData(result.data[0])
            setPreviewImage(dummyImgList[0])
            setImages(dummyImgList)
        })
    }, [])
    return (
        <div className='property-detail-container'>
            <div className="image-container">
                <div className="preview-image">
                    {
                        previewImage?.img && <img src={previewImage?.img} alt={previewImage.name} />
                    }
                </div>
                <div className="img-list">
                    {
                        images?.map(item => {
                            return (
                                <div className={"img-wrapper " + (item.name === previewImage?.name ? "activeImg" : "")} onClick={() => handlePreviewImage(item)} key={item.name} >
                                    <img className='slide-img' src={item.img} alt={item.name} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="detail-container">
                <PropertyTitle
                    title={propertyData.houseName}
                    description={propertyData.description}
                />
                <div className="detail-body">
                    <div className="property-info-container">
                        <PropertyBasicDetails {...propertyData} />
                        <Ameneties ameneties={propertyData?.amenities} ameQuantity={propertyData.amenitiesQuantity} />
                    </div>
                    <div className="map-container">
                        <GoogleMap />
                    </div>
                </div>
                <div className="action-container">
                    <div>
                        <button className='btn-alternate'>Chat Now</button>
                        <button className='btn-alternate'>Call Now</button>
                    </div>
                    <div>
                        <button className='btn-normal'>Schedule Site Visit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyDetails