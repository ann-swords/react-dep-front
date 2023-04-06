import React, { useState } from 'react'

export default function AuthorCreateForm(props) {

    // based on what we return we add objects/ inside use state
    const [newAuthor, setNewAuthor] = useState({})

    const handleChnage = (event) =>{
        // based on the name field in the form
        const attributeToChange = event.target.name
        const newValue = event.target.value

        const author = {...newAuthor}
        // to create new object key value pairs
        author[attributeToChange] = newValue

        console.log(author)
        setNewAuthor(author)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.addAuthor(newAuthor)
    }


  return (
    <div>
        <h1>Create Author</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type='text' name='name' onChange={handleChnage}></input>
            </div>

            <div>
                <label>Email Address</label>
                <input type='text' name='emailAddress' onChange={handleChnage}></input>
            </div>

            <div>
                <label>Phone Number</label>
                <input type='text' name='phoneNumber' onChange={handleChnage}></input>
            </div>

            <div>
                <input type='submit' value="Add Author"></input>
            </div>
        </form>
    </div>
  )
}
