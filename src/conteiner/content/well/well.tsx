import Beach from "./well-beach/beach";
import {Posts} from "./posts/posts";

export type propsType = {
    posts: Array<post>
    addPost: (text: string) => void
    newPostText: string
    changeNewpostText: (newText: string)=>void
}


type post = {
    img: string
    comment: string
}



function Well(props:  propsType) {
    return (
        <div>
            <Beach />
            <Posts
                changeNewpostText={props.changeNewpostText}
                newPostText={props.newPostText}
                addPost={props.addPost}
                posts={props.posts}
            />
        </div>
    );
}

export default Well;