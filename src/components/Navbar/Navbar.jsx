import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { useEffect } from "react";
const Navbar = () => {
  useEffect(() => {
    const listener = window.addEventListener("resize", () => {
      const navbar = document.getElementsByClassName("container")[0];
      if (window.innerWidth > 560) {
        navbar.style.display = "block";
      }
    });
  }, []);

  function handleToggle() {
    const navbar = document.getElementsByClassName("container")[0];
    navbar.style.display === "block" ? (navbar.style.display = "none") : (navbar.style.display = "block");
  }
  return (
    <>
      <div className="hamburger-container">
        <GiHamburgerMenu className="hamburger" onClick={handleToggle} />
      </div>
      <div className="container">
        <div className="img_container">
          <img className="logo" src={Logo} alt="" />
        </div>
        <nav className="navbar">
          <Link className="links" to={"/"}>
            HOME
          </Link>
          <Link className="links" to={"/new_reservations"}>
            RESERVE
          </Link>
          <Link className="links" to={"/reservedCars"}>
            MY RESERVATIONS
          </Link>
          <Link className="links" to={"/addcars"}>
            ADD MOTORCYCLE
          </Link>
          <Link className="links" to={"/deleteCar"}>
            DELETE
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
