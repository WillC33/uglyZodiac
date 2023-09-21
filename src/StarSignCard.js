import React, {useEffect, useState} from 'react';
import {useStarSignContext} from "./StarSignContext";
import {aries, aquarius, leo, cancer, libra, gemini, virgo, pisces, scorpio, taurus, sagittarius, capricorn} from './assets';

const StarSignCard = () => {
    const { starSign } = useStarSignContext();
    const [image, setImage] = useState();

    useEffect(() => {
        //TODO: SUBOPTIMAL!!!
        switch (starSign?.name) {
            case 'Aries':
                setImage(aries);
                break;
            case 'Taurus':
                setImage(taurus);
                break;
            case 'Gemini':
                setImage(gemini);
                break;
            case 'Cancer':
                setImage(cancer);
                break;
            case 'Leo':
                setImage(leo);
                break;
            case 'Virgo':
                setImage(virgo);
                break;
            case 'Libra':
                setImage(libra);
                break;
            case 'Scorpio':
                setImage(scorpio);
                break;
            case 'Sagittarius':
                setImage(sagittarius);
                break;
            case 'Capricorn':
                setImage(capricorn);
                break;
            case 'Aquarius':
                setImage(aquarius);
                break;
            case 'Pisces':
                setImage(pisces);
                break;
            default:
                setImage(null);
                break;
        }
    }, [starSign]);


    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={starSign?.name} />
            </div>
            <div className="card-content">
                <h2>{starSign?.name}</h2>
                <p>{starSign?.description}</p>
            </div>
        </div>
    );
}

export default StarSignCard;
