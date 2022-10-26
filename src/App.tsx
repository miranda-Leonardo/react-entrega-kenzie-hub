import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./Routes";
import "./reset.css";
import "./normalize.css";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RoutesMain />
    </>
  );
}

export default App;
