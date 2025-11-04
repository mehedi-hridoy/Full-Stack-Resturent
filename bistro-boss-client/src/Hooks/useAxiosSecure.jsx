import axios from "axios";
export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    // You can add headers or other configurations here
    headers: {
        'Content-Type': 'application/json',
        // Add authorization token if needed
    }
});

const useAxiosSecure = () => {
    return axiosSecure;
    
};

export default useAxiosSecure;