import React, { Fragment, useState } from 'react';

const TodoInput = () => {

    const [ description, setDescription ] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();
        try{
            const body = { description };
            const response = await fetch('http://localhost:5000/api/todo', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)

            })
            window.location = "/";
        }catch(err){
            console.error(err.message);
        }
    }

    return (
        <Fragment>
                <h1 className="text-center mt-5">MERN TODO LIST</h1>
                <form className="d-flex mt-4" onSubmit={submitForm} >
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                    <button className="btn btn-primary">Add</button>
                </form>
        </Fragment>
    )
}

export default TodoInput;