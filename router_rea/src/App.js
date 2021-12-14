import './App.css';
// import { Route, Switch, Redirect } from 'react-router-dom'; //! router V5
import Welcome from './pages/Welcome'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import { Route, Routes, Navigate } from 'react-router-dom'; //! router V6



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <main>
        {/* <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path='/welcome'>
            <Welcome/>
          </Route>
          <Route path='/products' exact> //exact to stop matching
            <Products/>
          </Route>
          <Route path='/products/:prodictId'>
            <ProductDetail/>
          </Route>
        </Switch> */}

         <Routes> {/* //! V6 it always looks for exact matches by default */}
          
          {/* //! Push */}
          {/* <Route path="/" element={<Navigate to="/welcome"/>}/>  */}
          {/* //! Replace the current page */}
          <Route path="/" element={<Navigate replace to="/welcome"/>}/>

          {/* //! Make nested routes work */}
          <Route path='/welcome/*' element={<Welcome/>}/>
          {/* //TODO: Or just put the nested route in the parrent component 
            <Route path='/welcome/*' element={<Welcome/>}> 
              <Route path="new-user" element={<p>Welcome new user</p> />}
            </Route>
          */}


          <Route path='/products' element={<Products/>}/>
          {/* <Route path='/products/*' element={<Products/>}/> */}
          {/* //! Would still match the more exact route below*/}
          <Route path='/products/:prodictId' element={<ProductDetail/>}/>
          {/* //! Order does not matter in v6 */}
          {/* <Route path='/products/edit' element={<Edit/>}/>  */}
        </Routes>
      </main>
      </header>
    </div>
  );
}

export default App;
