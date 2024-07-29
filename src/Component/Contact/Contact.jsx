import { useState } from "react";


export function Contact() {
    const [inputName, setInputName] = useState();
    const [inputAge, setInputAge] = useState();
    const [inputEmail, setInputEmail] = useState();
    const [inputPassword, setInputPassword] = useState();
    const [showName , setShowName] = useState();
    const [showAge , setShowAge] = useState();
    const [showEmail , setShowEmail] = useState();
    const [showPassword , setShowPassword] = useState();
    
    function handleSubmitName(event) {
    setInputName(event.target.value);
    event.preventDefault();
    if (event.target.value.trim() !== "") {
        setShowName(true)
    } else {
        setShowName(false)
    }}
    
    
    function handleSubmitAge(event) {
        setInputAge(event.target.value);
        event.preventDefault();
        if (event.target.value.trim() !== "") {
            setShowAge(true)
        } else {
            setShowAge(false)
        }}


    function handleSubmitEmail(event) {
        setInputEmail(event.target.value);
        event.preventDefault();
        if (event.target.value.trim() !== "") {
            setShowEmail(true)
        } else {
            setShowEmail(false)
        }}


    function handleSubmitPassword(event) {
        setInputPassword(event.target.value);
        event.preventDefault();
        if (event.target.value.trim() !== "") {
            setShowPassword(true)
        } else {
            setShowPassword(false)
        }
    }



    return (
    <>
        <div className="Home-app ">
            <h1 className="fw-bold mb-3 c-2C3E50 text-uppercase">Contact section</h1>
            <div className="shape d-flex justify-content-center align-items-center ">
                <div className="Right border-bottom-color">
                </div>
                <i className="fa-solid fa-star text-white mx-3  c-2C3E50"></i>
                <div className="Left border-bottom-color">
                </div>
            </div>
            <div className="form w-100">
            <form className="w-50 p-3 mx-auto mt-5  ">
            
            {showName ? <label htmlFor="userName" className=" position-relative c-1abc9c">userName: </label> : null}

                <input type="text" value={inputName} onChange={handleSubmitName} name="userName" placeholder="userName" className="userName border-0 form-control my-4 border-bottom py-3 position-relative form" />
            
            {showAge ? <label htmlFor="userAge" className=" position-relative c-1abc9c">userAge: </label> : null}

                <input type="number" value={inputAge} onChange={handleSubmitAge} name="userAge" placeholder="userAge" className="userAge border-0 form-control my-4 border-bottom py-3 position-relative form" />
            
            {showEmail ? <label htmlFor="userEmail" className=" position-relative c-1abc9c">userEmail: </label> : null}

                <input type="email" value={inputEmail} onChange={handleSubmitEmail} name="userEmail" placeholder="userEmail" className="userEmail border-0 form-control my-4 border-bottom py-3 position-relative form" />
            
            {showPassword ? <label htmlFor="userPassword" className=" position-relative c-1abc9c">userPassword: </label> : null}
            
                <input type="password" value={inputPassword} onChange={handleSubmitPassword} name="userPassword" placeholder="userPassword" className="userPassword border-0 form-control my-4 border-bottom py-3 position-relative form" />
            
            <button className="btn mt-4 text-white bg-1abc9c "> send Message </button>
            </form>
            </div>
        </div>
    </>  )
}
