import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        axios.get(`http://localhost:5000/posts/${id}`).then(result => {
            setPost(result.data);
        })
    }, [id]);

    return (
        <div>
            <h1>{post?.title}<br /><small>{post?.author}</small></h1>
            <p>{post?.body}</p>
            <div className="btn-group">
                <Link to={`/edit/${post?.id}`} className="btn btn-primary">
                    Edit <i className="fa fa-edit"></i>
                </Link>
                <Link to={`/delete/${post?.id}`} className="btn btn-danger">
                    Delete <i className="fa fa-trash"></i>
                </Link>
            </div>
        </div>
    );
}

export default PostDetails;