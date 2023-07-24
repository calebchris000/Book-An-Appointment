import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { useEffect } from "react";
import { setAuth } from "../../redux/authSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signupUser } from "../../redux/signup/signupSlice";

const Navbar = () => {
  const {isAuth} = useSelector((store) => store.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuth());
  }, [dispatch]);

  const handleLogout = () => {
    const data = {
      sign_in: false,
      end_point: 'users/sign_out',
      method_data: {
        method: 'DELETE',
        headers: {
          Authorization: localStorage.getItem('authToken'),
          'Content-Type': 'application/json',
        },
      },
    };
    dispatch(signupUser(data));
  };
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
          <Link className="links" to={"/reservations"} onClick={handleClick}>
            MY RESERVATIONS
          </Link>
          <Link className="links" to={"/addcars"} onClick={handleClick}>
            ADD CAR
          </Link>
          <Link className="links" to={"/deleteCar"} onClick={handleClick}>
            DELETE
          </Link>
          {isAuth && (
                <>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="btn btn-danger"
                  >
                    SignOut
                  </button>
                </>
              )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
