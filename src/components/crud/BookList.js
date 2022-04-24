import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {

    const [books, setBook] = useState([]);

    useEffect(() => {
        loadOrders();

    }, []);

    //get Books
    const loadOrders = async () => {
        debugger
        const result = await axios.get("https://localhost:44311/api/Book/getall");
        setBook(result.data);

    }

    //delete order item
    const deleteItem = async id => {
        debugger
        await axios.delete(`https://localhost:44311/api/Book/${id}`);
        loadOrders();
    }

    return (
        
        <div className="container">
            <div className="py-4">
                <div className="d-flex justify-content-between">
                    <h1>Orders</h1>
                    <Link className="btn btn-outline-primary" to="../create">
                        <span className="add-order-button-text">Add book</span>
                    </Link>
                </div>

                <table className="table table-striped table-hover order-table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">AuthorName</th>
                            <th scope="col">Date</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            books.map((book, index) => (  
                                
                                
                                <tr key={index}>
                                    
                                    <th scope="row">{index + 1}</th>
                                    <td>{book.name}</td>
                                    <td>{book.authorName}</td>
                                    <td>
                                        <Moment format="YYYY/MM/DD">{book.orderDate}</Moment>
                                    </td>
                                    <td>
                                    <Link className="btn btn-danger" to="" onClick={() => deleteItem(book.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default BookList;