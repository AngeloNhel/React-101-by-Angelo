
import { useState } from "react";
import DateUtils from "./DateUtils";

// function Invoice({details, lines}){

    function Invoice({details}){

    const {invoiceTo, date, address1, address2, invoiceNumber, paymentMode} = details;
    
    const [rows, setRows] = useState([
      { description: '', quantity: 0, unitPrice: 0, total: 0 },
    ]);
  
    const handleInputChange = (event, index) => {
      const { name, value } = event.target;
      const rowsCopy = [...rows];
      rowsCopy[index][name] = value;
      setRows(rowsCopy);
    };

    const handleAddRow = () => {
        const newRow = { description: '', quantity: 0, unitPrice: 0, total: 0 };
        setRows([...rows, newRow]);
      };
    
      const handleRemoveRow = (index) => {
        const rowsCopy = [...rows];
        rowsCopy.splice(index, 1);
        setRows(rowsCopy);
      };

    return (
        <>
            <div className="card">
                <div className="card-header bg-success">
                    <h4>Invoice # {invoiceNumber.padStart(10, "0")}</h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-8">
                            <label className="field-label">Invoice To:</label>
                            <label>{invoiceTo}</label>
                        </div>
                        <div className="col-sm-4">
                            <label className="field-label">Date:</label>
                            <label>{DateUtils(new Date(date), 'dd/mm/yyyy')}</label>
                        </div>
                    </div>                 
                    <div className="row">
                        <div className="col-sm-8">
                            <label className="field-label">Address: </label>
                            <label>{address1 +", " + address2} </label>
                        </div>                
                        <div className="col-sm-4">
                            <label className="field-label">Payment Mode:</label>
                            <label>{paymentMode} </label>
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
                                <input
                                    type="text"
                                    name="description"
                                    value={row.description}
                                    onChange={(event) => handleInputChange(event, index)}
                                />
                                </td>
                                <td>
                                <input
                                    type="number"
                                    name="quantity"
                                    value={row.quantity}
                                    onChange={(event) => handleInputChange(event, index)}
                                />
                                </td>
                                <td>
                                <input
                                    type="number"
                                    name="unitPrice"
                                    value={row.unitPrice}
                                    onChange={(event) => handleInputChange(event, index)}
                                />
                                </td>
                                <td><input value={row.quantity * row.unitPrice}/></td>
                                <td>
                                <button className="btn btn-primary" onClick={() => handleRemoveRow(index)}>Remove</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                            <td colSpan="3">
                                <button className="btn btn-primary" onClick={handleAddRow}>Add Row</button>
                            </td>
                            <td>
                                <div>
                                {rows.reduce(
                                    (total, row) => total + row.quantity * row.unitPrice,
                                    0
                                )}
                                </div>
                            </td>
                            <td></td>
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