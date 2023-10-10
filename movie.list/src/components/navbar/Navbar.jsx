import Search from "../search/Search";
function Navbar() {
  return (
    <>
      {/* Bootstrap navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img
              src="https://bg-so-1.zippyimage.com/2023/10/09/991d71224ecb272db0f05e79c402f8f0.png"
              alt="Logo"
              className="image-logo"
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://github.com/ViniciusGGabriel"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/vin%C3%ADcius-gabriel-pereira-leit%C3%A3o/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
            <Search />
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
