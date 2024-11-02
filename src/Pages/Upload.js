import logo from '../assets/logo/logo.png'
import '../Styles/Upload.css'
import uploadSong from '../Service/UploadSong';
import { useNavigate } from 'react-router-dom';
export default function Upload(){
    const navigate = useNavigate();
    function setAvatar(){
        const thumbnail = document.getElementById("input-thumbnail");
        document.getElementById("upload-thumbnail-src").src = URL.createObjectURL(thumbnail.files[0]);
    }
    async function submit(){
        const thumbnail = document.getElementById("input-thumbnail");
        const audio = document.getElementById("input-audio");
        const name = document.getElementById("input-name").value;
        if(thumbnail.files[0] === undefined || audio.files[0] === undefined || name === "" || name == null){
            alert("Bạn cần điền đầy đủ thông tin trước khi tải lên!");
            return;
        }
        const response = await uploadSong(name, thumbnail, audio);
        if(response.code === 200){
            navigate('/', {replace: true});
        }else{
            alert("loi")
        }
    }
    return(
        <div className="upload-container">
            <div className='upload-thumbnail'>
                <img id='upload-thumbnail-src' src={logo} alt=''></img>
            </div>
            <label htmlFor='input-thumbnail'>Tải lên ảnh bìa</label>
            <input id='input-thumbnail' type='file' onChange={setAvatar} accept=".jpg, .jpeg, .png" hidden></input>
            <label htmlFor='input-audio'>Tải lên bài hát</label>
            <input id='input-audio' type='file'></input>
            <label htmlFor='input-name'>Tên bài hát</label>
            <input id='input-name' type='text'></input>
            <button type='button' onClick={submit}>Đăng</button>
        </div>
    )
}