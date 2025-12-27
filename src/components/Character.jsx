import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import CharacterDetailsModal from "./Character/characterDetailsModal.jsx";

const Character = ({ name, imageUrl, birth, height, eyes }) => {
    const [showDetails, setShowDetails] = useState(false);
    const modalRef = useRef(null);
    const modalInstance = useRef(null);

    const handleShowDetails = () => {
        console.log("Mostrando modal...");
        setShowDetails(true);
    };

    // Modal logic moved to CharacterDetailsModal

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
                <button 
                    className="btn" 
                    style={{ backgroundColor: '#FFD600', color: '#222', fontWeight: 'bold', border: 'none' }} 
                    onClick={handleShowDetails}
                >
                    Details
                </button>

                <CharacterDetailsModal
                    show={showDetails}
                    onClose={() => setShowDetails(false)}
                    name={name}
                    imageUrl={imageUrl}
                    birth={birth}
                    height={height}
                    eyes={eyes}
                    modalRef={modalRef}
                />
            </div>
        </div>
    );
};

export default Character;
