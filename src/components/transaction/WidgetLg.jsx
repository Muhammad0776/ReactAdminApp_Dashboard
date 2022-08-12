import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Transactions</h3>
      <p className="widgetP">This is a list of latest transactions.</p>
      <table className="widgetLgTable">
        <tr className="widgetLgTr border-bottom rounded-top trLead">
          <th className="widgetLgTh">TRANSACTION</th>
          <th className="widgetLgTh">DATE & TIME</th>
          <th className="widgetLgTh">AMOUNT</th>
          <th className="widgetLgTh">STATUS</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Payment from <b>Bonnie Green</b></span>
          </td>
          <td className="widgetLgDate">Apr 23 ,2021</td>
          <td className="widgetLgAmount">$2300</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr trLead">
          <td className="widgetLgUser">
            <span className="widgetLgName">Payment refund to <b>#00910</b></span>
          </td>
          <td className="widgetLgDate">Apr 23, 2021</td>
          <td className="widgetLgAmount">-$670</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Payment failed from <b>#087651</b></span>
          </td>
          <td className="widgetLgDate">Apr 18, 2021</td>
          <td className="widgetLgAmount">$234</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr trLead">
          <td className="widgetLgUser">
            <span className="widgetLgName">Payment from <b>Bonnie Green</b></span>
          </td>
          <td className="widgetLgDate">Apr 15, 2021</td>
          <td className="widgetLgAmount">$5000</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Payment from <b>Jese Leos</b></span>
          </td>
          <td className="widgetLgDate">Apr 15, 2021</td>
          <td className="widgetLgAmount">$2300</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr trLead">
          <td className="widgetLgUser">
            <span className="widgetLgName">Payment from <b>THEMSBERG LLC</b></span>
          </td>
          <td className="widgetLgDate">Apr 11, 2021</td>
          <td className="widgetLgAmount">$280</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
