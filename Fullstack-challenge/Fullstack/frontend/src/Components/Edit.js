import React, { useRef, useState, useEffect } from "react"
import {Formik, Form , Field} from "formik"
import axios from "axios"

const Edit = props => {
    // const URL = `http://localhost:5000/menu/edit`;
    const [data, setData] = useState({});
    let imageRef = useRef();
    useEffect(() => {
        const URL = `http://localhost:5000/menu/show/:id`;
        axios
          .get(URL)
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      const onSubmit = (data) => {
        const formData = new FormData();
    
        for (const [key, value] of Object.entries(data)) {
          formData.append(key, value);
        }
    
        const image = imageRef.current.files;
        if (image && image[0]) formData.append("image", image[0], image[0].name);
    
        axios
          .put(`http://localhost:5000/menu/edit/:id`, formData, {})
          .then((res) => {
            window.alert("Your picture menu already changed");
          })
          .catch((err) => {
            console.log(err);
          });
      };
      return(
        <Formik
        initialValues={{
            name:"",
            image:"",
            description:"",
            price:"",
        }}
        onSubmit={(onSubmit)}
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
export default Edit

// const ganti = (id) => {
//     const menu = data.find(item => {
//         return item.id === id
//     })
//     if (menu) {
//         const name = window.prompt('Name', menu.name);
//         const address = window.prompt('Address', menu.address);
//         const email = window.prompt('Email', menu.email);
//         const phone = window.prompt('Phone', menu.phone);
//         const company = window.prompt('Company', menu.Company);
//         axios.put(`http://localhost:5000/menu/edit/${id}`, {
//             name,
//             address,
//             email,
//             phone,
//             company
//         });
//     }
// }
// export default ganti;