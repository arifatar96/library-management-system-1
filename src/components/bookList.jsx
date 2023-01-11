import { useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import ReadBook from "./readBook";
const BookList = () => {
    let [books, setBooks] = useState([])

    //to fetch the route value
    let location = useLocation()

    useEffect(() => {
        let fetchData = async () => {
            let reponse = await fetch('http://localhost:4000/books')
            let data = await reponse.json()
            setBooks(data)
        }
        fetchData()
    }, [books])

    //delete a book from server
    let handleDelete = (id, title) => {
        fetch(`http://localhost:4000/books/${id}`, {
            method: 'DELETE'
        });
        alert(`${title} will be deleted permanently`)
    }

    let navigate = useNavigate()
    let handleRead = (id) => {
       if (location.pathname == '/admin/book-list') {
        navigate(`/admin/book-list/${id}`)
       } else {
        navigate(`/user/book-list/${id}`)
       }
    }

    return (
        <div className="bookList">
            <h1 className="text-center">Book List: {books.length}</h1>
            <div className="books_group justify-content-center d-flex flex-wrap">
                {books.map(data => (
                    <div className="book m-3 p-2 card w-25">
                        <div className="image card-image card-header">
                            <img height='187' width='300' className='mx-2' src={data.thumbnailUrl} alt="book_cover_image" />
                        </div>
                        <div className="bookdata card-body">
                            <h2 className="card-title">{data.title}</h2>
                            <p>Authors: {data.authors}</p>
                            <p>Category: {data.categories}</p>
                            <p>PageCount: {data.pageCount}</p>
                            <div className="btns card-footer text-center">
                                <button className="btn btn-outline-primary mx-2" onClick={() => handleRead(data.id)}>Read More</button>
                                { location.pathname == '/admin/book-list' && <button className="btn btn-outline-danger mx-2" onClick={() => handleDelete(data.id, data.title)}>Delete</button> }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookList;