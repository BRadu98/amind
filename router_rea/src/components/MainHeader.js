import classes from './MainHeader.module.css'

const MainHeader = () => {
  //activeClassName={classes.active} -> v5 apply css classes to link when active
  //v6 router provides an argument to the function and executes it
  return (
    <header className="classes.header">
      <nav>
        <ul>
          <li>
            <NavLink className={(navData) => navData.isActive ? classes.active :''} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? classes.active :''} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}