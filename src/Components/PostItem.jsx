import React from 'react';
import '../styles/Post.css'

const PostItem = (props) => {

    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.post.id}. {props.post.title}</strong>
            </div>
            <div className="post_body">
                {props.post.body}
            </div>
            <div className="post_btn">
                <button className="btn">Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;