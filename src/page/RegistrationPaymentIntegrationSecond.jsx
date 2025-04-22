import { useState } from 'react';

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
        alert('Registration submitted successfully!');
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-3xl mx-auto bg-white p-4">
                {/* Header with logos and title */}
                <div className="flex items-center justify-between mb-2">
                    <div className="w-16">
                        <img src="/api/placeholder/64/64" alt="RAM Logo" className="w-full" />
                    </div>
                    <div className="text-center flex-grow px-4">
                        <h1 className="text-3xl font-bold mb-1">11<sup>th</sup> State Conference</h1>
                        <p className="text-sm mb-1">Organised by</p>
                        <p className="font-bold text-lg">RADIOGRAPHER'S ASSOCIATION OF MAHARASHTRA (RAM)</p>
                        <p className="font-bold text-lg">JALNA UNIT</p>
                        <p className="mt-2">Sunday, 10th April 2022</p>
                    </div>
                    <div className="w-16">
                        <img src="/api/placeholder/64/64" alt="Association Logo" className="w-full" />
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
                        />
                        <span className="px-2 ml-4">Sex</span>
                        <span className="px-2">:</span>
                        <input
                            type="text"
                            name="sex"
                            value={formData.sex}
                            onChange={handleChange}
                            className="w-24 border-b border-black focus:outline-none"
                        />
                        <span className="px-2 ml-4">Contact No.</span>
                        <span className="px-2">:</span>
                        <input
                            type="text"
                            name="contactNo"
                            value={formData.contactNo}
                            onChange={handleChange}
                            className="flex-grow border-b border-black focus:outline-none"
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
                            />
                            <input
                                type="text"
                                className="w-full border-b border-black focus:outline-none mt-2"
                            />
                        </div>
                    </div>
                </form>

                {/* Venue Box */}
                <div className="flex mb-4">
                    <div className="border-2 border-black rounded-lg p-4 w-1/2">
                        <h3 className="text-center font-bold mb-1">Venue</h3>
                        <p className="text-center">Mahesh Bhavan,</p>
                        <p className="text-center text-sm">Near Guru Bacchan Chouk, Mantha Naka to</p>
                        <p className="text-center text-sm">Chatrapati Shivaji Maharaj Putla Road,</p>
                        <p className="text-center text-sm">New Jalna, JALNA - 431203 (Maharashtra)</p>
                    </div>

                    <div className="w-1/2 flex justify-center items-center">
                        <div className="text-center">
                            <p>(Signature of the Delegate)</p>
                        </div>
                    </div>
                </div>

                {/* Organizing Committee */}
                <div className="relative mb-4">
                    <hr className="border-t border-black" />
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                        <span className="font-bold">● Organizing Committee ●</span>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center mb-4">
                    <div>
                        <p className="font-bold">Sudam Vetal</p>
                        <p className="text-sm">Krishna Imaging Center, Jalna</p>
                        <p className="text-sm">Cell : 7972639276</p>
                    </div>
                    <div>
                        <p className="font-bold">Chetan Dishware</p>
                        <p className="text-sm">Nidan Imaging Center, Jalna</p>
                        <p className="text-sm">Cell : 8766500442</p>
                    </div>
                    <div>
                        <p className="font-bold">Anil Pakhare</p>
                        <p className="text-sm">Krishna Imaging Center</p>
                        <p className="text-sm">Cell : 8830151371</p>
                    </div>
                    <div>
                        <p className="font-bold">Sopan Bhonde</p>
                        <p className="text-sm">Deepak Hospital, Jalna</p>
                        <p className="text-sm">Cell : 8698748288</p>
                    </div>
                </div>

                {/* Registration Charges */}
                <div className="mb-4">
                    <h3 className="font-bold text-xl mb-1">REGISTRATION CHARGES</h3>
                    <p className="mb-2">Online Reg. Till 7<sup>th</sup> April 2022</p>

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
                                        <td>₹ 500/-</td>
                                    </tr>
                                    <tr>
                                        <td>Doctor</td>
                                        <td>₹ 500/-</td>
                                    </tr>
                                    <tr>
                                        <td>Student</td>
                                        <td>₹ 400/-</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="border border-black p-2 mt-2">
                                <p className="font-bold">Bank Details for Online Payment :</p>
                                <p className="text-sm">Name of A/c. : Radiographers Association of Maharashtra Jalna</p>
                                <p className="text-sm">Bank Name : Canara Bank &nbsp;&nbsp;&nbsp; Branch Name : Jalna</p>
                                <p className="text-sm">A/c. No. : 110040473726 &nbsp;&nbsp;&nbsp; IFSC Code : CNRB0002588</p>
                                <p className="text-sm">Contact No. : 9784143737 &nbsp;&nbsp;&nbsp; E-mail : radiotechjalna2022@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="text-center">
                                <img src="/api/placeholder/150/150" alt="QR Code" className="mx-auto mb-2" />
                                <p className="text-xs">Scan using any BHIM UPI enabled APP</p>
                                <div className="flex justify-center space-x-2 mt-2">
                                    <img src="/api/placeholder/30/30" alt="BHIM" className="h-6" />
                                    <img src="/api/placeholder/30/30" alt="UPI" className="h-6" />
                                    <img src="/api/placeholder/30/30" alt="PayTM" className="h-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submit Button (added for functionality) */}
                <div className="text-center">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-blue-600 text-white px-6 py-2 rounded"
                    >
                        Submit Registration
                    </button>
                </div>
            </div>
        </div>
    );
}