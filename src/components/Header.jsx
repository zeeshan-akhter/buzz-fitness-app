import { NavLink } from "react-router-dom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <NavLink to="/">Buzz Fitness <FitnessCenterIcon fontSize="large" /></NavLink>
      </div>
      <div className="nav">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/exercises">Exercises</NavLink>
          <NavLink to="/goals">Goals</NavLink>
          <NavLink to="/calories-intake">Foods</NavLink>
        </nav>
      </div>
    </header>
  );
}
