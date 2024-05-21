import { Link } from "react-router-dom"

function Home() {

  interface Video {
    id: number,
    title: string,
    author: string
  }

  const videos: Video[] = [{
    id: 1,
    title: "React0",
    author: "Andrey"
  },
  {
    id: 2,
    title: "React1",
    author: "Andrey"
  }, {
    id: 3,
    title: "React2",
    author: "Andrey"
  }, {
    id: 4,
    title: "React3",
    author: "Andrey"
  }, {
    id: 5,
    title: "React4",
    author: "Andrey"
  }]



  return (
    <>
      {videos.map(elem => (
        <Link to={`/home/${elem.id}`} key={elem.id}>
          <h3>{elem.title}</h3>
          <span>{elem.author}</span>
        </Link>

      ))}
    </>
  )
}

export default Home
