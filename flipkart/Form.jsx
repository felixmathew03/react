import React,{Component} from "react";

class Form extends Component {
    state={name:"",age:"",email:"",phone:""}
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.name);
        console.log(this.state.age);
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        return (
            <div className="form">
                <form >
                    <input type="text" name="name"  placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                    <input type="text" name="age"  placeholder="Age" value={this.state.age} onChange={this.handleChange}/>
                    <input type="email" name="email"  placeholder="Email" value={this.state.age} onChange={this.handleChange}/>
                    <input type="number" name="phone"  placeholder="Phone" value={this.state.age} onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
export default Form;
