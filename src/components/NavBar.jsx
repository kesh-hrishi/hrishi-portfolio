
import { Link } from 'react-scroll'

const NavBar = () => {

  

  const links=[
    {
      id:1,
      link:"home"
    },
    {
      id:2,
      link:"projects"
    },
  
    {
      id:3,
      link:"skills"
    },
    {
      id:4,
      link:"contact"
    },
  ]

  return (
    <div className="flex justify-between items-center w-full h-20 px-6 text-white bg-black fixed ">
        <div>
            <h1 className="text-3xl ml-2">Hrishi</h1>

        </div>
        <ul className="hidden md:flex">
          {links.map(({id,link})=>(
            <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-110 duration-200'>
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
           ))} 
        </ul>

        

    </div>
  )
}

export default NavBar