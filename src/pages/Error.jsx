import { Link, Routes, Route, useNavigate } from "react-router-dom";
import "../assets/css/error-page.css";

export default function Error() {
  const navigate = useNavigate();

  return (
    <>
      <div id="error-page" className="error-page">
        <p>
          <i className="error-message"></i>
        </p>
        <p>sorry, an unexpected error has occurred.</p>

        <p className="back-link" onClick={() => navigate(-1)}>
          back
        </p>
      </div>
    </>
  );
}
