import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";

const Character = ({ name, imageUrl, birth, height, eyes }) => {
    const [showDetails, setShowDetails] = useState(false);
    const modalRef = useRef(null);
    const modalInstance = useRef(null);

    const handleShowDetails = () => {
        console.log("Mostrando modal...");
        setShowDetails(true);
    };

    useEffect(() => {
        if (showDetails && modalRef.current) {
            console.log("Inicializando modal...");

            if (!modalInstance.current) {
                modalInstance.current = new bootstrap.Modal(modalRef.current);
            }

            modalInstance.current.show();

            modalRef.current.addEventListener("hidden.bs.modal", () => {
                console.log("Modal cerrado.");
                setShowDetails(false);
            });
        }
    }, [showDetails]);

    return (
        <div className="card col-md-3 m-3" style={{ width: "18rem", backgroundColor: "gray" }}>
            <img
                className="card-img-top"
                src={imageUrl}
                alt="Card image cap"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <div className="card-body">
                <p className="card-text"><b>{name}</b></p>
                <button className="btn btn-primary" onClick={handleShowDetails}>
                    Details
                </button>

                <div className="modal fade" ref={modalRef} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-center">{name}</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
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
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Character;
