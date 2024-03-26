import { Link } from "@mui/material";
import { useNavigationDispatch } from "../../contexts/navigation-context";

export default function SiteMission() {

  return (
    <>
      <h2>מטרת האתר</h2>
      <ul>
        <li>יצירת עיצובי תמיכה בישראל מותאים לפייסבוק.</li>
        <li>
          <span>בבקשה השתמשו באתר על פי</span>&nbsp;
          <span>
            <Link
              onClick={() =>
                navDispatch({
                  type: "set-is-show-terms-of-service",
                  payload: true,
                })
              }
              style={{ cursor: "pointer" }}
            >
              תנאי השימוש
            </Link>
            .
          </span>
        </li>
      </ul>
    </>
  );
}
