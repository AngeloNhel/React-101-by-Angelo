function StudentInfo({data}) {

    const {firstName,lastName,id,age,gender,course,birthdate} = data;

    return (
        <div className="col-sm-4">
            <div className="card m-2">
                <div className="card-title">
                    <h3>Student Details</h3>
                </div>
                <div className="card-body">
                    <div>
                    <label>Name:{firstName+ " " +lastName}</label>
                    </div>
                    <div>
                        <label>Course: {course}</label>
                    </div>
                    <div>
                        <label>ID: {id}</label>
                    </div>
                    <div>
                        <label>Gender: {gender}</label>
                    </div>
                    <div>
                        <label>Age: {age}</label>
                    </div>
                    <div>
                        <label>Birthdate: {birthdate}</label>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default StudentInfo;