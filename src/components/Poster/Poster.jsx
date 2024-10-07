import { useState } from "react";


function Poster() {

    const [formData, setFormData] = useState({
        title: "",
        content: "",
        id: 16
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    
    return (
        <>
        <form>
            <label htmlFor="content"></label>
            <input
            id="content"
            type="text"
            value={formData.content}
            onChange={handleChange}
            >
            </input>
            <button>Post</button>
        </form>
        </>
    )

}

export default Poster