import Beach from "./well-beach/beach";
import {Posts} from "./posts/posts";
import {ActionType} from "../../../redux/store";
import {ConteinerPosts} from "./posts/posts-conteiner";
import {storeType} from "../../../index";

export type propsType = {
    posts: Array<post>
    dispatch: (action: ActionType) => void
    newPostText: string
}


type post = {
    img: string
    comment: string
}



function Well(props:  propsType) {
    return (
        <div>
            <Beach />
            <ConteinerPosts
                newPostText={props.newPostText}
                dispatch={props.dispatch}
                posts={props.posts}
            />
        </div>
    );
}

export default Well;