import React from "react";

function Popup(props) {
    const classList = `popup popup_type_card ${props.link && 'popup_opened'}`;

    const handleEscape = (evt) => {
        if (evt.key === 'Escape') {
            props.onClose();
        }
        document.removeEventListener ('keydown', handleEscape)
    }

    React.useEffect(() => {
        document.addEventListener('keydown', handleEscape)
    }, [])

    return (
        <div className={classList}>
            <div className="popup__card-container">
                <img src={props.link} className="popup__card-photo" alt={props.link}/>
                <button className="popup__close popup__close_type_card" type="button"
                        aria-label="Закрыть" onClick={(evt) => {
                    props.onClose();
                    document.removeEventListener ('keydown', handleEscape)
                }}></button>
            </div>
        </div>
    )
}

export default Popup;