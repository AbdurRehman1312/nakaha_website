import React from 'react';
import * as images from '../assets';

const Whatsapp = () => {
    return (
        <div className="flex justify-between fixed bottom-5 right-5 z-50">
            <a
                href="https://wa.me/201141153153"
                target="_blank"
                rel="noreferrer"
                className="w-[50px] h-[50px] flex items-center justify-center bg-white p-2 rounded-full"
            >
                <img
                    src={images.whatsapp}
                    alt=""
                    className="w-full h-[100%] object-contain"
                />
            </a>
        </div>
    );
};

export default Whatsapp;
