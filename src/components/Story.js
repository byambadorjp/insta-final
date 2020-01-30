import React, { useState, useEffect } from 'react'
import './Story.scss'

const Story = (props) => {
    const [pid, setPid] = useState(0)
    const [complete, setComplete] = useState(0)


    const getComplete = (i) => {
        if (i == pid){
            if (complete == 100){
                setPid(pid + 1);
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
            setComplete((oldComplete) => {
                return Math.min(oldComplete + 1, 100)
            })
        }

        const time = setInterval(progress, 30);

        return () => {
            clearInterval(time);
        }
    }, [])


    return (
        <div className="story-wrapper">
            <div className="story">
                <div className="story-header collection">
                    <div class="collection-item avatar valign-wrapper">
                        <img src={props.avatarUrl} alt="" class="circle" />
                        <span class="title">{props.name}</span>
                        <span class="ml10">1h</span>
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
            </div>
        </div>
    )
}

export default Story;