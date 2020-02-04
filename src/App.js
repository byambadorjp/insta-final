import React, {useState} from 'react'
import Header from './components/Header'
import Story from './components/Story'
import Post from './components/Post'
import StoryList from './components/StoryList'
import './App.scss'
import stories from './data.js'
import post from './post.js'
import 'materialize-css/dist/css/materialize.min.css'

const App = () => {
    const [story, setStory] = useState(false)
    const [storyDT, setStoryDT] = useState({});

    return (
        <>
        {
            story == true ? 
                // TRUE
                <Story {...storyDT} setStory={setStory}/> :
                // FALSE
                <>
                    <Header/>

                    <div class="row container">
                        <div class="col s12 m12 l8">
                            <Post {...post[0]}/>
                            <Post {...post[1]}/>
                            <Post {...post[2]}/>
                        </div>
                        <div class="col l4">
                            <StoryList stories={stories} setStory = {setStory} setStoryDT = {setStoryDT}/>
                        </div>
                    </div>
 
                </>
        }
        </>
    )
}

export default App;
