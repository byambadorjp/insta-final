import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Story from './components/Story'
import Post from './components/Post'
import StoryList from './components/StoryList'
import './App.scss'
// import stories from './data.js'
// import post from './post.js'
import 'materialize-css/dist/css/materialize.min.css'

// Firestore
import firestore from './firebase'

const App = () => {
    const [storySwitch, setStorySwitch] = useState(false)
    const [storyDT, setStoryDT] = useState({});


    const [posts, setPosts] = useState([]);
    const [stories, setStories] = useState([]);
    const listenForPosts = () => {
        firestore.collection("posts").onSnapshot((snapshot) => {
            const allPosts = [];
            snapshot.forEach((doc) => allPosts.push(doc.data()));

            setPosts(allPosts);
        }, (error) => console.error(error))
    }

    const listenForStories = () => {
        firestore.collection("stories").onSnapshot((snapshot) => {
            const allStories = [];
            snapshot.forEach((doc) => allStories.push(doc.data()));

            setStories(allStories);
        }, (error) => console.error(error))
    }

    useEffect(() => {
        listenForPosts();
        listenForStories();
    }, [])

    return (
        <>
            {
                storySwitch === true ?
                    // TRUE
                    <Story {...storyDT} setStorySwitch={setStorySwitch} /> :
                    // FALSE
                    <>
                        <Header />
                        <div class="row container">
                            <div class="col s12 hide-on-large-only">
                                <StoryList stories={stories} setStorySwitch={setStorySwitch} setStoryDT={setStoryDT} />
                            </div>
                            <div class="col s12 m12 l8">
                                {posts.map((post, indx) => <Post key={indx} {...post} />)}
                            </div>
                            <div class="col l4 hide-on-med-and-down">
                                <StoryList stories={stories} setStorySwitch={setStorySwitch} setStoryDT={setStoryDT} />
                            </div>
                        </div>

                    </>
            }
        </>
    )
}

export default App;
