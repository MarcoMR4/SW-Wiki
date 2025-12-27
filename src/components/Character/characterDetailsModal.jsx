import React, { useEffect } from "react";

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
    useEffect(() => {
        if (show && modalRef.current) {
            // @ts-ignore
            const modalInstance = new window.bootstrap.Modal(modalRef.current);
            modalInstance.show();
            const handler = () => onClose();
            modalRef.current.addEventListener("hidden.bs.modal", handler);
            return () => {
                modalRef.current?.removeEventListener("hidden.bs.modal", handler);
            };
        }
    }, [show, modalRef, onClose]);

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
