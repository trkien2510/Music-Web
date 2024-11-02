import '../Styles/Search.css'
import MusicItem from '../Component/MusicItem';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import searchSong from '../Service/SearchSong';
export default function Search() {
    const [searchParam] = useSearchParams();
    const name = searchParam.get("name");
    const [data, setData] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            const tempData = await searchSong(name);
            setData(tempData);
        }
        fetchData()
    },[data])
    return(
        <div className="search-container">
            {data.data?.map((item, index) =>{
                        return (
                            <MusicItem key={index} id={item.id} name={item.name} releaseDate={item.releaseDate} username={item.artist.username} nickname={item.artist.nickname}></MusicItem>
                        )
                    })

            }
        </div>
    )
}