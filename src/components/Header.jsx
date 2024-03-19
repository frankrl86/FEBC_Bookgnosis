import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="container-fluid pt-3 m-0 ">
      <div className="hero">
        <div className="d-flex hero-box">
          <div className="p">
            <div className="titles">
              <h1 className="header-title ">Welcome!</h1>
              <h2 className="">Expand Your Knowledge with Ease!</h2>
            </div>
            <p className="hero-text text-lighter ">
              Find the latest bestseller and uncover the hidden gems of literature with the click of a button.
              Our library has something for everyone.
            </p>
          </div>
        </div>
        {/* <div className="col-lg-6">
          <img src="iStock-1016131800.webp" alt="Book picture" className="img-fluid rounded-start-5 float-end p-0"></img>
        </div> */}
      </div>

      <div className="search row m-0 my-2 rounded maroon">
        <div className="col-sm-12 col-lg-5 d-flex flex-column justify-content-between p-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            ></input>
            <label className="form-check-label">Search</label>
          </div>
          <input type="text" className="form-control w-100"></input>
        </div>

        <div className="col-sm-12 col-lg-6 p-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            ></input>
            <label className="form-check-label">Filter</label>
          </div>

          <div className="filter row">
            <div className="col-4 border-end">
              <div className="search-box">
                <label className="form-check-label">Genre</label>
                <select className="form-select">
                  <option value="">Select Genre</option>
                  <option value="filter1">Drama</option>
                  <option value="filter2">SF</option>
                  <option value="filter3">Fantasy</option>
                </select>
              </div>
              <vr />
            </div>
            <div className="col-4 border-end">
              <div className="search-box">
                <label className="form-check-label">Author</label>
                <select className="form-select">
                  <option value="">Select Author</option>
                  <option value="filter1">Author 1</option>
                  <option value="filter2">Author 2</option>
                  <option value="filter3">Author 3</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="search-box">
                <label className="form-check-label">Language</label>
                <select className="form-select">
                  <option value="">Language</option>
                  <option value="filter1">English</option>
                  <option value="filter2">Spanish</option>
                  <option value="filter3">Portuguese</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-xl-1 p-3">
          <button type="button" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
