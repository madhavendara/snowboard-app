import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useSnackbar } from 'react-simple-snackbar';

//images import
import login from '../assest/login.png'
import search from '../assest/search.svg'
import logout from '../assest/logout.svg'
import insta from '../assest/insta.svg'
import facebook from '../assest/facebook.svg'
import twitter from '../assest/twitter.svg'
import linkedin from '../assest/linkedin.svg'


const Navbar_linkbar = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [openSnackbar, closeSnackbar] = useSnackbar(); // show snackbar component
    let button;
    if (localStorage.getItem('token')) {
        button = <div className="login logout"> <img src={logout} alt=""/> <a onClick={()=>logoutUser()}>Log out</a> </div>;
    } else {
        button = '';
    }

    const history = useHistory(); // show history

    const logoutUser = ()=>{
        localStorage.removeItem("token")
        history.push("/login");
    }

    const onSubmit = async (data) => {

        let formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.password);
        await fetch("http://shredmetrix.com/airtable/api/subscribe.php", {
            "method": "POST",
            "body":formData,
        }).then(response => response.json())
            .then((response) => {
                if(response.success === true){
                 //   localStorage.setItem('token',response.data.id);
                  //  history.push("/");

                }
                openSnackbar(response.msg)
            })
            .catch(err => {
                console.log(err)
                openSnackbar(err)
            });


    };

    return (
        <ul id="menu" className={props.classlist}>
        <li className="login">
            <p>Close</p>
           <div className="close-btn" onClick={props.closenav}>&times;</div>
        </li>
        <li className="login">
        <Link to="/dashboard">My Account</Link>
            <img src={login} alt="login"/>
        </li>
{/*         
        <li className="login">
            <img src={search} alt=""/>
            <input type="text" name="fname" placeholder="Search Here."/>
        </li> */}
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/invest">INVEST</Link></li>
        <li><Link to="/support">Support</Link></li>
        {button}
        <div className='mailing-list'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Subscribe to mailing list</h1>
            <input type="email" className='subscribe-mail' {...register("email", { required: 'This field is required' })} placeholder='Enter the mail address'/>

                {errors.email && <span>{errors.email.message}</span>}
            <input type="submit" value="submit" className="submit-name"/>
            </form>
        </div>
        {/* <li><Link to="/snowboardeducation">Snowboard Education</Link></li> */}
        {/* <li><a href="#feedback">REVIEW</a></li> */}
            
         {/* <div className="in-item">
            <div className="social-icon">
                <img src={insta} alt="insta"/>
                <img src={facebook} alt="facebook"/>
                <img src={twitter} alt="twitter"/>
                <img src={linkedin} alt="linkedin"/>
            </div>
        </div> */}
    </ul>  
    )
}


export default Navbar_linkbar;