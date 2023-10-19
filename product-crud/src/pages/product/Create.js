
import { addEmployee } from '@/services/Productservice';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Create = () => {
    const router = useRouter();
    const [formdata, setFormData] = useState([]);
    
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const data = new FormData(e.target)
            const addEmp = await addEmployee(data);
            e.target.reset()
            router.push("/product")
        } catch (error) {
            console.error('Error adding:', error);
        }


    }

    return (
        <div>
            <div className='emp-bg'>
                <section className="content">
                    <div className="container">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Add New Product</h3>
                            </div>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="card-body">

                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <div className="row mb-2">
                                                <label className="col-md-3 col-form-label" htmlFor="productName"> Product Name</label>
                                                <div className="col-md-9">
                                                    <input onChange={(e) => handleChange(e)} className="form-control" type="text" name="productName" />
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <label className="col-md-3 col-form-label" htmlFor="description">Description</label>
                                                <div className="col-md-9">
                                                    <input onChange={(e) => handleChange(e)} className="form-control" type="text" name="description" />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label className="col-md-3 col-form-label" htmlFor="rating">Rating </label>
                                                <div className="col-md-9">
                                                    <input onChange={(e) => handleChange(e)} className="form-control" type="text" name="rating" />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label className="col-md-3 col-form-label" htmlFor="price">Price </label>
                                                <div className="col-md-9">
                                                    <input onChange={(e) => handleChange(e)} className="form-control" type="text" name="price" />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label className="col-md-3 col-form-label" htmlFor="barcode">BarCode</label>
                                                <div className="col-md-9">
                                                    <input onChange={(e) => handleChange(e)} className="form-control" type="text" name="barcode" />
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <label className="col-md-3 col-form-label" htmlFor="sellPrice">Sell Price</label>
                                                <div className="col-md-9">
                                                    <input onChange={(e) => handleChange(e)} className="form-control" type="text" name="sellPrice" />
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <label className="col-md-3 col-form-label" htmlFor="countryId">Country Id</label>
                                                <div className="col-md-9">
                                                    <input onChange={(e) => handleChange(e)} className="form-control" type="text" name="countryId" />
                                                </div>
                                            </div>
                                            {/* <div className="row mb-2">
                                            <label className="col-md-3 col-form-label" htmlFor="countryId">Country Name</label>
                                            <div className="col-md-9">
                                                <select onChange={(e) => loadState(e)} className="form-control" data-val="true" name="countryId">
                                                    <option value="">Select Country</option>
                                                    {
                                                        countries.data != undefined && countries.data.map((cou, index) => <option value={cou.id} key={index}> {cou.name} </option>)
                                                    }
                                                </select>
                                                <span className="text-danger field-validation-valid" ></span>
                                            </div>
                                        </div> */}


                                        </div>

                                    </div>
                                </div>

                                <div className="card-footer">
                                    <div className="text-end">
                                        <button type="submit" className="btn btn-outline-primary btn-sm">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Create;