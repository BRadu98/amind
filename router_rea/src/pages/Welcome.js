import { Route, Routes, Link } from 'react-router-dom'

//TODO: import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  //! v6, wrap the route/s in a routes comp
  //h1 would be loaded for /welcome
  //p whould be loaded only for /welcome/new-user
  //? In v6 paths of nested routes are relative to parent routes,
  //? => new-user path becomes active only if route starts with /welcome
  //! The link path would also be relative
  //! no more to=`${match.url}/comments` for nested link/route

  return (
    <section>
      <h1>New user</h1>
      {/* //!V5
      <Link to="/welcome/something">Something</Link>
      <Route path="welcome/new-user">
        <p>Welcome, new user</p>
      </Route> */}

      {/* //! V6 */}
      <Link to="something">Something</Link>
      <Routes>
      <Route path="new-user" element={<p>Welcome, new user</p>}/>
      </Routes>

      {/* //TODO: Or just put the nested route in the parrent component */}
      {/* //TODO: </Outlet> */} {/*To let nested component know where to insert nested content */}
    </section>
  )
}