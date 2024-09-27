import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
    const { alert } = useContext(AlertContext);

    return (
        <div
            className={`grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-4`}
            style={{ visibility: alert ? "visible" : "hidden" }}
        >
            <div
                className="alert alert-error"
                style={{
                    backgroundColor: "#2D2D2D", // Dark background
                    color: "#F0F0F0", // Light text color
                    border: "1px solid #E63946", // Border to match alert type
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.6)", // Subtle shadow
                    borderRadius: "8px", // Rounded corners
                }}
            >
                <div className="flex items-center">
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 stroke-current mr-3"
                        style={{ stroke: "#E63946" }} // Bright icon color
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                        ></path>
                    </svg>
                    <strong>{alert?.msg}</strong>
                </div>
            </div>
        </div>
    )
}

export default Alert;
