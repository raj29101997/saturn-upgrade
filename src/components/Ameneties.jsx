import React from 'react'
import BookIcon from '../assets/svg/BookIcon'

const Ameneties = ({ ameneties, ameQuantity }) => {
    return (
        <div className="ameneties">
            <div className="title">
           
                {ameQuantity}
            </div>
            <div className="ameneties-list">
                {
                    ameneties?.map(item => {
                        return (
                            <div key={item} className='ameneties-item'>
                                <div className='icon'>
                                    <BookIcon />
                                </div>
                                <div className='ameneties-header'>
                                    {item}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Ameneties