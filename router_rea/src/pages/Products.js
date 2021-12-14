// import { Link, useHistory } from 'react-router-dom'
import { Link, useNavigate} from 'react-router-dom'


const Products = () => {
  //!V5
  // const history = useHistory()
  // history.push()
  // history.replace()

  //!V6
  // const navigate = useNavigate()
  //  in a useEffect/http req finished etc
  // navigate('/welcome') //push
  // navigate(-1) //go to prev page //-2 or forward 1
  // navigate('/welcome', {replace:true}) //redirect

  return (
    <section>
      <h1>Products page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A book</Link>
        </li>
        <li>
          <Link to="/products/p2">A pen</Link>
        </li>
        <li>
          <Link to="/products/p3">A hat</Link>
        </li>
      </ul>
    </section>
  )
}