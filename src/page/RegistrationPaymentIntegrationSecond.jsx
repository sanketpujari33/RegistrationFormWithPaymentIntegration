import { useState } from 'react';
import siram from "../assets/siram.png";
import qrcode from "../assets/qrcode.jpg";

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert('Registration submitted successfully!');
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
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="flex-grow border-b border-black focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-3 flex">
                        <label className="w-24 font-bold">Age</label>
                        <span className="px-2">:</span>
                        <input
                            type="text"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-24 border-b border-black focus:outline-none"
                            required
                        />
                        <span className="px-2 ml-4">Sex</span>
                        <span className="px-2">:</span>
                        <select
                            name="sex"
                            value={formData.sex}
                            onChange={handleChange}
                            className="w-24 border-b border-black focus:outline-none bg-white"
                            required
                        >
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <span className="px-2 ml-4">Contact No.</span>
                        <span className="px-2">:</span>
                        <input
                            type="text"
                            name="contactNo"
                            value={formData.contactNo}
                            onChange={handleChange}
                            className="flex-grow border-b border-black focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-3 flex">
                        <label className="w-24 font-bold">E-mail</label>
                        <span className="px-2">:</span>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="flex-grow border-b border-black focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-3 flex">
                        <label className="w-24 font-bold">Institute</label>
                        <span className="px-2">:</span>
                        <input
                            type="text"
                            name="institute"
                            value={formData.institute}
                            onChange={handleChange}
                            className="flex-grow border-b border-black focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-3 flex">
                        <label className="w-24 font-bold">Designation</label>
                        <span className="px-2">:</span>
                        <input
                            type="text"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            className="flex-grow border-b border-black focus:outline-none"
                            required
                        />
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
                                className="w-full border-b border-black focus:outline-none"
                                placeholder="Address Line 1"
                                required
                            />
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
                                        className="w-full border-b border-black focus:outline-none"
                                        placeholder="Transaction ID/Reference Number"
                                        required
                                    />
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
                    >
                        Submit Registration
                    </button>
                </div>
            </div>
        </div>
    );
}