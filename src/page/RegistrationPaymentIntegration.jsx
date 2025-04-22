import { useState } from 'react';
import { CreditCard, Calendar, User, Mail, Building, MapPin, Phone, Briefcase, ArrowRight, ChevronLeft, ArrowLeft, Lock, CheckCircle } from 'lucide-react';
import siram from "../assets/siram.png";
export default function RegistrationPaymentIntegration() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        sex: '',
        contactNo: '',
        email: '',
        institute: '',
        designation: '',
        address: '',
        category: 'Technologist',
    });

    const [step, setStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [loading, setLoading] = useState(false);
    const [complete, setComplete] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 1) {
            setStep(2);
            window.scrollTo(0, 0);
        } else if (step === 2) {
            // Simulate payment processing
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setComplete(true);
                setTimeout(() => {
                    // Reset form and go back to step 1 after showing success
                    setFormData({
                        name: '',
                        age: '',
                        sex: '',
                        contactNo: '',
                        email: '',
                        institute: '',
                        designation: '',
                        address: '',
                        category: 'Technologist',
                    });
                    setStep(1);
                    setComplete(false);
                }, 3000);
            }, 1500);
        }
    };

    const getRegistrationFee = () => {
        switch (formData.category) {
            case 'Technologist': return '₹500';
            case 'Doctor': return '₹500';
            case 'Student': return '₹400';
            default: return '₹500';
        }
    };

    // Progress bar calculation
    const progressPercentage = step === 1 ? 50 : (complete ? 100 : 75);

    // Success screen after payment
    if (complete) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="p-8 text-center">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                            <CheckCircle className="h-10 w-10 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Registration Successful!</h2>
                        <p className="mt-2 text-gray-600">Thank you for registering for the 11th State Conference.</p>
                        <p className="mt-1 text-gray-600">A confirmation email has been sent to {formData.email}</p>

                        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-500">See you on Sunday, 10th April 2022</p>
                            <p className="font-medium text-gray-800 mt-1">Mahesh Bhavan, Jalna</p>
                        </div>

                        <div className="mt-6">
                            <p className="text-sm text-gray-500">Registration ID: RAM-2022-{Math.floor(Math.random() * 1000000)}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-ful bg-gradient-to-b from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between mb-1 text-xs text-gray-600">
                        <span>Registration</span>
                        <span>Payment</span>
                        <span>Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-indigo-600 h-2 rounded-full transition-all duration-500 ease-in-out"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-xl  overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white px-6 py-6">
                        <div className="flex items-center space-x-4">
                            <div className="w- h-16 bg-white rounded-full flex-shrink-0">
                                <img src={siram} alt="RAM Logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="text-center flex-grow">
                                <h1 className="text-2xl font-bold">11<sup>th</sup> State Conference</h1>
                                <p className="text-sm text-indigo-200">Organised by</p>
                                <p className="font-semibold">RADIOGRAPHER'S ASSOCIATION OF MAHARASHTRA</p>
                                <p className="font-semibold text-indigo-200">JALNA UNIT</p>
                            </div>
                        </div>
                        <p className="text-center mt-3 text-indigo-100 font-medium">Sunday, 10th April 2022</p>
                    </div>

                    {/* Form */}
                    <div className="px-6 py-6">
                        <h2 className="text-xl font-bold text-center text-gray-800 pb-2 mb-6 border-b-2 border-indigo-600">
                            {step === 1 ? 'REGISTRATION DETAILS' : 'PAYMENT INFORMATION'}
                        </h2>

                        {step === 1 ? (
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-5">
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <User className="h-5 w-5 text-indigo-500" />
                                            </div>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2"
                                                placeholder="Enter your full name"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="relative">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                                            <input
                                                type="number"
                                                name="age"
                                                value={formData.age}
                                                onChange={handleChange}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-lg py-2"
                                                placeholder="Age"
                                                required
                                            />
                                        </div>

                                        <div className="relative">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                                            <select
                                                name="sex"
                                                value={formData.sex}
                                                onChange={handleChange}
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                required
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Phone className="h-5 w-5 text-indigo-500" />
                                            </div>
                                            <input
                                                type="tel"
                                                name="contactNo"
                                                value={formData.contactNo}
                                                onChange={handleChange}
                                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2"
                                                placeholder="Your contact number"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-indigo-500" />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2"
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Institute</label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Building className="h-5 w-5 text-indigo-500" />
                                            </div>
                                            <input
                                                type="text"
                                                name="institute"
                                                value={formData.institute}
                                                onChange={handleChange}
                                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2"
                                                placeholder="Your institute or organization"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Briefcase className="h-5 w-5 text-indigo-500" />
                                            </div>
                                            <input
                                                type="text"
                                                name="designation"
                                                value={formData.designation}
                                                onChange={handleChange}
                                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2"
                                                placeholder="Your professional designation"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                                                <MapPin className="h-5 w-5 text-indigo-500" />
                                            </div>
                                            <textarea
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                rows="3"
                                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg"
                                                placeholder="Your complete address"
                                                required
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Registration Category</label>
                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required
                                        >
                                            <option value="Technologist">Technologist (₹500)</option>
                                            <option value="Doctor">Doctor (₹500)</option>
                                            <option value="Student">Student (₹400)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                                    >
                                        Continue to Payment
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="payment-section">
                                <div className="flex items-center mb-6">
                                    <div className="bg-indigo-100 rounded-lg p-3 mr-4">
                                        <User className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Registrant</p>
                                        <p className="font-medium">{formData.name}</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <h4 className="font-medium text-gray-800">Order Summary</h4>
                                    <div className="flex justify-between mt-2">
                                        <span className="text-gray-600">Registration Fee ({formData.category})</span>
                                        <span className="font-medium">{getRegistrationFee()}</span>
                                    </div>
                                    <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between font-medium">
                                        <span>Total Amount</span>
                                        <span className="text-lg text-indigo-700">{getRegistrationFee()}</span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-sm font-medium text-gray-700 mb-3">Payment Method</h4>
                                    <div className="grid grid-cols-4 gap-2">
                                        <button
                                            className={`border ${paymentMethod === 'card' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'} rounded-lg p-3 flex items-center justify-center transition-all`}
                                            onClick={() => setPaymentMethod('card')}
                                            type="button"
                                        >
                                            <CreditCard className={`h-6 w-6 ${paymentMethod === 'card' ? 'text-indigo-600' : 'text-gray-400'}`} />
                                        </button>
                                        <button
                                            className={`border ${paymentMethod === 'upi' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'} rounded-lg p-3 flex items-center justify-center transition-all`}
                                            onClick={() => setPaymentMethod('upi')}
                                            type="button"
                                        >
                                            <img src="/api/placeholder/24/24" alt="UPI" className="h-6" />
                                        </button>
                                        <button
                                            className={`border ${paymentMethod === 'netbanking' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'} rounded-lg p-3 flex items-center justify-center transition-all`}
                                            onClick={() => setPaymentMethod('netbanking')}
                                            type="button"
                                        >
                                            <Building className={`h-6 w-6 ${paymentMethod === 'netbanking' ? 'text-indigo-600' : 'text-gray-400'}`} />
                                        </button>
                                        <button
                                            className={`border ${paymentMethod === 'wallet' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'} rounded-lg p-3 flex items-center justify-center transition-all`}
                                            onClick={() => setPaymentMethod('wallet')}
                                            type="button"
                                        >
                                            <img src="/api/placeholder/24/24" alt="Wallet" className="h-6" />
                                        </button>
                                    </div>
                                </div>

                                {paymentMethod === 'card' && (
                                    <div className="space-y-4">
                                        <div className="relative">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <CreditCard className="h-5 w-5 text-indigo-500" />
                                                </div>
                                                <input
                                                    type="text"
                                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-lg py-2"
                                                    placeholder="1234 5678 9012 3456"
                                                />
                                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                    <img src="/api/placeholder/40/16" alt="Card Types" className="h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="relative">
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                                                <div className="mt-1 relative rounded-md shadow-sm">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <Calendar className="h-5 w-5 text-indigo-500" />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2"
                                                        placeholder="MM/YY"
                                                    />
                                                </div>
                                            </div>

                                            <div className="relative">
                                                <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                                                <div className="mt-1 relative rounded-md shadow-sm">
                                                    <input
                                                        type="text"
                                                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-10 sm:text-sm border-gray-300 rounded-lg py-2"
                                                        placeholder="123"
                                                        maxLength="3"
                                                    />
                                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                        <Lock className="h-4 w-4 text-gray-400" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Card Holder Name</label>
                                            <input
                                                type="text"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-lg py-2"
                                                placeholder="Name as it appears on card"
                                            />
                                        </div>
                                    </div>
                                )}

                                {paymentMethod === 'upi' && (
                                    <div className="space-y-4">
                                        <div className="bg-indigo-50 p-4 rounded-lg text-center">
                                            <img src="/api/placeholder/180/180" alt="QR Code" className="mx-auto h-36 w-36 mb-4" />
                                            <p className="text-sm text-gray-700">Scan QR code with any UPI app</p>
                                        </div>
                                        <div className="relative">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <input
                                                    type="text"
                                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-lg py-2"
                                                    placeholder="yourname@upi"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {paymentMethod === 'netbanking' && (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-3 gap-2">
                                            {['SBI', 'ICICI', 'HDFC', 'Axis', 'PNB', 'BOB'].map((bank) => (
                                                <button
                                                    key={bank}
                                                    className="border border-gray-300 rounded-lg p-3 hover:bg-gray-50"
                                                    type="button"
                                                >
                                                    <div className="flex flex-col items-center">
                                                        <img src="/api/placeholder/36/36" alt={bank} className="h-6 w-6 mb-1" />
                                                        <span className="text-xs font-medium">{bank}</span>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                        <div className="relative">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Select Bank</label>
                                            <select
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option value="">Select your bank</option>
                                                <option>State Bank of India</option>
                                                <option>ICICI Bank</option>
                                                <option>HDFC Bank</option>
                                                <option>Axis Bank</option>
                                                <option>Punjab National Bank</option>
                                                <option>Bank of Baroda</option>
                                                <option>Other Banks</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                {paymentMethod === 'wallet' && (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            {['Paytm', 'PhonePe', 'GooglePay', 'Amazon Pay', 'Freecharge', 'MobiKwik'].map((wallet) => (
                                                <button
                                                    key={wallet}
                                                    className="border border-gray-300 rounded-lg p-3 hover:bg-gray-50"
                                                    type="button"
                                                >
                                                    <div className="flex flex-col items-center">
                                                        <img src="/api/placeholder/36/36" alt={wallet} className="h-6 w-6 mb-1" />
                                                        <span className="text-xs font-medium">{wallet}</span>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                        <p className="text-sm text-gray-500 text-center">Select a wallet to continue</p>
                                    </div>
                                )}

                                <div className="mt-6 flex items-center text-sm">
                                    <Lock className="h-4 w-4 text-gray-500 mr-1" />
                                    <span className="text-gray-500">Your payment information is secure</span>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                                    >
                                        <ArrowLeft className="mr-2 h-4 w-4" />
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        disabled={loading}
                                        className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${loading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors`}
                                    >
                                        {loading ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                Pay {getRegistrationFee()}
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="bg-gray-50 px-6 py-6 border-t border-gray-200">
                        <div className="text-center">
                            <h3 className="text-sm font-medium text-gray-700">Venue</h3>
                            <p className="text-sm text-gray-600 font-medium mt-1">Mahesh Bhavan</p>
                            <p className="text-xs text-gray-500">Near Guru Bacchan Chouk, Mantha Naka to Chatrapati Shivaji Maharaj Putla Road,</p>
                            <p className="text-xs text-gray-500">New Jalna, JALNA - 431203 (Maharashtra)</p>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-sm font-medium text-gray-700 text-center">Organizing Committee</h3>
                            <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                                <div className="text-center">
                                    <p className="font-medium">Sudam Vetal</p>
                                    <p>Krishna Imaging Center, Jalna</p>
                                    <p>Cell: 7972639276</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-medium">Chetan Dishware</p>
                                    <p>Nidan Imaging Center, Jalna</p>
                                    <p>Cell: 8766500442</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 text-center text-xs text-gray-500">
                            <p>For technical support: radiotechjalna2022@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}