import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Create = () => {


    const [name, setName] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [page, setPage] = useState('');
    const [price, setPrice] = useState('');
    const onSubmit = async e => {
      
        e.preventDefault();
        let data = {name,authorName,page,price};
        const response = await axios.post("https://localhost:44311/api/Book/Create", data);

        
        localStorage.setItem("user-info",JSON.stringify(response.data.data))
    };
    return (
        <div className="container">
        <div className="row justify-content-center">
            <form className='login-form' onSubmit={e => onSubmit(e)}> 
                <div className="form-outline mb-4 mt-3">
                    <input type="text" required  className="form-control" placeholder='duzeldin bunlari' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-outline mb-4">
                    <input type="text" required  className="form-control" placeholder='Password' onChange={(e) => setAuthorName(e.target.value)} />
                </div>
                <div className="form-outline mb-4">
                    <input type="number" required  className="form-control" placeholder='Password' onChange={(e) => setPage(parseInt(e.target.value))} />
                </div>
                <div className="form-outline mb-4">
                    <input type="number" required  className="form-control" placeholder='Password' onChange={(e) => setPrice(parseInt(e.target.value))} />
                </div>
                <button className="btn btn-primary btn-block mb-4">Sign in</button>
            </form>
        </div>
    </div>
    )
}
export default Create;

