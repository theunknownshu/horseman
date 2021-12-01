import "./Header.css";
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark row">
        
          <div className="col-md-3 ">
            <a className="navbar-brand" href="#">
              The Horseman Club
            </a>
          </div>
          
          <div className="col-md-6 col-sm-6">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
              <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    About <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Project
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    Roadmap
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    Team
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <button
              type="button"
              class="btn btn-dark round btn-discord rounded-pill"
            >
              Join Discord
            </button>
          </div>
      </nav>
    </div>
  );
}

export default Header;
