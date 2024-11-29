import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleBlogV2 = ({ blog }) => {
    const { id, animation, blogSpace, thumb, title2, date, month, author, comments, authorIcon, commentIcon, btnText, btnIcon2 } = blog

    return (
        <>
            <div className={`blog-single-box style-two ${animation} ${blogSpace}`}>
                <div className="blog-thumb">
                    <Image src={`/assets/images/blog/${thumb}`} width={415} height={330} alt="image" />
                </div>
                <div className="blog-content style-two">
                    <div className="blog-meta style-two">
                        <div className="blog-meta-date">
                            <h5>{date}</h5>
                            <span>{month}</span>
                        </div>
                        <div className="blog-meta-info">
                            <span><i className={authorIcon}></i>By {author}</span>
                            <span><i className={commentIcon}></i>Comment ({comments})</span>
                        </div>
                    </div>
                    <div className="blog-title style-two">
                        <h4><Link href={`/blog-details/${id}`}>{title2}</Link></h4>
                    </div>
                    <div className="blog-bottom">
                        <div className="blog-btn style-two">
                            <Link href={`/blog-details/${id}`}>{btnText}</Link>
                        </div>
                        <div className="blog-icon">
                            <Link href={`/blog-details/${id}`}><i className={btnIcon2}></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogV2;