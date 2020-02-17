import React from 'react'
import './StoryList.scss'


const StoryList = ({ stories, setStorySwitch, setStoryDT}) => {

    const clicked = (story) => {
        setStorySwitch(true)
        setStoryDT(story)
    }

    return (
        <div class="story-list">
            <div class="collection z-depth-1">
                <div class="main-title"> Stories </div>

                {
                    stories.map((story, indx) =>
                        <div class="collection-item avatar" onClick = {() => {clicked(story)}}>
                            <img src={story.avatarUrl} alt="" class="circle" />
                            <b class="title">{story.name}</b>
                            <p class="time">{Math.round(Math.random() * 24)} HOURS AGO</p>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default StoryList;