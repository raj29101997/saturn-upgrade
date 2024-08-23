import Modal from 'react-bootstrap/Modal';
import PropertyDetails from '../components/PropertyDetails';
import { CloseICon } from '../assets/svg/CloseICon';

function PropertyModal(props) {
    return (
        <Modal
            // size="lg"
            show={props.open}
            onHide={props.onClose}
            aria-labelledby="example-modal-sizes-title-lg"
            centered
            contentClassName="property-container"
            dialogClassName="dialog-container"
        >
            <Modal.Body className='modal-body-container'>
                <div className='closeicon'>
                    <CloseICon onClick={props.onClose} />
                </div>
                <PropertyDetails />
            </Modal.Body>
        </Modal>
    );
}

export default PropertyModal;