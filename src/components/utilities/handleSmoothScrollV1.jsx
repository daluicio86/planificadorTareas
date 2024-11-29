"use client"
const handleSmoothScrollV1 = (e) => {
    e.preventDefault();
    window.scrollTo({ behavior: 'smooth', top: 1700 });
};

export default handleSmoothScrollV1;