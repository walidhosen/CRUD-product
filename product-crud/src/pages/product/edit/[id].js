import React,{ useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSingleProduct, updateProduct } from '@/services/Productservice';

const Edit = () => {
    const [data, setData] = useState({});
    const [country, setCountry] = useState();
    const [formdata, setFormData]= useState([]);
    const router = useRouter()
    let count = 0
    const id = router.query.id;

    useEffect(() => {
        const getData = async (id) => {
            try {
                const getAllData = await getSingleProduct(id);
                setData(getAllData);
             
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        if (id !== undefined) {
            getData(id);
        }
       

        getData()


    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // if (type === 'checkbox') {
        //     setData((prevData) => ({
        //         ...prevData,
        //         [name]: checked,
        //     }));
        // } else {
        //     setData((prevData) => ({
        //         ...prevData,
        //         [name]: value,
        //     }));
        // }
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            console.log(id)
            const proData = new FormData(e.target)
            const addEmp = await updateProduct(id, proData);
            router.push("/product")
        } catch (error) {
            console.error('Error adding country:', error);
        }
    }
  

    return (
        <div>
            <div>
            <>
                <div className='emp-bg'>
                    <section className="content">
                        <div className="container">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Edit Product</h3>
                                </div>
                                <form onSubmit={(e) => handleEdit(e)}>
                                    <div className="card-body">

                                        <input type="hidden" name="id" value={data.id} />
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <div className="row mb-2">
                                                    <label className="col-md-3 col-form-label" htmlFor="productname">Product Name</label>
                                                    <div className="col-md-9">
                                                        <input value={data.name} onChange={(e) => handleChange(e)} className="form-control" type="text" name="productname" />
                                                    </div>
                                                </div>
                                               

                                                <div className="row mb-2">
                                                    <label className="col-md-3 col-form-label" htmlFor="description">Description </label>
                                                    <div className="col-md-9">
                                                        <input value={data.description} onChange={(e) => handleChange(e)} className="form-control" type="text" name="description" />
                                                    </div>
                                                </div>

                                                

                                                <div className="row mb-2">
                                                    <label className="col-md-3 col-form-label" htmlFor="price">Price </label>
                                                    <div className="col-md-9">
                                                        <input value={data.price} onChange={(e) => handleChange(e)} className="form-control" type="text" name="price"/>
                                                    </div>
                                                </div>

                                                <div className="row mb-2">
                                                    <label className="col-md-3 col-form-label" htmlFor="barcode">Barcode </label>
                                                    <div className="col-md-9">
                                                        <input value={data.barcode} onChange={(e) => handleChange(e)} className="form-control" type="text" name="barcode"/>
                                                    </div>
                                                </div>

                                                <div className="row mb-2">
                                                    <label className="col-md-3 col-form-label" htmlFor="sellPrice">Sell Price </label>
                                                    <div className="col-md-9">
                                                        <input value={data.sellPrice} onChange={(e) => handleChange(e)} className="form-control" type="text" name="sellPrice"/>
                                                    </div>
                                                </div>

                                                <div className="row mb-2">
                                                    <label className="col-md-3 col-form-label" htmlFor="countryId">Country Id </label>
                                                    <div className="col-md-9">
                                                        <input value={data.countryId} onChange={(e) => handleChange(e)} className="form-control" type="text" name="countryId"/>
                                                    </div>
                                                </div>
 

                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className="card-footer">
                                        <div className="text-end">
                                            <button type="submit" className="btn btn-outline-primary btn-sm">
                                                <i className="far fa-save"></i> Edit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>

            </>
        </div>
        </div>
    );
};

export default Edit;