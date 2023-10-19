import { getEmployee, deleteProduct } from "@/services/Productservice";
import Link from "next/link";
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import React, { useEffect, useState } from "react";

const Employee = () => {
    const [data, setData] = useState();
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [limit, setLimit] = useState(3)

    useEffect(() => {
        const getData = async () => {
            const getAllData = await getEmployee();
            setData(getAllData);
            
        };
        getData();
        console.log(data);
    }, [ data]);
    

    const handleDelete = async (id) => {
        const confirm = window.confirm("Are you sure to delete this country?")
        if (confirm) {
            try {
                await deleteProduct(id);
            } catch (error) {
                console.error('Error deleting country:', error);
            }
        }
    };


  return (
    <div>
     <div className="emp-bg">
            <div className="my-3">
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h1 className='display-6 mb-3'>Product List</h1>
                                </div>
                                <div>
                                    <Link className='btn btn-outline-primary btn-sm' href={"/product/Create"}>  Add Product</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className='d-flex justify-content-between my-3'>
                                <div>
                                   
                                </div>
                               
                            </div>
                            <div className='emp-table' >
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Product Name </th>
                                            <th>Description </th>
                                            
                                            <th>Price </th>
                                            <th>BarCode </th>
                                            <th>Sell Price</th>
                                            <th>Country Id</th>
                                            <th>Action</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                             data?.map((da, index) => {
                                                // const actualIndex = index + (currentPage * limit) + 1;
                                                
                                                return (
                                                    <tr key={index}>
                                                        <td> {index+1} </td>
                                                        <td> {da.productName} </td>
                                                        <td> {da.description} </td>
                                                        
                                                        <td> {da.price} </td>
                                                        <td> {da.barcode} </td>
                                                        <td> {da.sellPrice} </td>
                                                        <td> {da.countryId} </td>
                                                     
                                                        <td>
                                                            <Link href={`product/edit/${da.id}`} className='btn btn-sm me-3 btn-success'> Edit</Link>
                                                            <Link href={`product/details/${da.id}`} className='btn btn-sm me-3 btn-primary'> Details </Link>
                                                            <Button
                                                                className='btn btn-sm btn-danger'
                                                                onClick={() => handleDelete(da.id)}
                                                            >
                                                               Delete
                                                            </Button>
                                                        </td>

                                                    </tr>)
                                            }
                                            )
                                        }


                                    </tbody>

                                </Table>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Employee;
