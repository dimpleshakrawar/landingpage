import { FaLocationDot } from "react-icons/fa6";
import { MdLuggage } from "react-icons/md";

export default function Form() {
  return (
    <div class="row p-4 d-flex align-items-center justify-content-center shadow-lg mb-4">
      <div class="col-md-2 col-sm-12">
        <label for="inputEmail4" class="form-label">
          Origin
        </label>
        <div class="input-group">
          <div class="input-group-text">
            <FaLocationDot />
          </div>

          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Enter Location"
          />
        </div>
      </div>
      <div class="col-md-2 col-sm-12">
        <label for="inputEmail4" class="form-label">
          Destination
        </label>
        <div class="input-group">
          <div class="input-group-text">
            <FaLocationDot />
          </div>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Enter Location"
          />
        </div>
      </div>
      <div class="col-md-2 col-sm-12">
        <label for="inputEmail4" class="form-label">
          Weight
        </label>
        <div class="input-group">
          <div class="input-group-text">
            <MdLuggage />
          </div>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Weight (Kg)"
          />
        </div>
      </div>
      <div class="col-md-2 col-sm-12">
        <button
          type="button"
          class="btn btn-lg mt-2"
          style={{
            backgroundColor: "#2c2d5b",
            color: "white",
            width: "100%",
          }}
        >
          Check Price
        </button>
      </div>
    </div>
  );
}
