import { useState } from "react";

const Bookshelf = ()=> {
   
    const [books,setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ])

    const [newBooks,setNewBooks] = useState({
        title:"",
        author:""
    })

    const handleInputChange = (event)=> {
        console.log(event.target.value)
        setNewBooks({...newBooks,[event.target.name]:event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([...books,newBooks])
        setNewBooks({author:"",title:""})
        console.log("handleSubmit works!")
    }
   
    return (
    <>
    <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input
                    id="title"
                    name="title"
                    value={newBooks.title}
                    onChange={handleInputChange}
                ></input>
                <label htmlFor="author">Author: </label>
                <input
                    id="author"
                    name="author"
                    value={newBooks.author}
                    onChange={handleInputChange}
                ></input>
                <button type="submit">Submit Book</button>
            </form>
        </div>
    <div className="bookCardsDiv"></div>
    </div>
    <h3>Your Books</h3>
    <div className="bookCard">
        {books.map((book,index)=> {
            return (
                <ul key={index}>
                    <p>Author: {book.author}</p>
                    <p>Title: {book.title}</p>
                </ul>
            )
        })}
    </div>
    </>
   ) 
}

export default Bookshelf