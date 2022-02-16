import { useNavigate } from 'react-router-dom'
import BioPage from "./BioPage";

function BandCard({ bandName, album, genre, img, id, band }) {
    let navigate = useNavigate();

    function onClick() {
        console.log(bandName)
        navigate(`/bands/${id}`)
        return (
            <BioPage
                key={id}
                bandName={bandName}
                band={band}
            />
        )
    }

    return (
        <div className="band-div">
            <h2>{bandName}</h2>
            <div className="artist-line"></div>
            <>
            </>
            <img onClick={onClick} className="band-img" src={img} />
            <h4 style={{ marginTop: '-5px' }} >{album}</h4>
            <h6 style={{ marginTop: '-10px' }}><em> {genre} </em></h6>
        </div>
    )
}

export default BandCard