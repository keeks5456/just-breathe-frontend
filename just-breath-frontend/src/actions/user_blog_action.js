
export const getAllBlogs = () =>{
    fetch(`http://localhost:3000/api/v1/blogs`)
    .then(res => res.json())
    .then(json => console.log(json))
}