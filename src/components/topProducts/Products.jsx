import "./Products.css";

export default function Products() {
  return (
    <div className="product">
      <h1>Top products</h1>
      <ul className="productSmList">
        <li className="productSmListItem border-bottom pb-2">
          <div className="productSmUser">
            <span className="productSmUserName">Restaurant Booking App</span>
            <span className="productSmUserTitle">React & Bootstrap Framework</span>
          </div>
          <p><b>70</b> sales</p>
        </li>
        <li className="productSmListItem border-bottom pb-2">
          <div className="productSmUser">
            <span className="productSmUserName">UI Kit</span>
            <span className="productSmUserTitle">React & Bootstrap Framework</span>
          </div>
          <p><b>54</b> sales</p>
        </li>
        <li className="productSmListItem border-bottom pb-2">
          <div className="productSmUser">
            <span className="productSmUserName">Design System Pro</span>
            <span className="productSmUserTitle">Bootstrap Framework</span>
          </div>
          <p><b>47</b> sales</p>
        </li>
        <li className="productSmListItem border-bottom pb-2">
          <div className="productSmUser">
            <span className="productSmUserName">Dashboard</span>
            <span className="productSmUserTitle">Tailwind, React</span>
          </div>
          <p><b>43</b> sales</p>
        </li>
        <li className="productSmListItem border-bottom pb-2">
          <div className="productSmUser">
            <span className="productSmUserName">Glassmorphism UI</span>
            <span className="productSmUserTitle">Vue Js, Tailwind </span>
          </div>
          <p><b>38</b> sales</p>
        </li>
        <li className="productSmListItem border-bottom pb-2">
          <div className="productSmUser">
            <span className="productSmUserName">Multipurpose Template</span>
            <span className="productSmUserTitle">React & Bootstrap Framework</span>
          </div>
          <p><b>22</b> sales</p>
        </li>
      </ul>
    </div>
  );
}
