import { useNavigate } from 'react-router-dom';
import setAvatar from '../Service/SetAvatar';
import updateNickname from '../Service/UpdateNickname';
import '../Styles/EditProfile.css';
import logo from '../assets/logo/logo.png'
export default function EditProfile(){
    const navigate = useNavigate();
    function setAvatarTemp(){
        const avatar = document.getElementById("input-avatar");
        document.getElementById("edit-avatar-src").src = URL.createObjectURL(avatar.files[0]);
    }
    async function submit(){
        let response;
        const avatar = document.getElementById("input-avatar");
        if(avatar.files[0] != undefined){
            response = await setAvatar(avatar);
        }
        const nickname = document.getElementById("input-nickname").value;
        if(nickname === "" || nickname == null){
            if(response.code == 200){
                navigate("/profile", {replace: true})
            }
            return;
        }
        response = await updateNickname(nickname);
        if(response.code == 200){
            navigate("/profile", {replace: true})
        }
    }
    return(
        <div className="edit-container">
            <div className='edit-avatar'>
                <img id='edit-avatar-src' src={logo} alt=''></img>
            </div>
            <label htmlFor='input-avatar'>Tải lên avatar</label>
            <input id='input-avatar' type='file' onChange={setAvatarTemp} accept=".jpg, .jpeg, .png" hidden></input>
            
            <label htmlFor='input-nickname'>Nickname</label>
            <input id='input-nickname' type='text'></input>
            <button type='button' onClick={submit}>Sửa</button>
        </div>
    )
}