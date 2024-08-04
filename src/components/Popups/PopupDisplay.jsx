// eslint-disable-next-line no-unused-vars
import React from 'react';
import { usePopup } from "../../context/PopupContext.jsx";
import Popup from "reactjs-popup";
import { AiOutlineClose } from "react-icons/ai";

function PopupDisplay() {
    const { message, clearPopup } = usePopup();

    if (!message) return null;

    return (
        <Popup open={!!message} className="!bg-transparent" onClose={() => clearPopup()} position="bottom center" modal nested>
            {(close) => (
                <div className="z-50">
                    <div
                        role="alert"
                        className={`relative flex w-[90%] mx-auto px-4 py-4 text-base text-white bg-gray-900 rounded-lg font-regular`}
                        // style={{ backgroundColor: message.bg_color || 'gray-900', color: message.color || 'white' }}
                    >
                        <div className="shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
                            </svg>
                        </div>
                        <div className="ml-3 mr-12">{message.message}</div>
                        <AiOutlineClose onClick={close} size={27} className="cursor-pointer active:scale-110" />
                    </div>
                </div>
            )}
        </Popup>
    );
}

export default PopupDisplay;
