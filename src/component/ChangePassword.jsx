import { Component } from "react";



export default class ChangePassword extends Component{

    constructor(props){
        super(props)
        console.log(props)
        this.state = {pass:'' , rePass:'', email:'',arr:[]}
        }

        componentDidMount(){
            let getArrData = JSON.parse(localStorage.getItem('name'));

            if(getArrData){
                this.setState({arr:getArrData})
            }
        }
        
        checkSame = ()=>{
            this.setState({...this.state,email:this.props.data},()=>{

                console.log("email",this.state.email);
            })

        if(this.state.pass === this.state.rePass){

            this.setState({pass:'',rePass:''})

            let newArr = this.state.arr.map((item)=>{
                if(item.email === this.state.email){
                    item.password = this.state.rePass;
                }
                return item;
            })

            localStorage.setItem('name',JSON.stringify(newArr))



            alert("Saved Successfully");
       

            
        }
        else{
            alert("Your passwords are not same")
        }
    }
  

    render(){
        return(<>
      
        
        <div className="w-full h-1/2 flex justify-center items-center mt-20 gap-5">
        <div className="h-60 w-80 flex flex-col bg-yellow-400 gap-5 justify-center items-center">
        
        <label htmlFor="pass">Enter your new Password</label>
        <input type="password" id="pass" className="border-2 border-black w-60 " value={this.state.pass} onChange={(e)=> this.setState({pass:e.target.value})} minLength={8}  />

        <label htmlFor="rePass">Re-enter your new Password</label>
        <input type="password" id="rePass" className="border-2 border-black w-60" value={this.state.rePass} onChange={(e)=> this.setState({rePass:e.target.value})} minLength={8}/>

        <button className="p-3 bg-blue-600 text-white w-40 " onClick={this.checkSame}>Change</button>

        </div>



        </div>
        </>)
    }
} 