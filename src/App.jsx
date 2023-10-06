import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import { ErrorPage } from "./pages/ErrorPage";
import Exercise from "./pages/Exercise";
import Foods from "./pages/Foods";
import Goals from "./pages/Goals";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function App() {
  const error = useSelector((state) => state?.error);
  if (error) {
    toast.error(error?.message ?? "Something went wrong");
  }
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercise />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/calories-intake" element={<Foods />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Toaster
          position="bottom-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 1300,
            style: {
              background: "#111",
              color: "#fff",
              border: "1px solid ",
            },
            success: {
              duration: 1300,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      </main>
      <footer>
        Made with {"❤️"} by Zeeshan Akhter {"|"}
        <NavLink to="" target="_blank" title="Github link">
          Github
        </NavLink>
        {" | "}
        <NavLink to="" target="_blank" title="Replit link">
          Replit
        </NavLink>
      </footer>
    </div>
  );
}

export default App;
