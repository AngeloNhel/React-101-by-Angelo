import { useEffect, useState } from "react";
function EmployeesInfoEdit ({data, onSaveHandler}) {

const [employeesData, setEmmployesData] = useState(data);

const onChangeHandler = (e) => {
    let fieldName = e.target.name;
    let newData = {...employeesData, [fieldName]: e.target.value};
    setEmmployesData(newData);
}

useEffect(()=>{
    setEmmployesData(data);
},[data]);

const onClickSaveHandler = () => {
    onSaveHandler(employeesData);
}
    return (
        <>
          <div className="">
            <div className="card">
                <div className="card-body">
                    <input type="hidden" name="id" value={employeesData.id}/>
                    <div>
                        <label>FirstName:  </label>
                        <input type="text" name="firstName" value={employeesData.firstName} className="form-control"
                            onChange={onChangeHandler}/>
                    </div>
                    <div>    
                        <label>LastName:  </label>
                        <input type="text" name="lastName" value={employeesData.lastName} className="form-control"
                            onChange={onChangeHandler}/>
                    </div>
                    <div>    
                        <label>Age:  </label>
                        <input type="text" name="age" value={employeesData.age} className="form-control"
                            onChange={onChangeHandler}/>
                    </div>
                    <div>
                        <label>Gender: </label>
                        <input type="text" name="gender" value={employeesData.gender} className="form-control"
                            onChange={onChangeHandler}/>
                    </div>                
                    <div>
                        <label>TobTitle:  </label>
                        <input type="text" name="jobTitle" value={employeesData.jobTitle} className="form-control"
                            onChange={onChangeHandler}/>
                    </div>
                </div>

                <div className="card-footer">
                    <button className="btn btn-danger me-3" data-bs-dismiss="modal">Cancel</button>
                    <button className="btn btn-primary" onClick={onClickSaveHandler}>Save</button>
                </div>
                
            </div>
        </div>
        </>
    );
}
export default EmployeesInfoEdit;