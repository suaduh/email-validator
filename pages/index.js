import { useState } from "react";

async function verifyEmailWithAPI(email) {
    try {
        // fetch data from the validate API endpoint
        const response = await fetch(`/api/validate?email=${email}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error verifying email:', error.message);
        return { valid: false };
    }
}

export default function Home() {
    // states to hold the email input and API response
    const [email, userEmail] = useState("");
    const [api, apiResponse] = useState(null);

    const checkValidity = async () => {
        const result = await verifyEmailWithAPI(email);
        apiResponse(result);
    };

    // render the UI
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-bc">
            <div className="w-full max-w-xl px-4 py-8 rounded-lg shadow-md bg-customc relative mb-8">
                <h2 className="text-4xl font-bold mb-4 text-center">
                    <span style={{
                        background: '-webkit-linear-gradient(-70deg, #a2defa 0%, #9fb3e3 50%, #c49fe3 100%)',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>Email Validator</span>
                    <span style={{fontSize: '20px'}}></span>
                </h2>
                {/* email input and validation button */}
                <h3 className="text-primary text-xl font-medium mb-4 text-center">📧 check if an email address is valid</h3>
                <div className="flex flex-col mb-4">
                    <div className="flex">
                        <input
                            autoFocus={true}
                            type="email"
                            className="w-full border border-transparent rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 font-mono"
                            placeholder="Enter an email address..."
                            onChange={(e) => userEmail(e.target.value)}
                            style={{
                                background: '-webkit-linear-gradient(-70deg, #a2defa 0%, #9fb3e3 50%, #c49fe3 100%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                borderImage: '-webkit-linear-gradient(-70deg, #a2defa 0%, #a19cff 100%) 1 1 4 stretch',
                                borderRadius: '0.75rem',
                            }}
                            onInput={(e) => e.target.style.color = '#d1dff0'}
                        />
                        <button
                            className="bg-bc text-primary font-bold rounded-r-md px-4 py-2 ml-4 hover:bg-primary hover:text-bc"
                            type="submit"
                            onClick={checkValidity}
                        >
                            🔍
                        </button>
                    </div>
                </div>
                {/* display API response */}
                {api && (
                    <div className="mt-4">
                        <table className="w-full border border-gray-200 rounded-md shadow-md overflow-hidden">
                            <thead className="bg-bc">
                                <tr>
                                    <th className="px-4 py-2 font-bold text-left text-primary">Information</th>
                                    <th className="px-4 py-2 font-bold text-left text-primary">Result</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white font-mono">
                                <tr style={{ borderBottom: '1px solid #2b2c40' }}>
                                    <td className="px-4 py-2 text-primary">✓ Valid</td>
                                    <td className="px-4 py-2 capitalize text-primary">{api.valid.toString()}</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #2b2c40' }}>
                                    <td className="px-4 py-2 text-primary">🗑️ Disposable</td>
                                    <td className="px-4 py-2 capitalize text-primary">{api.disposable.toString()}</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #2b2c40' }}>
                                    <td className="px-4 py-2 text-primary">📁 Domain</td>
                                    <td className="px-4 py-2 text-primary">{api.domain}</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #2b2c40' }}>
                                    <td className="px-4 py-2 text-primary">💬 Text</td>
                                    <td className="px-4 py-2 text-primary">{api.text}</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #2b2c40' }}>
                                    <td className="px-4 py-2 text-primary">📖 Reason</td>
                                    <td className="px-4 py-2 text-primary">{api.reason}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <div className="flex justify-center mb-4">
                <a href="https://github.com/suaduh" className="flex items-center bg-customc p-2 rounded-lg shadow-md">
                    <img src="github.PNG" alt="GitHub Icon" className="w-8 h-8 mr-2" />
                    <span className="text-primary font-medium">github.com/suaduh</span>
                </a>
            </div>
        </div>
    );
}
