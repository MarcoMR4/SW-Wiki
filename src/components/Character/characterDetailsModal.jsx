import { useEffect, useRef } from "react";
import { Modal } from "bootstrap";

const CharacterDetailsModal = ({
    show,
    onClose,
    name,
    imageUrl,
    birth,
    height,
    eyes,
    modalRef
}) => {
    // Persist modal instance and handler
    const modalInstanceRef = useRef(null);
    const handlerRef = useRef(null);

    useEffect(() => {
        const modalNode = modalRef.current;
        if (!modalNode) return;

        // Create modal instance once
        if (!modalInstanceRef.current) {
            modalInstanceRef.current = new Modal(modalNode);
        }

        // Handler for closing
        if (!handlerRef.current) {
            handlerRef.current = () => onClose();
        }

        // Add event listener once
        modalNode.addEventListener("hidden.bs.modal", handlerRef.current);
        return () => {
            modalNode.removeEventListener("hidden.bs.modal", handlerRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (show && modalRef.current && modalInstanceRef.current) {
            modalInstanceRef.current.show();
        }
    }, [show, modalRef]);

    return (
        <div className="modal fade" ref={modalRef} tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
                <div
                    className="modal-content"
                    style={{
                        backgroundColor: '#0a0a23',
                        color: 'white',
                        opacity: 0.95
                    }}
                >
                    <div className="modal-header">
                        <h5 className="modal-title text-center">{name}</h5>
                    </div>
                    <div className="modal-body">
                        <img
                            src={imageUrl}
                            alt="Image details"
                            style={{ width: "300px", height: "300px", objectFit: "cover" }}
                        />
                        <br />
                        <p><b>Birth:</b> {birth}</p>
                        <p><b>Height:</b> {height}</p>
                        <p><b>Eyes:</b> {eyes}</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            style={{
                                backgroundColor: 'yellow',
                                color: 'black',
                                fontWeight: 'bold',
                                border: 'none'
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetailsModal;
