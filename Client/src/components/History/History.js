import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { getHistory } from "../../libs/api";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import classes from './History.module.css';
import Spinner from "../Loading/Spinner";


const History = () => {
    const { sendRequest, data } = useHttp(getHistory);
  
    useEffect(() => {
      sendRequest();
    }, [sendRequest]);
   
    let historyTable = [];
    if(data)
    {
        historyTable = data.map((transaction) => {
        return <tr key={transaction._id} className={classes.row}>
            <td>{transaction.sender}</td>
            <td>{transaction.reciever}</td>
            <td>{transaction.amount}</td>
            <td className={classes.block}>{transaction.date}</td>
            <td className={classes.block}>{transaction.time}</td>
        </tr>
      })
      historyTable.reverse();
    }
   
    return (
      <div className={classes.historyDiv}>
        {data === null &&  <Spinner />}
        { data !== null && <table className={classes.historytable}>
          <thead className={classes.historytablehead}>
            <tr>
              <th>Sender</th>
              <th>Reciever</th>
              <th>Amount</th>
              <th className={classes.block}>Date</th>
              <th className={classes.block}>Time</th>
            </tr>
          </thead>
  
          <tbody className={classes.tablebody}>{historyTable}</tbody>
          
        </table>}
      </div>
    );
  };
export default History;
