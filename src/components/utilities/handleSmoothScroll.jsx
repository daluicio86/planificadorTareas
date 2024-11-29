"use client"

const handleSmoothScroll = (e) => {
    e.preventDefault();
    window.scrollTo({ behavior: 'smooth', top: 1000 });
};

export default handleSmoothScroll;