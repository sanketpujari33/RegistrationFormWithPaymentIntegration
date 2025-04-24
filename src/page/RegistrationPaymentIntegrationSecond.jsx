import { useState, useEffect } from 'react';
import siram from "../assets/siram.png";
import qrcode from "../assets/qrcode.jpg";
import axios from 'axios'; // You'll need to install axios: npm install axios

// Popup Modal Component
const FormModal = ({ isOpen, type, message, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 shadow-xl max-w-md w-full">
                <div className="flex items-center mb-4">
                    <div className={`rounded-full p-2 mr-3 ${type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {type === 'success' ? (
                            // Success icon
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        ) : (
                            // Error icon
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </div>
                    <h3 className="text-lg font-medium">
                        {type === 'success' ? 'Registration Successful' : 'Registration Failed'}
                    </h3>
                </div>

                <div className="mb-6">
                    <p className="text-gray-700">{message}</p>
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className={`px-4 py-2 rounded ${type === 'success' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'} text-white transition-colors`}
                    >
                        {type === 'success' ? 'Continue' : 'Try Again'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function RegistrationPaymentIntegrationSecond() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        sex: '',
        contactNo: '',
        email: '',
        institute: '',
        designation: '',
        address: '',
        addressLine2: '',
        category: 'Technologist',
        paymentMode: 'online',
        transactionId: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Modal state
    const [modal, setModal] = useState({
        isOpen: false,
        type: 'success', // 'success' or 'error'
        message: ''
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    // Validate form data
    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        // Age validation
        if (!formData.age) {
            newErrors.age = 'Age is required';
        } else if (isNaN(formData.age) || Number(formData.age) <= 0 || Number(formData.age) > 120) {
            newErrors.age = 'Please enter a valid age';
        }

        // Sex validation
        if (!formData.sex) {
            newErrors.sex = 'Sex is required';
        }

        // Contact validation
        if (!formData.contactNo) {
            newErrors.contactNo = 'Contact number is required';
        } else if (!/^[0-9]{10}$/.test(formData.contactNo)) {
            newErrors.contactNo = 'Please enter a valid 10-digit contact number';
        }

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Institute validation
        if (!formData.institute.trim()) {
            newErrors.institute = 'Institute is required';
        }

        // Designation validation
        if (!formData.designation.trim()) {
            newErrors.designation = 'Designation is required';
        }

        // Address validation
        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        }

        // Transaction ID validation
        if (!formData.transactionId.trim()) {
            newErrors.transactionId = 'Transaction ID is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Close modal handler
    const handleCloseModal = () => {
        setModal({
            isOpen: false,
            type: 'success',
            message: ''
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form
        if (!validateForm()) {
            // Scroll to first error
            const firstError = document.querySelector('.error-message');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        setIsSubmitting(true);

        try {
            // API endpoint - replace with your actual API endpoint
            const apiUrl = 'https://api.example.com/registration';

            // Send data to API
            const response = await axios.post(apiUrl, formData);

            console.log("API Response:", response.data);

            // Show success modal
            setModal({
                isOpen: true,
                type: 'success',
                message: 'Your registration has been submitted successfully! You will receive a confirmation email shortly.'
            });

            // Reset form after successful submission
            setFormData({
                name: '',
                age: '',
                sex: '',
                contactNo: '',
                email: '',
                institute: '',
                designation: '',
                address: '',
                addressLine2: '',
                category: 'Technologist',
                paymentMode: 'online',
                transactionId: ''
            });

        } catch (error) {
            console.error("Error submitting form:", error);

            // Show error modal
            setModal({
                isOpen: true,
                type: 'error',
                message: error.response?.data?.message || 'There was an error submitting your registration. Please try again or contact support.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Helper to display error message
    const ErrorMessage = ({ field }) => {
        return errors[field] ? <p className="text-red-500 text-xs mt-1 error-message">{errors[field]}</p> : null;
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
            <div className=" mx-auto border-4 border-indigo-500  rounded-lg bg-white p-6 shadow-md">
                {/* Header with logos and title */}
                <div className="flex items-center justify-between mb-4">
                    <div className="w-32">
                        <img src={siram} alt="Association Logo" className="w-full" />
                    </div>
                    <div className="text-center flex-grow px-4">
                        <h1 className="text-3xl font-bold mb-1">1<sup>st</sup> State Conference</h1>
                        <p className="text-sm mb-1">Organised by</p>
                        <p className="font-bold text-lg">SOCIETY OF ALLIED IMAGING & RADIOGRAPHER'S ASSOCIATION OF MAHARASHTRA (SAIRAM)</p>
                        <p className="font-bold text-lg">AHILYANAGAR UNIT</p>
                        <p className="mt-2">Saturday/Sunday 2-3 Aug 2025</p>
                    </div>
                    <div className="w-32">
                        <img src={siram} alt="Association Logo" className="w-full" />
                    </div>
                </div>

                {/* Registration Form Box */}
                <div className="border-2 border-black text-center p-1 mb-4">
                    <p className="font-bold text-xl">REGISTRATION FORM</p>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="mb-3 flex">
                        <label className="w-24 font-bold">Name</label>
                        <span className="px-2">:</span>
                        <div className="flex-grow">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full border-b ${errors.name ? 'border-red-500' : 'border-black'} focus:outline-none`}
                                required
                            />
                            <ErrorMessage field="name" />
                        </div>
                    </div>

                    <div className="mb-3 flex">
                        <label className="w-24 font-bold">Age</label>
                        <span className="px-2">:</span>
                        <div className="w-24">
                            <input
                                type="text"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                className={`w-full border-b ${errors.age ? 'border-red-500' : 'border-black'} focus:outline-none`}
                                required
                            />
                            <ErrorMessage field="age" />
                        </div>
                        <span className="px-2 ml-4">Sex</span>
                        <span className="px-2">:</span>
                        <div className="w-24">
                            <select
                                name="sex"
                                value={formData.sex}
                                onChange={handleChange}
                                className={`w-full border-b ${errors.sex ? 'border-red-500' : 'border-black'} focus:outline-none bg-white`}
                                required
                            >
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            <ErrorMessage field="sex" />
                        </div>
                        <span className="px-2 ml-4">Contact No.</span>
                        <span className="px-2">:</span>
                        <div className="flex-grow">
                            <input
                                type="text"
                                name="contactNo"
                                value={formData.contactNo}
                                onChange={handleChange}
                                className={`w-full border-b ${errors.contactNo ? 'border-red-500' : 'border-black'} focus:outline-none`}
                                required
                            />
                            <ErrorMessage field="contactNo" />
                        </div>
                    </div>

                    <div className="mb-3 flex">
                        <label className="w-24 font-bold">E-mail</label>
                        <span className="px-2">:</span>
                        <div className="flex-grow">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full border-b ${errors.email ? 'border-red-500' : 'border-black'} focus:outline-none`}
                                required
                            />
                            <ErrorMessage field="email" />
                        </div>
                    </div>

                    <div className="mb-3 flex">
                        <label className="w-24 font-bold">Institute</label>
                        <span className="px-2">:</span>
                        <div className="flex-grow">
                            <input
                                type="text"
                                name="institute"
                                value={formData.institute}
                                onChange={handleChange}
                                className={`w-full border-b ${errors.institute ? 'border-red-500' : 'border-black'} focus:outline-none`}
                                required
                            />
                            <ErrorMessage field="institute" />
                        </div>
                    </div>

                    <div className="mb-3 flex">
                        <label className="w-24 font-bold">Designation</label>
                        <span className="px-2">:</span>
                        <div className="flex-grow">
                            <input
                                type="text"
                                name="designation"
                                value={formData.designation}
                                onChange={handleChange}
                                className={`w-full border-b ${errors.designation ? 'border-red-500' : 'border-black'} focus:outline-none`}
                                required
                            />
                            <ErrorMessage field="designation" />
                        </div>
                    </div>

                    <div className="mb-3 flex">
                        <label className="w-24 font-bold">Address</label>
                        <span className="px-2">:</span>
                        <div className="flex-grow">
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className={`w-full border-b ${errors.address ? 'border-red-500' : 'border-black'} focus:outline-none`}
                                placeholder="Address Line 1"
                                required
                            />
                            <ErrorMessage field="address" />
                            <input
                                type="text"
                                name="addressLine2"
                                value={formData.addressLine2}
                                onChange={handleChange}
                                className="w-full border-b border-black focus:outline-none mt-2"
                                placeholder="Address Line 2"
                            />
                        </div>
                    </div>

                    <div className="mb-3 flex">
                        <label className="w-24 font-bold">Category</label>
                        <span className="px-2">:</span>
                        <div className="flex space-x-4">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Technologist"
                                    checked={formData.category === "Technologist"}
                                    onChange={handleChange}
                                />
                                <span>Technologist (₹2000)</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Student"
                                    checked={formData.category === "Student"}
                                    onChange={handleChange}
                                />
                                <span>Student (₹1500)</span>
                            </label>
                        </div>
                    </div>

                    <div className="mb-3 flex">
                        <label className="w-24 font-bold">Payment</label>
                        <span className="px-2">:</span>
                        <div className="flex-grow">
                            <div className="flex space-x-4 mb-2">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="paymentMode"
                                        value="online"
                                        checked={formData.paymentMode === "online"}
                                        onChange={handleChange}
                                    />
                                    <span>Online Payment</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="paymentMode"
                                        value="upi"
                                        checked={formData.paymentMode === "upi"}
                                        onChange={handleChange}
                                    />
                                    <span>UPI/QR Payment</span>
                                </label>
                            </div>
                            {formData.paymentMode && (
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="transactionId"
                                        value={formData.transactionId}
                                        onChange={handleChange}
                                        className={`w-full border-b ${errors.transactionId ? 'border-red-500' : 'border-black'} focus:outline-none`}
                                        placeholder="Transaction ID/Reference Number"
                                        required
                                    />
                                    <ErrorMessage field="transactionId" />
                                </div>
                            )}
                        </div>
                    </div>
                </form>

                {/* Venue Box */}
                <div className="flex flex-wrap justify-center mb-4">
                    <div className="border-2 border-black rounded-lg p-4 w-1/2">
                        <h3 className="text-center font-bold mb-1">Venue</h3>
                        <p className="text-center">Hotel, ai Palkhi, Nivara</p>
                        <p className="text-center text-sm">Brird And Fish Museaum</p>
                        <p className="text-center text-sm">SHIRDI, AHILYANAGAR - 423109 (Maharashtra)</p>
                    </div>
                </div>

                {/* Organizing Committee */}
                <div className="relative mb-6 mt-8">
                    <hr className="border-t border-black" />
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                        <span className="font-bold">● Organizing Committee ●</span>
                    </div>
                </div>

                <div className="grid grid-cols-6  w-full text-center mb-6">
                    <div className="">
                        <p className="font-bold">Digamber Sonawane</p>
                        <p className="text-sm">+918805565447</p>
                    </div>
                    <div className="">
                        <p className="font-bold">Anil Umbarkar</p>
                        <p className="text-sm">+919544201555</p>
                    </div>
                    <div className="">
                        <p className="font-bold">Ganesh Lokhande</p>
                        <p className="text-sm">+917020532689</p>
                    </div>
                    <div className="">
                        <p className="font-bold">Hansaraj Parade</p>
                        <p className="text-sm">+917030011527</p>
                    </div>
                    <div className="">
                        <p className="font-bold">Vaibhav Kulkarni</p>
                        <p className="text-sm">+919766921038</p>
                    </div>
                    <div className="">
                        <p className="font-bold">Satpute Prashant</p>
                        <p className="text-sm">+91992965350</p>
                    </div>
                </div>

                {/* Registration Charges */}
                <div className="mb-6">
                    <h3 className="font-bold text-xl mb-1">REGISTRATION CHARGES</h3>
                    <p className="mb-2">Online Reg. Till 15<sup>th</sup> July 2025</p>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <table className="w-full border-collapse text-left">
                                <thead>
                                    <tr>
                                        <th className="font-bold pr-4">Category</th>
                                        <th className="font-bold">Registration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Technologist</td>
                                        <td>₹ 2000/-</td>
                                    </tr>
                                    <tr>
                                        <td>Student</td>
                                        <td>₹ 1500/-</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="border border-black p-2 mt-2">
                                <p className="font-bold">Bank Details for Online Payment</p>
                                <p className="text-sm">Name of A/c.:SOCIETY OF ALLIED IMAGING & RADIOGRAPHER'S ASSOCIATION OF MAHARASHTRA </p>
                                <p className="text-sm">Bank Name : BANK OF MAHARASHTRA &nbsp;&nbsp; Branch Name:AHILYANAGAR</p>
                                <p className="text-sm">A/c. No. : 60498972404 &nbsp;&nbsp; IFSC Code : MAHB0000125</p>
                                <p className="text-sm">E-mail : *******@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="text-center">
                                <img src={qrcode} alt="QR Code" className="mx-auto w-48 mb-2" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                    </button>
                </div>
            </div>

            {/* Modal Component */}
            <FormModal
                isOpen={modal.isOpen}
                type={modal.type}
                message={modal.message}
                onClose={handleCloseModal}
            />
        </div>
    );
}