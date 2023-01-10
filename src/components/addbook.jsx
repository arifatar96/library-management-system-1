import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
    //title,catrgories,authors,pageCount,shortDescription,longDescription,thumbnailUrl
    let [title,setTitle] = useState("")
    let [categories,setCategory] = useState("")
    let [authors,setAuthor] = useState("")
    let [pageCount,setPage] = useState("")
    let [shortDescription,setShort] = useState("")
    let [longDescription,setLong] = useState("")
    let [thumbnailUrl,setUrl] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) =>{
        e.preventDefault();
        //data to be posted
        let bookData = {title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl}
        //posting to server
        fetch('http://localhost:4000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert('book added successfully')
        navigate('/admin/book-list')
    }

    return (
        <div className="addBook">
            <h1 className="text-center">Add a book</h1>
            <div className="form container mb-5 text-center">
                <form action="" className="form-group" onSubmit={handleSubmit}>
                    <div className="title">
                        <input value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control my-3" type="text" required placeholder="title of the book" />
                    </div>
                    <div className="authors">
                        <input value={authors} onChange={(e)=>setAuthor(e.target.value)} className="form-control my-3" type="text" required placeholder="author of the book" />
                    </div>
                    <div className="categories">
                        <input value={categories} onChange={(e)=>setCategory(e.target.value)} className="form-control my-3" type="text" required placeholder="category of the book" />
                    </div>
                    <div className="pageCount">
                        <input value={pageCount} onChange={(e)=>setPage(e.target.value)} className="form-control my-3" type="number" required placeholder="page count of the book" />
                    </div>
                    <div className="shortDescription">
                        <textarea value={shortDescription} onChange={(e)=>setShort(e.target.value)} className="form-control my-3" placeholder="short description of the book" cols="30" rows="10"></textarea>
                    </div>
                    <div className="longDescription">
                        <textarea value={longDescription} onChange={(e)=>setLong(e.target.value)} className="form-control my-3" placeholder="long description of the book" cols="40" rows="10"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input value={thumbnailUrl} onChange={(e)=>setUrl(e.target.value)} className="form-control my-3" type="text" required placeholder="image of the book" />
                    </div>
                    <button className="btn btn-success btn-lg">Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;