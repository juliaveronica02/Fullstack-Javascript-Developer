import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const CreatePost = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/posts', data).then(result => {
            props.history.push("/");
        })
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Posting</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" className="form-control" name="title" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.title && 'Invalid Title'}</small>
                        </div>
                        <div className="form-group">
                            <label>Autor</label>
                            <input type="text" className="form-control" name="author" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.author && 'Invalid Autor'}</small>
                        </div>
                        <div className="form-group">
                            <label>Comment</label>
                            <textarea name="body" cols="30" rows="10" className="form-control" ref={register({ required: true })}></textarea>
                            <small className="form-text text-danger">{errors.body && 'Invalid Comment'}</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;