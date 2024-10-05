import { useState } from "react";
import './Contact.css'; 

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        password: ''
    });

    const [showLabels, setShowLabels] = useState({
        name: false,
        age: false,
        email: false,
        password: false
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setShowLabels({ ...showLabels, [name]: value.trim() !== "" });
    }

    const validateForm = () => {
        return (
            formData.name && formData.age && formData.email && formData.password
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateForm()) {
            alert('Please fill in all fields!');
            return;
        }
        // إرسال البيانات
    };

    return (
        <>
            <div className="Home-app">
                <h1 className="fw-bold mb-3 c-2C3E50 text-uppercase">Contact section</h1>
                <div className="shape d-flex justify-content-center align-items-center">
                    <div className="Right border-bottom-color"></div>
                    <i className="fa-solid fa-star text-white mx-3 c-2C3E50"></i>
                    <div className="Left border-bottom-color"></div>
                </div>
                <div className="form w-100">
                    <form className="w-50 p-3 mx-auto mt-5" onSubmit={handleSubmit}>
                        <div className="form-group">
                            {showLabels.name && (
                                <label htmlFor="userName" className={`position-relative c-1abc9c label-animation ${formData.name ? 'label-animation-active' : ''}`}>
                                    userName:
                                </label>
                            )}
                            <input 
                                type="text" 
                                value={formData.name} 
                                onChange={handleInputChange} 
                                name="name" 
                                placeholder="userName" 
                                className="userName border-0 form-control my-4 border-bottom py-3 position-relative form" 
                            />
                        </div>

                        <div className="form-group">
                            {showLabels.age && (
                                <label htmlFor="userAge" className={`position-relative c-1abc9c label-animation ${formData.age ? 'label-animation-active' : ''}`}>
                                    userAge:
                                </label>
                            )}
                            <input 
                                type="number" 
                                value={formData.age} 
                                onChange={handleInputChange} 
                                name="age" 
                                placeholder="userAge" 
                                className="userAge border-0 form-control my-4 border-bottom py-3 position-relative form" 
                            />
                        </div>

                        <div className="form-group">
                            {showLabels.email && (
                                <label htmlFor="userEmail" className={`position-relative c-1abc9c label-animation ${formData.email ? 'label-animation-active' : ''}`}>
                                    userEmail:
                                </label>
                            )}
                            <input 
                                type="email" 
                                value={formData.email} 
                                onChange={handleInputChange} 
                                name="email" 
                                placeholder="userEmail" 
                                className="userEmail border-0 form-control my-4 border-bottom py-3 position-relative form" 
                            />
                        </div>

                        <div className="form-group">
                            {showLabels.password && (
                                <label htmlFor="userPassword" className={`position-relative c-1abc9c label-animation ${formData.password ? 'label-animation-active' : ''}`}>
                                    userPassword:
                                </label>
                            )}
                            <input 
                                type="password" 
                                value={formData.password} 
                                onChange={handleInputChange} 
                                name="password" 
                                placeholder="userPassword" 
                                className="userPassword border-0 form-control my-4 border-bottom py-3 position-relative form" 
                            />
                        </div>

                        <button type="submit" className="btn mt-4 text-white bg-1abc9c">send Message</button>
                    </form>
                </div>
            </div>
        </>
    );
}
