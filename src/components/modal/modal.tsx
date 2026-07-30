import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
    labelledBy?: string;
}

const Modal = ({ onClose, children, labelledBy }: ModalProps) => {
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', onKeyDown);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [onClose]);

    // Rendered via a portal directly under <body>: several ancestor sections use
    // backdrop-filter (see .customSection), which creates a new containing block
    // for position:fixed descendants in every browser. Without the portal, the
    // modal would be "trapped" inside whichever section it was opened from
    // instead of covering the full viewport.
    return createPortal(
        <div className="modalOverlay" onMouseDown={onClose} role="presentation">
            <div
                className="modalContent"
                role="dialog"
                aria-modal="true"
                aria-labelledby={labelledBy}
                onMouseDown={(e) => e.stopPropagation()}
            >
                <button className="modalContent__close" onClick={onClose} aria-label="Cerrar">
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;
