import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import StudentInfo from './StudentInfo';
import Invoice from './Invoice';
import TicTacToe from './TicTacToe';



const students = [
  "Emelloyd Rodriguez",
  "Gildo Omandam",
  "Arjohn Lopez",
  "Ronnie Estillero",
  "Revelyn Resolo",
  "Angelo Nhel Acibar",
  "Lyka May Saavedra",
  "David Fajardo",
  "Joshua  Tobongbanua",
  "Carlo Pisico",
  "Ralph Arcos",
  "Rommel Jay Ocon",
  "Jerold Cuico",
  "Rolando Castro",
  "Nicole Magallanes",
  "Paul Luzong",
  ];

  const menus = ["Home","About","Contact uS","Login","Settings"];

  const StudentInfos = {firstName:"Juan",lastName:"Dela Cruz",id:"001",age:24,gender:"Male",course:"Manager",birthdate:"1990-01-01"};
  
  const StudentsInfo = [
  {firstName:"Juan",lastName:"Dela Cruz",id:"001",age:24,gender:"Male",course:"Manager",birthdate:"1990-01-01"},
  {firstName:"anaa",lastName:"Dela Cruz",id:"002",age:25,gender:"Female",course:"Manager",birthdate:"1991-01-01"},
  {firstName:"mark",lastName:"Dela Cruz",id:"003",age:26,gender:"Male",course:"Manager",birthdate:"1992-01-01"},
  {firstName:"angelo ",lastName:"Dela Cruz",id:"004",age:27,gender:"Male",course:"Manager",birthdate:"1993-01-01"},
  {firstName:"nicole",lastName:"Dela Cruz",id:"005",age:28,gender:"Female",course:"Manager",birthdate:"1994-01-01"},
  ];

  const invoice = {invoiceTo:"Juan Dela Cruz",
                  date:"2023-04-15", 
                  address1: "810 Oroquieta Street Sta Cruz 1000", 
                  address2:"Manila, Metro Manila, Philippines", 
                  invoiceNumber:"6845",
                  paymentMode:"COD"};

  const invoiceItems = [{description: "Mouse", Qty: 3, unitPrice: 200}, 
                      {description: "Keyboard", Qty: 3, unitPrice: 400},
                      {description: "Monitor", Qty: 6, unitPrice: 5400},
                      {description: "CPU Tower Case", Qty: 3, unitPrice: 1200},
                      {description: "Headset", Qty: 3, unitPrice: 500},
                      {description: "UPS", Qty: 1, unitPrice: 4000},];

  const studentList = students.map((item) => <li>{item}</li>);
  
  const vehicles = ['mustang','f-150','expedition'];
  const [car,truck,suv] = vehicles;

  const [inv1,,,,inv5] = invoiceItems;

  const numberSet1 = [23,34,56,34,51,8,11,43];
  const numberSet2 = [28,34,56,34,51,8,11,48];

  let combinedNumberSet = [...numberSet1, ...numberSet2];

  let [first, second, third, ...remaining] = numberSet1;
  let [line1,line2, ...restLine] = invoiceItems;

  let locked=1;
  //if(locked!=1){return "true";}else{return "false";}
  let canChange = locked !== 1 ? 'true':'false';

  let speed = 60;
  // if(speed >= 120){return "to fast";} elseif (speed >= 80){return "fast";} else{return "ok";}
  let message = speed >= 120? 'too fast' : speed >= 80? 'fast' : 'OK';

function App() {
  return (
    <div className="App">

      <Header menuList={menus}/>

      <TicTacToe/>

        <div>{car}</div>
        <div>{truck}</div>
        <div>{suv}</div>

        <div>{inv1.description}</div>
        <div>{inv5.description}</div>

        <div>{combinedNumberSet.join(",")}</div>

        <div>{first}</div>
        <div>{second}</div>
        <div>{third}</div>
        <div>{remaining.join("|")}</div>

        <div>{line1.description}</div>
        <div>{line2.description}</div>
        <div>{restLine.length}</div>

        <div>{canChange}</div>
        <div>{locked !== 0 ? 'true':'false'}</div>

        <div>{message}</div>

        <div className="main-content container">
         <h1>Header Section</h1>
         <button className="btn btn-primary">Testing</button>

         <Button className='m-3'>Primary Button</Button>
          <ul>
            {studentList}
          </ul>  

          <StudentInfo data = {StudentInfos}/>

        <div className='row'>
          {StudentsInfo.map((studentData)=><StudentInfo data={studentData}/>)}
        </div>

        <Invoice details={invoice} lines={invoiceItems}/>

        </div>

      <Footer/>
    </div>   
  );
}

export default App;
