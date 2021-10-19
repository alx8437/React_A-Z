import React from 'react';
import '../styles/Post.css'

const PostItem = () => {
    return (
        <div className="post">
            <div className="post_content">
                <strong>JavaScript - язык программирования</strong>
            </div>
            <div className="post_btn">
                <button className="btn">Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;