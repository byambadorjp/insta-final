import React, { useEffect, useRef, useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import './Post.scss'

const Post = ({ avatarUrl, postedUser, imgUrls }) => {
    const modalRef = useRef(null);
    const carouselRef = useRef(null)
    const carouselInstance = useRef(null);

    const [liked, setLiked] = useState(false);
    const [carouselIndex, setCarouselIndex] = useState(0);

    useEffect(() => {
        carouselInstance.current = M.Carousel.init(carouselRef.current, {
            fullWidth: true,
            indicators: imgUrls.length === 1 ? false : true,
            noWrap: false,
            noCycle: true
        });

        return () => {
            carouselInstance.current.destroy()
        }
    }, [])


    useEffect(() => {
        const instance = M.Modal.init(modalRef.current, {})

        return () => {
            instance.destroy()
        }
    }, [])

    return (
        <>
            <div class="article-title collection z-depth-1">
                <div class="collection-item avatar valign-wrapper">
                    <img src={avatarUrl} alt="" class="circle" />
                    <span class="title">{postedUser}</span>
                    <a href="#modal1" class="secondary-content modal-trigger">
                        <div class="sprite3 more"></div>
                    </a>
                </div>
            </div>
            <div class="article-content">
                <div ref={carouselRef} class="carousel carousel-slider">
                    {imgUrls.map((imgUrl) =>
                        <a class="carousel-item" href="#home"><img alt="" src={imgUrl} /></a>
                    )}
                </div>
                {carouselIndex !== 0 && <div class="sprite2 left-chevron" onClick={() => { carouselInstance.current.prev(); setCarouselIndex((p) => p - 1); }}></div>}
                {carouselIndex !== imgUrls.length - 1 && <div class="sprite2 right-chevron" onClick={() => { carouselInstance.current.next(); setCarouselIndex((p) => p + 1); }}></div>}
            </div>
            <div class="article-bottom z-depth-1">
                <div class="row article-actions">
                    <div class={liked ? "left sprite3 heart-red" : "left sprite3 heart"} onClick={() => { setLiked(p => !p) }}></div>
                    <div class="left sprite3 comment"></div>
                    <div class="left sprite3 share"></div>
                    <div class="right sprite3 bookmark"></div>
                </div>
                <p>Liked by <b>randanaprayuda</b> and <b>others</b></p>
                <span>18 HOURS AGO</span>
            </div>


            <div ref={modalRef} id="modal1" class="modal">
                <div class="modal-content">
                    <p>Report Inappropriate</p>
                    <p>Unfollow</p>
                    <p>Go to post</p>
                    <p>Cancel</p>
                </div>
            </div>
        </>
    )
}

export default Post;