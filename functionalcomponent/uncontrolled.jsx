import React,{Component} from "react";

class Form1 extends Component {
    constructor(props){
        super(props);
        this.inputname=React.createRef();
        this.inputage=React.createRef();
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.inputname.value);
        console.log(this.inputage.value);
        
    }
    render(){
        return (
            <div>
                <form >
                    <input type="text" name="name" ref={input=>this.inputname=input} placeholder="Name" />
                    <input type="text" name="age" ref={input=>this.inputage=input} placeholder="Age" />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
export default Form1;