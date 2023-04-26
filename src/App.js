import AllRoutes from "./Routes";
import { UserProvider } from './Contexts/UserContext';

// import components
function App() {
  return (
    <>
    <UserProvider>
     <AllRoutes/>
     </UserProvider>
     </>
  );
}

export default App;
