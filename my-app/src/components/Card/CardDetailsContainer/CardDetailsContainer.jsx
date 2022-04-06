import IMAGES from '../../../res/images'
import { useState } from 'react'

import CardDetailsButtonBar from '../CardDetailsButtonBar/CardDetailsButtonBar'

import { styles } from './style'
const { Container,
    Name_block,
    Name_block_header,
    Name_block_header_text,
    Name_block_header_text_block,
    Name_block_header_type,
    Place,
    Price,
    Price_block,
    Price_block_price,
    Price_block_square_rating,
    Price_block_price_square,
    Price_block_price_rating,
    About,
    Block_header,
    About_block,
    About_block_ul,
    About_block_ul_li,
    About_block_ul_title,
    About_block_ul_link,
    Description,
    Description_text,
} = styles;
// import { Link } from 'react-router-dom';


const CardDetailsContainer = ({ details }) => {
    const [drop1, setOpen1] = useState(true);
    const [drop2, setOpen2] = useState(true);

    const {
        id,
        name,
        price,
        location,
        favoriteNumber,
        viewNumber,
        // percentageText,
        description,
        objectDetails,
        // agentId,
        // coords,
        inFavorite,
        isNewHouse } = details;
    // Object details
    const { apartmentType,
        totalArea,
        distanceToSea,
        decorate,
        residentialComplexPath,
        residentialComplex,
        placeOnChessBoard,
        placeOnChessBoardPath,
        apartmentClass,
        deadlines } = objectDetails;

    const spaceInPriceValue = (priceValue) => {
        return priceValue.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    }
    const spacedPrice = spaceInPriceValue(price)
    const priceForSquareMeter = spaceInPriceValue(Math.trunc(price / totalArea))

    return (
        <Container>
            {/* Main name */}
            <Name_block>
                <Name_block_header>
                    <Name_block_header_text>
                        {name}

                        <Name_block_header_text_block>
                            {isNewHouse ?
                                <Name_block_header_type>Первичное жилье</Name_block_header_type>
                                :
                                <Name_block_header_type>Вторичное жилье</Name_block_header_type>}
                        </Name_block_header_text_block>
                    </Name_block_header_text>
                </Name_block_header>
            </Name_block>

            {/* Location */}
            <Place>{location}</Place>

            {/* Price */}
            <Price>
                <Price_block>
                    <Price_block_price>{spacedPrice} $</Price_block_price>
                    <Price_block_square_rating>
                        <Price_block_price_square>{priceForSquareMeter} $ за м² &nbsp;·&nbsp; </Price_block_price_square>
                        <Price_block_price_rating>Ниже рыночной</Price_block_price_rating>
                    </Price_block_square_rating>

                </Price_block>
                <CardDetailsButtonBar inFavorite={inFavorite} favoriteNumber={favoriteNumber} viewNumber={viewNumber} id={id} />
            </Price>

            {/* About object */}
            {/* <div className={style.about}>
                <h2 className={style.block_header}>Об объекте
                <img src={drop1 ? IMAGES.arrow_up : IMAGES.arrow_down}
                        onClick={() => setOpen1(drop1 === true ? false : true)}
                        alt="Arrow down icon" /></h2>
                {drop1 && <div className={style.about_block}>
                    <ul className={style.about_block_ul}>
                        <li>
                            <span className={style.about_block_ul_title}>
                                Тип недвижимости: &nbsp;</span>{apartmentType}</li>
                        <li>
                            <span className={style.about_block_ul_title}>
                                Общая площадь: &nbsp;</span>{totalArea} м²</li>
                        <li>
                            <span className={style.about_block_ul_title}>
                                Расстояние до моря: &nbsp;</span>{distanceToSea} м</li>
                        <li>
                            <span className={style.about_block_ul_title}>
                                Отделка: &nbsp;</span>{!decorate ? 'без отделки' : '-'}</li>
                    </ul>
                    <ul className={style.about_block_ul}>
                        <li>
                            <span className={style.about_block_ul_title}>
                                ЖК: &nbsp;</span>
                            <Link className={style.about_block_ul_link}
                                to={`${residentialComplexPath}`}>{residentialComplex}
                            </Link>
                        </li>
                        <li>
                            <span className={style.about_block_ul_title}>
                                Место на шахматке:  &nbsp;</span>
                            <Link className={style.about_block_ul_link}
                                to={`${placeOnChessBoardPath}`}>{placeOnChessBoard}
                            </Link>
                        </li>
                        <li>
                            <span className={style.about_block_ul_title}>
                                Класс дома: &nbsp;</span>{apartmentClass}</li>
                        <li>
                            <span className={style.about_block_ul_title}>
                                Срок сдачи: &nbsp;</span>{deadlines}</li>
                    </ul>
                </div>
                }
            </div> */}

            {/* Description */}
            {/* <div className={style.description}>
                <h2 className={style.block_header}>Описание
                <img src={drop2 ? IMAGES.arrow_up : IMAGES.arrow_down}
                        onClick={() => setOpen2(drop2 === true ? false : true)}
                        alt="Arrow down icon" /></h2>
                {drop2 && <p className={style.description_text}>{description}</p>}
            </div> */}
        </Container>
    )
}

export default CardDetailsContainer;