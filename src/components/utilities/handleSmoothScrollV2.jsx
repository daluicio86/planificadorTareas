"use client"
const handleSmoothScrollV2 = (e) => {
    e.preventDefault();
    window.scrollTo({ behavior: 'smooth', top: 2500 });
};

export default handleSmoothScrollV2;