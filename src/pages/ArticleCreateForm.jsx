import Profile from "../components/Profile";
import Grid from "../components/Grid";
import GridImage from "../components/GridImage";
import {useState} from "react";
import axios from "axios";

const ArticleCreateForm = ()=>{
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState();

    const handleSubmit = (e) =>{
    e.preventDefault();
    const formDate = new FormData();
    formDate.append("title", title);
    formDate.append("content", content);
    formDate.append("file", file);
    axios.post("https://gallery.devhudi.xyz/index.html/album/create/article", formDate, {
        header: {
            "Content-type": "multipart/form-data"
        }
    }).then(    ()=>{
        setTitle("")
        setContent("")
        setFile(undefined);
    });

    }

    const handleTitle = (e)=>{
        setTitle(e.target.value);
        console.log(title);
    }

    const handleContent = (e) =>{
        setContent(e.target.value);
    }

    const handleFile = (e) =>{
        e.preventDefault();
        setFile(e.target.files[0]);
    }

    return (
        <div>
            <form method="post">
                <input name="title" onChange={handleTitle} value={title}/><br/>
                <input name="content" onChange={handleContent} value={content}/><br/>
                <input type="file" name="image" onChange={handleFile} value={file}/>
                <input type="submit" onClick={handleSubmit}/>
            </form>
        </div>
    );
};
export default ArticleCreateForm;
