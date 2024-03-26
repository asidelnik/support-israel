import { Link } from "@mui/material";
import { useDispatch } from "react-redux";
import { setIsShowTermsOfService } from "../../redux/navigation-slice";

export default function SiteMission() {
  const dispatch = useDispatch();

  return (
    <>
      <h2>מטרת האתר</h2>
      <ul>
        <li>יצירת עיצובי תמיכה בישראל מותאים לפייסבוק.</li>
        <li>
          <span>בבקשה השתמשו באתר על פי</span>&nbsp;
          <span>
            <Link
              onClick={() => dispatch(setIsShowTermsOfService(true))}
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
