import React, { Component } from 'react'
import {Formik, Form , Field} from "formik"
import axios from "axios";

export default class Add extends Component {
    constructor (props){
        super(props);
        this.imageRef = React.createRef();
    }
    handleSubmit = (values, actions)=>{
        var formData = new FormData();
        Object.keys(values).forEach((key)=>{
            formData.append(key, values[key])
        })
        formData.append("image", this.imageRef.current.files[0]);
        axios.post("http://localhost:5000/menu/create", formData,{})
        .then((res) => {
            actions.setSubmitting(false);
            actions.resetForm();
            window.alert("Data Already Save!");
            console.log(res)
        })
        .catch((err)=>console.log(err));
    }
    render() {
        return (
            <Formik
            initialValues={{
                name:"",
                image:"",
                description:"",
                price:"",
            }}
            onSubmit={this.handleSubmit}
            render={(formProps)=>{
                return(
                    <Form>
                        <div className="container">
                            <div className="row justify-content-md-center">
                                <div className="col-sm-6">
                                    <div className="card" style={{width:"25rem"}}>
                                        <div className="card-body">
                                            <div className="form-group">
                                            <Field
                                             type="text"
                                             className="form-control"
                                             name="name"
                                             placeholder="name"
                                            />
                                            </div>
                                            <div className="form-group">
                                            <input
                                                type="file"
                                                className="form-control"
                                                name="imageUrl"
                                                ref={this.imageRef}
                                            />
                                            </div>
                                            <div>
                                            <Field
                                             type="text"
                                             className="form-control"
                                             name="description"
                                             placeholder="Description"
                                            />
                                        </div>
                                        <div>
                                            <Field
                                             type="text"
                                             className="form-control"
                                             name="price"
                                             placeholder="Price"
                                            />
                                        </div>
                                        <button
                                            className="btn btn-outline-primary"
                                            type="submit"
                                            onClick="clearform();"
                                            value="submit"
                                            disabled={formProps.isSubmitting}
                                        >
                                            Save
                                            </button>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )
            }}/>
        )
    }
}