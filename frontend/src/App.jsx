import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import {Signup} from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/send" element={<SendMoney/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;






// import { Alluser } from "./coomponents/Alluser"
// import { Midbar } from "./coomponents/Midbar"
// import { Topbar } from "./coomponents/Topbar"
// import { Users } from "./coomponents/Users"

// function App() {

//   return (
//     <div>
//       <Topbar/>
//       <Midbar/>
//       <Users/>
//       <div className="p-4"> 
//         <Alluser userIcon={"U1"} userName={"User 1"}/>
//         <Alluser userIcon={"U2"} userName={"User 2"}/>
//         <Alluser userIcon={"U3"} userName={"User 3"}/>
//       </div>
      
//     </div>
//   )
// }

// export default App
