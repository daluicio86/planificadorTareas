import React from 'react';
import SearchWidget from '../widgets/SearchWidget';
import PopularPostWidget from '../widgets/PopularPostWidget';
import TagsWidget from '../widgets/TagsWidget';
import Image from 'next/image';
import blogDetails1 from '@/public/assets/images/blog/blog-detials1.png'
import blogDetails2 from '@/public/assets/images/blog/blog-detials2.png'
import blogDetails3 from '@/public/assets/images/blog/blog-detials3.png'
import blogDetails4 from '@/public/assets/images/blog/blog-detials4.png'
import Link from 'next/link';
import SocialShare from '../utilities/SocialShare';
import blogTeam from '@/public/assets/images/blog/blog-team.png'
import BlogSlider from './BlogSlider';
import BlogComments from './BlogComments';
import BlogForm from '../form/BlogForm';
import handleSmoothScroll from '../utilities/handleSmoothScroll';


const BlogDetailsContent = ({ blogInfo }) => {
    const { title, month, date, comments, commentIcon, dateIcon, authorIcon, author } = blogInfo

    return (
        <>
            <div className="blog-details-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-12 mb-40">
                                    <div className="blog-details-box">
                                        <div className="blog-details-thumb">
                                            <Image src={blogDetails1} alt="image" />
                                        </div>
                                        <div className="blog-detaile-title">
                                            <h4>{title}</h4>
                                        </div>
                                        <div className="blog-details-meta">
                                            <span><i className={authorIcon}></i>By {author}</span>
                                            <span><i className={dateIcon}></i> {month} {date}</span>
                                            <span><i className={commentIcon}></i> ({comments})</span>
                                        </div>
                                        <div className="blog-details-discription">
                                            <p>{`Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var as sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown too`}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="blog-details-thumb">
                                            <Image src={blogDetails2} alt="image" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="blog-details-list">
                                            <ul>
                                                <li><i className="bi bi-check2-circle"></i> Find information and begin</li>
                                                <li className="active"><i className="bi bi-check2-circle"></i> We provide obtaining entry</li>
                                                <li><i className="bi bi-check2-circle"></i> Ut enim veniam, quis nostrud</li>
                                                <li><i className="bi bi-check2-circle"></i> Apply to travel, study, work or</li>
                                                <li><i className="bi bi-check2-circle"></i> Dolor in reprehenderit voluptate</li>
                                                <li><i className="bi bi-check2-circle"></i> Bunt in culpa qui officia</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-40">
                                    <div className="blog-details-box">
                                        <div className="blog-detaile-title">
                                            <h4>We Exist to Inspire the World to Play</h4>
                                        </div>
                                        <div className="blog-details-discription">
                                            <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var as sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown too</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="blog-details-thumb">
                                            <Image src={blogDetails3} alt="image" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="blog-details-thumb">
                                            <Image src={blogDetails4} alt="image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-40">
                                    <div className="blog-details-box">
                                        <div className="blog-detaile-title">
                                            <h4>Building smart business solution for you</h4>
                                        </div>
                                        <div className="blog-details-discription">
                                            <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var as sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown too</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="blog-quote-box">
                                        <div className="blog-quote-conent">
                                            <i className="fas fa-quote-right"></i>
                                            <p>{`Tosser argy-bargy mush loo at public school Elizabeth up the duff buggered chinwag on your bike mate don’t get shirty with me super, Jeffrey bobby Richard cheesed off spend a penny a load of old tosh blag horseTosser argy-bargy mush loo at public school Elizabeth up the duff buggered chinwag on your bike mate don’t get`}</p>
                                            <h4>Silvester Scot</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-40">
                                    <div className="blog-details-box">
                                        <div className="blog-detaile-title">
                                            <h4>The Passion to Unlock Potential</h4>
                                        </div>
                                        <div className="blog-details-discription">
                                            <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var as sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown too</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row line align-items-center">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="blog-details-tag">
                                            <h6>Tags</h6>
                                            <Link href="#" onClick={handleSmoothScroll}>Horse</Link>
                                            <Link href="#" onClick={handleSmoothScroll}>Business</Link>
                                            <Link href="#" onClick={handleSmoothScroll}>Breeding</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="ba-blog-details-social-icons">
                                            <SocialShare />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mt-30">
                                    <div className="blog-details-team-item">
                                        <div className="blog-team-thumb">
                                            <Image src={blogTeam} alt="image" />
                                        </div>
                                        <div className="blog-team-content">
                                            <h4><Link href="#" onClick={handleSmoothScroll}>Jonas Lawrence</Link></h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo in</p>
                                        </div>
                                        <div className="ba-blog-details-social-icons two">
                                            <SocialShare />
                                        </div>
                                    </div>
                                </div>
                                <BlogSlider />
                                <BlogComments />
                                <BlogForm />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <SearchWidget />
                            <PopularPostWidget />
                            <TagsWidget />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetailsContent;