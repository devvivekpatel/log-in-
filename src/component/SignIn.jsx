import {Component} from "react"


export default class SignIn extends Component{

    constructor(props){
        super(props)
        this.state = {checkArr:[], name:'', password:'' ,email:"",nameEmpty:false,passEmpty:false,emailEmpty:false}

    }

    submit=(event)=>{

        event.preventDefault();
        
        if(this.state.name !=="" && this.state.password !== "" && this.state.email !== ""){

            let newArr = JSON.parse(localStorage.getItem("name"));
            this.setState({checkArr:newArr})

            let userPresent=this.state.checkArr.filter((item)=>{
                return item.email === this.state.email 
            });

            if(userPresent.length>=1){
                let userPassword = this.state.checkArr.filter((item)=>{
                    return item.password === this.state.password
                })
                
                if(userPassword.length>=1){
                    alert("login Successful")
                   
                }
                else{
                    alert("Email matched but password not")
                }
            }
            else{
                alert("NOt , present")
            }

           this.setState({name:'',password:'',email:''})
        }
        else if(this.state.name ===''){
            this.setState({nameEmpty:true})
        }
        else if(this.state.password === ''){
            this.setState({passEmpty:true})
        }
        else if(this.state.email===''){
            this.setState({emailEmpty:true})
        }
        }



 render(){
    return(
        <>

<form className="h-1/2 w-full flex justify-center items-center flex-col gap-3 mt-5 bg-yellow-300" onSubmit={(event)=>this.submit(event)}>

<div>
<label htmlFor="name">Name :</label>
<input type="text" id="name" className="border-2 border-black ml-4" placeholder="name" onChange={(e)=>this.setState({name:e.target.value})} value={this.state.name}/>
<span>{this.state.nameEmpty? <p className="text-red-700">*requiered</p>:<p></p>}</span>
</div>

<div>
<label htmlFor="email">Email :</label>
<input type="email" id="email" className="border-2 border-black ml-4" placeholder="dummy@gmail.com" onChange={(e)=>this.setState({email:e.target.value})} value={this.state.email}/>
<span>{this.state.emailEmpty? <p className="text-red-700">*requiered</p>:<p></p>}</span>
</div>


<div>
<label htmlFor="password">Password :</label>
<input type="password" id="password" className="border-2 border-black ml-4" placeholder="*2422viv" onChange={(e)=>this.setState({password:e.target.value})} minLength={8} value={this.state.password}/>
<span>{this.state.passEmpty? <p className="text-red-700">*requiered</p>:<p></p>}</span>
</div>

<button type="submit" className="p-3 bg-blue-600 text-white w-28 h-15" >Submit</button>


</form>


        </>
    )
 }

}