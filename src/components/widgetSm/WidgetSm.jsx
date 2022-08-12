import "./widgetSm.css";
import Avatar0 from "../../images/Avatar0.png"
import Avatar1 from "../../images/Avatar1.png"
import Avatar2 from "../../images/Avatar2.png"
import Avatar3 from "../../images/Avatar3.png"
import Avatar4 from "../../images/Avatar4.png"
import Avatar5 from "../../images/Avatar5.png"

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Latest Customers</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem border-bottom pb-2">
          <div className="d-flex merg">
          <img
            src={Avatar0}
            alt="notPhoto"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Neil Sims</span>
            <span className="widgetSmUserTitle">email@example.com</span>
          </div>
          </div>
          <p>$367</p>
        </li>
        <li className="widgetSmListItem border-bottom pb-2">
          <div className="d-flex merg">
          <img
            src={Avatar1}
            alt="notPhoto"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Bonnie Green</span>
            <span className="widgetSmUserTitle">email@example.com</span>
          </div>
          </div>
          <p>$67</p>
        </li>
        <li className="widgetSmListItem border-bottom pb-2">
          <div className="d-flex merg">
          <img
            src={Avatar2}
            alt="notPhoto"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Micheal Gough</span>
            <span className="widgetSmUserTitle">email@example.com</span>
          </div>
          </div>
          <p>$3467</p>
        </li>
        <li className="widgetSmListItem border-bottom pb-2">
          <div className="d-flex merg">
          <img
            src={Avatar3}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Thomas Lean</span>
            <span className="widgetSmUserTitle">email@example.com</span>
          </div>
          </div>
          <p>$2367</p>
        </li>
        <li className="widgetSmListItem border-bottom pb-2">
          <div className="d-flex merg">
          <img
            src={Avatar4}
            alt="notPhoto"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Lana Byrd</span>
            <span className="widgetSmUserTitle">email@example.com</span>
          </div>
          </div>
          <p>$357</p>
        </li>
        <li className="widgetSmListItem border-bottom pb-2">
          <div className="d-flex merg">
          <img
            src={Avatar5}
            alt="notPhoto"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Karen Nelson</span>
            <span className="widgetSmUserTitle">email@example.com</span>
          </div>
          </div>
          <p>$1367</p>
        </li>
      </ul>
    </div>
  );
}
