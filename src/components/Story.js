import React, { useState, useEffect, useRef } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import './Story.scss'

const Story = (props) => {
    const [pid, setPid] = useState(0)
    const [complete, setComplete] = useState(0)
    const [paused, setPaused] = useState(false)


    const getComplete = (i) => {
        if (i === pid){
            if (complete === 100){
                carouselInstance.current.next()
                setPid(pid + 1)
                setComplete(0)
            }
            return complete;
        }

        if (i < pid)
            return 100;
        return 0;
    }

    useEffect(() => {
        const progress = () => {
            if (paused === false){
                setComplete((oldComplete) => {
                    return Math.min(oldComplete + 1, 100)
                })
            }
        }

        const time = setInterval(progress, 30);

        return () => {
            clearInterval(time);
        }
    }, [paused])

    const carouselInstance = useRef(null)
    const carouselElement = useRef(null)

    useEffect(() => {
        carouselInstance.current = M.Carousel.init(carouselElement.current, {
            fullWidth: true,
            noWrap: true,
            duration: 0
        })

        return () => {
            carouselInstance.current.destroy()
        }
    }, [])

    const nextStory = () => {
        carouselInstance.current.next()
        setPid(old => Math.min(props.storyUrls.length, old + 1))
        setComplete(0)
    }

    const prevStory = () => {
        carouselInstance.current.prev()
        setPid(old => Math.max(0, old - 1))
        setComplete(0)
    }

    const pauseStory = () => {
        setPaused(true)
    }

    const unpauseStory = () => {
        setPaused(false)
    }

    const closeStory = () => {
        props.setStorySwitch(false)
    }


    return (
        <div className="story-wrapper">
            <div className="story">
                <div className="story-header collection">
                    <div class="collection-item avatar valign-wrapper">
                        <img src={props.avatarUrl} alt="" class="circle" />
                        <span class="title">{props.name}</span>
                        <span class="ml10">1h</span>
                        {paused && <a href="#home" class="pause white-text grey darken-2">paused</a>}
                        <a href="#!" class="secondary-content">
                            <div className="sprite more"></div>
                        </a>
                    </div>
                </div>

                <div className="story-progress">
                    {
                        props.storyUrls.map((url, indx) =>
                            <div class="progress grey" key={indx} style={{ width: (100 / props.storyUrls.length) + '%' }}>
                                <div class="determinate white" style={{ width: getComplete(indx) + '%' }}></div>
                            </div>
                        )
                    }

                </div>

                <div className="story-content">
                    <div ref = {carouselElement} class="carousel carousel-slider" onMouseDown = {pauseStory} onMouseUp = {unpauseStory}>
                        {
                            props.storyUrls.map((url, indx) => {
                                return <a key={indx} class="carousel-item" href="#index"><img alt="story" src={url}/></a>
                            })
                        }
                    </div>

                    <div class="sprite2 story-close" onClick = {closeStory}></div>
                    <div class="sprite2 story-prev" onClick = {prevStory}></div>
                    <div class="sprite2 story-next" onClick = {nextStory}></div>
                </div>
            </div>
        </div>
    )
}

export default Story;