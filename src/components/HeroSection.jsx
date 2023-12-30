import SideImage from "../assets/sideImage.png";
import { IoIosVideocam } from "react-icons/io";

export default function HeroSection() {
  const subheading =
    "ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint";

  return (
    <div class="row text-center p-4 mb-4">
      <div class="col-md-6 p-2 col-sm-12 mt-5">
        <h1 class="mb-4">
          Quick & Reliable{" "}
          <span style={{ color: "#f78479" }}>Warehousing and logistics </span>
          Solution.
        </h1>
        <p class="mb-5">{subheading}</p>
        <div class="d-flex justify-content-center gap-3">
          <button
            type="button"
            class="btn"
            style={{ backgroundColor: "#2c2d5b", color: "white" }}
          >
            Join now
          </button>
          <button
            type="button"
            class="d-flex align-items-center gap-2 btn btn-light"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ color: "#2c2d5b" }}
          >
            <IoIosVideocam color="#2c2d5b" style={{ fontSize: "30px" }} />
            Play demo
          </button>

          {/*modal*/}
          <div
            class="modal fade"
            id="exampleModal"
            tabIndex="1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <iframe
                    className="embed-responsive-item"
                    title="YouTube Video"
                    target="_parent"
                    src={
                      "https://www.youtube.com/embed/watch?v=PnH56Koh_TY&list=RDGMEM916WJxafRUGgOvd6dVJkeQ&start_radio=1&rv=8GkPMG8IwBQ"
                    }
                    allowFullScreen
                  ></iframe>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/**/}
        </div>
      </div>
      <div class="col-md-5 col-sm-12">
        <img src={SideImage} alt="image" style={{ width: "100%" }} />
      </div>
    </div>
  );
}
