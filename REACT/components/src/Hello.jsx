import Random from "./Random";

function Hello() {

    let number = 456;
    let myName = "Anuj";
    let fullName = () => {
        return 'Anuj Raj'
    }
    return <div> <h3>Hi {myName} , I am from future, I am your master {fullName()}.</h3>
    <p>MessageNumber {number}</p>
    <Random></Random>
    <Random/>
    <Random/>
    <Random/><Random/>
    <Random/>
    <Random/>
    <Random/><Random/>
    
    </div>
   
}

export default Hello;