import ReactPlayer from 'react-player';
import style from './style.module.scss';

export const Video = ({url}: {url:any}) => { 
    return (
        
        <div className={style.videoBox}>
         <ReactPlayer width="100%" height="100%" url={url} />
        </div>
    )
}