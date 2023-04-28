
import { useState } from "react";
import DateUtils from "./DateUtils";



    function Invoice({details}){

    const {invoiceTo, date, address1, address2, invoiceNumber, paymentMode} = details;
    

    const [rows, setRows] = useState([
        {description: "Mouse", quantity: 3, unitPrice: 200}, 
        {description: "Keyboard", quantity: 3, unitPrice: 400},
        {description: "Monitor", quantity: 6, unitPrice: 5400},
        {description: "CPU Tower Case", quantity: 3, unitPrice: 1200},
        {description: "Headset", quantity: 3, unitPrice: 500},
        {description: "UPS", quantity: 1, unitPrice: 4000},
    ]);
    
  

    const handleInputChange = (event, index) => {
      const { name, value } = event.target;
      const rowsCopy = [...rows];
      rowsCopy[index][name] = value;
      setRows(rowsCopy);
    };

    const handleAddRow = () => {
        const newRow = { description: '', quantity: '', unitPrice: '', total: ''};
        setRows([...rows, newRow]);
      };
    
      const handleRemoveRow = (index) => {
        const rowsCopy = [...rows];
        rowsCopy.splice(index, 1);
        setRows(rowsCopy); 
      };

      const handleSubmit = () => {
        console.log(rows);
      }

    return (
        <>
            <div className="card">
                <div className="card-header bg-success">
                    <h4>Invoice # {invoiceNumber.padStart(10, "0")}</h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <label className="field-label">Invoice To: </label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" value={invoiceTo}/>
                        </div>
                        <div className="col-md-3">
                            <label className="field-label">Date:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="date" value={DateUtils(new Date(date), 'dd/mm/yyyy')}/>
                        </div>
                    </div>       
                    <div className="row">
                        <div className="col-md-3">
                            <label className="field-label">Address: </label>
                        </div>
                        <div className="col-md-3">
                            <input type="textarea" value={address1 +", " + address2}/>
                        </div>
                        <div className="col-md-3">
                            <label className="field-label">Payment Mode:</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" value={paymentMode} />
                        </div>
                    </div>  

                    
                    <div className="table-responsive mt-3">  
                        <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                            <tr key={index}>
                                <td>
                                    <input type="text" name="description" value={row.description} onChange={(event) => handleInputChange(event, index)}/>
                                </td>
                                <td>
                                    <input type="number" name="quantity" value={row.quantity} onChange={(event) => handleInputChange(event, index)}/>
                                </td>
                                <td>
                                    <input type="number" name="unitPrice" value={row.unitPrice} onChange={(event) => handleInputChange(event, index)}/>
                                </td>
                                <td>
                                    <input value={(row.quantity * row.unitPrice).toFixed(2)}/></td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleRemoveRow(index)}>Remove</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                            <td colSpan="3">
                                <button className="rowButton btn btn-success" onClick={handleAddRow}>Add Row</button>
                                <button className="rowButton btn btn-primary " onClick={handleSubmit}>Submit</button>
                            </td>
                            <td>
                                <div>
                                {rows.reduce((total, row) => total + row.quantity * row.unitPrice,0).toFixed(2)}
                                </div>
                            </td>
                            </tr>
                        </tfoot>
                        </table>
                    </div> 

                     
                    
                </div>
            </div>
        </>
    );
}
export default Invoice;