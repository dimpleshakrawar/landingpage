import Logo from "../assets/ShipUp.png";

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary p-3"
      style={{ backgroundColor: "white" }}
    >
      <div class="container-fluid gap-3" style={{ fontWeight: "600" }}>
        <a class="navbar-brand" href="#">
          <img src={Logo} width={90} height={20} alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Solutions
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Industries
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Insights
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                News and Media
              </a>
            </li>
          </ul>
          <div class="d-flex justify-content-between gap-5">
            <button
              class="btn"
              style={{ border: "2px solid #2c2d5b", color: "#6f2cf5" }}
              type="submit"
            >
              Request Quote
            </button>
            <button
              class="btn"
              style={{ backgroundColor: "#2c2d5b", color: "white" }}
              type="submit"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
