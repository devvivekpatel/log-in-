import { Component } from "react";
import ChangePassword from "./ChangePassword";

export default class ForgetPassword extends Component{

    constructor(props){
        super(props)

        this.state={changePass:false,otp:"",myOtp:"" , isEmailPresent:false,email:'',otpVerification:false,emailVerification:true}
    }

    generateOtp =()=>{


        let newArr = JSON.parse(localStorage.getItem("name"));
        // this.setState({checkArr:newArr})

        let userPresent=newArr.filter((item)=>{
            return item.email === this.state.email 
        });

        if(userPresent.length>=1){
            this.setState({isEmailPresent:true})
        }
        else{
            alert("Your email is not present")
        }



        if(this.state.isEmailPresent){
        this.setState({otpVerification:true})

        var minm = 100000; 
        var maxm = 999999; 
        var random = Math.floor(Math 
        .random() * (maxm - minm + 1)) + minm; 

        random = random+=""
        console.log(random);

        this.setState({myOtp:random})
    this.setState({emailVerification:false})
    }
}

    checkOtp=()=>{
        // console.log(this.state.myOtp);
        // console.log(this.state.otp);
        if(this.state.myOtp ===this.state.otp){
            
            alert("Done")
            this.setState({changePass:true,otp:'',otpVerification:false})

        }
        else{
            alert("YOur otp is incorrect")
            this.setState({otp:''})
        }
    }
    



    render(){
        return(
            <>

{this.state.emailVerification?

            <div className="h-1/2 w-full flex justify-center mt-20 flex-col items-center">
                <h1 className="mb-20 text-2xl">Forget Password</h1>
            <div className="flex flex-col h-40 w-64 border-2 border-black gap-5 bg-blue-300 items-center">
                <label htmlFor="email">Enter your email :</label>
                <input type="email" id="email" placeholder="dummy@gmail.com"  className="border-2 border-black" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
                <button className="bg-red-600 w-40 " onClick={this.generateOtp}>Get OTP</button>
            </div>
            </div> :<span></span>
}


          {
          this.state.otpVerification ?   <div className="h-1/2 w-full flex justify-center mt-20 flex-col items-center">
            <div className="flex flex-col h-40 w-64 border-2 border-black gap-5 bg-green-300 items-center">
                <label htmlFor="number">Enter your 6 digit otp :</label>
                <input type="number" id="number"  className="border-2 border-black" value={this.state.otp} onChange={(e)=> this.setState({otp:e.target.value})}/>
                <button className="bg-red-600 w-40 " onClick={this.checkOtp}>Reset password</button>
            </div>
            </div>

              :<span></span>}

              {this.state.changePass? <ChangePassword data={this.state.email}/>:<span></span>  }
    
            
            
            </>
        )
    }
}