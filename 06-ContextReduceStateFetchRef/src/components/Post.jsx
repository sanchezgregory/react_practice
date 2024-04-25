import { useContext, useState } from "react"
import { PostContext } from "../contexts/PostContext"
import { initialPost } from "../constants/postsConstants"


export default function Post() {

    const {posts, createPost} = useContext(PostContext)
    const [post, setPost] = useState(initialPost)
    const {name, email, body} = post

    const handleAddPost = (name, value) => {
        setPost((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <>
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input type="text" name='name' defaultValue={name} onChange={(e) => handleAddPost(e.target.name, e.target.value)} />
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" name='email' defaultValue={email} onChange={(e) => handleAddPost(e.target.name, e.target.value)} />
                <label htmlFor="email">Email</label>
                <br />
                <input type="text" name='body' defaultValue={body} onChange={(e) => handleAddPost(e.target.name, e.target.value)}/>
                <label htmlFor="body">Body</label>
                <button onClick={() => createPost(post)}>Agregar post</button>
            </form>

            {posts && posts.length > 0 ? posts.map( (post,i) => (
                    // console.log(i, post.name)
                    <div key={i}> {i} || {post.name} || {post.email} || post.body</div>
                )) : 'nada'
            }   

        </>
    )
}