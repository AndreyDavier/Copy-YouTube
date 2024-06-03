import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./ScrollContainer.module.scss"



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
        }, {
            id: 5,
            title: "Джемы"
        }, {
            id: 6,
            title: "Экшен и приключения"
        }, {
            id: 7,
            title: "Недавно опубликованные"
        }, {
            id: 8,
            title: "Просмотрено"
        }, {
            id: 9,
            title: "Новое для вас"
        }

    ]

    return (
        <div>
            {scrollContainerItems.map(elem => (
                <Link className={styles["scrollContainerItems"]} to={`/${elem.id}`} key={elem.id}>
                    <span>{elem.title}</span>
                </Link>
            ))}
        </div>
    )
}
export default ScrollContainer