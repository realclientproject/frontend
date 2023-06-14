import AllRoutes from "./Routes";
import { AuthContextProvider } from "./Contexts/AuthContext";

// import components
function App() {
  return (
    <>
      <AuthContextProvider>
        <AllRoutes />
      </AuthContextProvider>
    </>
  );
}

export default App;