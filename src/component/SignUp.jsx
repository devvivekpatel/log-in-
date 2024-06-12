import {Component} from "react"

export default class SignUp extends Component{

    constructor(props){
        super(props)

        this.state = {arr:[] , name:'', password:'' ,email:"",nameEmpty:false,passEmpty:false,emailEmpty:false}

    }

    submit=(event)=>{

        event.preventDefault();
        // console.log(this.state.arr);
        
        if(this.state.name !=="" && this.state.password !== "" && this.state.email !== ""){

            let userPresent=this.state.arr.filter((item)=>{
                return item.email === this.state.email ;
            });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

            if(userPresent.length>=1){
                alert("User is already registered");
            }
            else{

           
        
            this.setState({arr:[...this.state.arr,{
                name:this.state.name, password:this.state.password, email:this.state.email
            }],name:'',password:'',email:''},
            ()=>{
                localStorage.setItem("name",JSON.stringify(this.state.arr))
            })
        }
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

        componentDidMount(){
            let newArr = JSON.parse(localStorage.getItem("name"));
            if(newArr){
                this.setState({arr: newArr})
            }
              }


    render(){
        return(
            <>
            <form className="h-1/2 w-full flex justify-center items-center flex-col gap-3 mt-5 bg-slate-400" onSubmit={(event)=>this.submit(event)}>

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
                <input type="password" id="password" className="border-2 border-black ml-4" placeholder="*2422viv" onChange={(e)=>this.setState({password:e.target.value})} minLength={8} value={this.state.password} />
                <span>{this.state.passEmpty? <p className="text-red-700">*requiered</p>:<p></p>}</span>
                </div>

                <button type="submit" className="p-3 bg-blue-600 text-white w-28 h-15" >Submit</button>


            </form>



<div className="h-auto w-fill grid  grid-flow-row">
            {
  this.state.arr &&  this.state.arr.map((ar,i)=>{
    console.log(ar)

    return <div className="bg-red-300 ">
      <p key={i}>Your name is {ar.name}</p>
      <p key={i}>Your password is {ar.password}</p>
      <p key={i}>Your email is {ar.email}</p>
    </div>
  })
}
</div>
            </>
        )
     }
}