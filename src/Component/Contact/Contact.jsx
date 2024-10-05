import { useState } from "react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const validateForm = () => {
        return Object.values(formData).every(field => field.trim() !== "");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateForm()) {
            alert('Please fill in all fields!');
            return;
        }
    };

    return (
        <div className="Home-app">
            <h1 className="fw-bold mb-3 c-2C3E50 text-uppercase">Contact section</h1>
            <div className="form w-100">
                <form className="w-50 p-3 mx-auto mt-5" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="position-relative c-1abc9c">User Name:</label>
                    <input 
                        type="text" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        name="name" 
                        placeholder="User Name" 
                        className="border-0 form-control my-4 border-bottom py-3 position-relative form" 
                    />

                    <label htmlFor="age" className="position-relative c-1abc9c">User Age:</label>
                    <input 
                        type="number" 
                        value={formData.age} 
                        onChange={handleInputChange} 
                        name="age" 
                        placeholder="User Age" 
                        className="border-0 form-control my-4 border-bottom py-3 position-relative form" 
                    />

                    <label htmlFor="email" className="position-relative c-1abc9c">User Email:</label>
                    <input 
                        type="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        name="email" 
                        placeholder="User Email" 
                        className="border-0 form-control my-4 border-bottom py-3 position-relative form" 
                    />

                    <label htmlFor="password" className="position-relative c-1abc9c">User Password:</label>
                    <input 
                        type="password" 
                        value={formData.password} 
                        onChange={handleInputChange} 
                        name="password" 
                        placeholder="User Password" 
                        className="border-0 form-control my-4 border-bottom py-3 position-relative form" 
                    />

                    <button type="submit" className="btn mt-4 text-white bg-1abc9c" disabled={!validateForm()}>Send Message</button>
                </form>
            </div>
        </div>
    );
}
