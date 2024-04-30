import { Modal as ModalBs } from 'react-bootstrap';

const Modal = ({ statusModal, onHideModal, children }) => {

    return (
        <ModalBs show={statusModal}>
            <ModalBs.Header closeButton onClick={onHideModal}>
                <ModalBs.Title>Your Products</ModalBs.Title>
            </ModalBs.Header>
            <ModalBs.Body>
                {children}
            </ModalBs.Body>

        </ModalBs>
    );
}

export default Modal