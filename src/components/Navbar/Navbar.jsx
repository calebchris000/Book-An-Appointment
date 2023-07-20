import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { useEffect } from "react";
const Navbar = () => {
  useEffect(() => {
    window.addEventListener("resize", () => {
      const navbar = document.getElementsByClassName("container-nav")[0];
      if (window.innerWidth > 768) {
        navbar.style.display = "block";
      }
    });
  }, []);

  function handleClick(e) {
    document.querySelectorAll(".links").forEach((item) => {
      item.style.backgroundColor = "white";
      item.style.color = "black";
      item.classList.remove("selected");
    });
    // e.target.style.backgroundColor = "#6fb900";
    // e.target.style.color = "#fff";
    e.target.classList.add("selected");
  }

  function handleToggle() {
    const navbar = document.getElementsByClassName("container-nav")[0];
    navbar.style.display === "block" ? (navbar.style.display = "none") : (navbar.style.display = "block");
  }
  return (
    <>
      <div className="hamburger-container">
        <GiHamburgerMenu className="hamburger" onClick={handleToggle} />
      </div>
      <div className="container-nav">
        <div className="img_container">
          <img className="logo" src={Logo} alt="" />
        </div>
        <nav className="navbar">
          <Link className="links selected" to={"/"} onClick={handleClick}>
            HOME
          </Link>
          <Link className="links" to={"/reservation_form"} onClick={handleClick}>
            RESERVE
          </Link>
          <Link className="links" to={"/reservedCars"} onClick={handleClick}>
            MY RESERVATIONS
          </Link>
          <Link className="links" to={"/addcars"} onClick={handleClick}>
            ADD MOTORCYCLE
          </Link>
          <Link className="links" to={"/deleteCar"} onClick={handleClick}>
            DELETE
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
