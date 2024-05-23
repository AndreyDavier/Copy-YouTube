import { FC } from "react";
import { Link } from "react-router-dom";

interface ScrollContainerProps {
    id: number,
    title: string
}

const ScrollContainer: FC = () => {
    const scrollContainerItems: ScrollContainerProps[] = [
        {
            id: 1,
            title: "Все"
        },
        {
            id: 2,
            title: "Видео игры"
        },
        {
            id: 3,
            title: "Музыка"
        }, {
            id: 4,
            title: "Сейчас в эфире"
        }
    ]

    return (
        <div>
            {scrollContainerItems.map(elem => (
                <Link to={`/${elem.id}`} key={elem.id}>
                    <span>{elem.title}</span>
                </Link>
            ))}
        </div>
    )
}
export default ScrollContainer