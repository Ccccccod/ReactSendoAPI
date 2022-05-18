import React, { useEffect, useState } from "react";

import style from './JumpToTopBtn.module.css'

function JumpToTopBtn() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible)
    })

    return (
        <div
            onClick={scrollToTop}
            style={{ display: visible ? 'inline-flex' : 'none' }}
            className={style.btn}
        >
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" class="icon_30C7"><path d="M10.667 14.667h4v13.333h2.667v-13.333h4l-5.333-5.333-5.333 5.333zM5.333 4v2.667h21.333v-2.667h-21.333z"></path></svg>
        </div>
    );
}

export default JumpToTopBtn;
