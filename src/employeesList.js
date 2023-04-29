import { useEffect, useState } from "react";
import ApiService from "./apiService";
import EmployeesInfo from "./employeesInfo";
import EmployeesInfoEdit from "./employeesInfoEdit";
import { Modal } from 'react-bootstrap';

function EmployeesList() {
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);

    const getEmployeesList = () =>{
        ApiService('/employees', null, (data)=>{
            setList(data);
        });

        ApiService('/employees/count/all', null, (data)=>{
            setCount(data.total)
        });
    }

    useEffect(()=>{
        getEmployeesList();
    },[]);

    const [keyword,setKeyword] = useState('');

    const onKeywordChangeHandler = (e) => {
        setKeyword(e.target.value);
        ApiService('/employees/name/' + e.target.value, null, (data)=>{
            setList(data);
        });
    }
    
    const [employeesDetails, setemployeesDetails] = useState({});

    const onEditHandler = (data) => {
        ApiService('/employees/' + data.id, null, (data)=>{
            setemployeesDetails(data);
        })
    }

    const onEmployeesSaveHandler = (FormData) => {
        ApiService('/employees/' + FormData.id, FormData, (data)=> {
            getEmployeesList();
        },FormData.id === 0 ? "POST" : "PUT");
    }

    const onClickAddhandler = () => {
        setemployeesDetails({id:0});
    }

    const [confirmOpen, setConfirmOpen] = useState(false);


    const onDeleteHandler = (FormData) => {
        setemployeesDetails(FormData);
        setConfirmOpen(true);
    }

    const doConfirmedDeleteHandler = () =>{
        doCloseConfirmHandler();
        ApiService('/employees/' + employeesDetails.id, employeesDetails, (data)=>{
            console.log(data);
            getEmployeesList();
        }, "DELETE");
    }

    const doCloseConfirmHandler = () =>{
        setConfirmOpen(false);
    }


return (
    <>

    <h3>Employees List: {count}</h3> 

    <button className="btn btn-primary" onClick={onClickAddhandler} data-bs-toggle="modal" data-bs-target="#myPopupWin"> Add Employee List</button>

    <form className="mb-3">
        <div className="row">
            <div className="col-sm-4"> 
                <input className="form-control" name="keyword" value={keyword} onChange={onKeywordChangeHandler} placeholder="Search by Name"/>
            </div>
        </div>
    </form>

    <div className="row">
        {list.map((employeesData)=> <EmployeesInfo data={employeesData} onEditHandler={onEditHandler} onDeleteHandler={onDeleteHandler}/>)}
    </div>

    <div id="myPopupWin" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h4>Employee Info</h4>
                    <button type="button" className="btn-close btn-sm" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    <EmployeesInfoEdit data={employeesDetails} onSaveHandler={onEmployeesSaveHandler} />
                </div>
            </div>
        </div>
    </div>

    <Modal show={confirmOpen}>
        <Modal.Header>
            <Modal.Title>Confirm Delete</Modal.Title>
            <button type="button" className="btn-close btn-sm" onClick={doCloseConfirmHandler}></button>
        </Modal.Header>
        <Modal.Body>
            <h4 className="text-center mb-5">Are you sure you want to DELETE this record?</h4>
            <div className="text-center">
                <button className="btn btn-primary me-3 px-5" onClick={doCloseConfirmHandler}>No</button>
                <button className="btn btn-success px-5" onClick={doConfirmedDeleteHandler}>Yes</button>
            </div>
        </Modal.Body>
    </Modal>

    </>
);
}
export default EmployeesList;