import axios from 'axios';

const BASE_URL = 'https://vova-test-server.datareadable.com';

const getFeedBack = async (name: string, email: string, message: string) => {
    const response = await axios.post(`${BASE_URL}/feedback_form`, { name, email, message });
    return response.data;
};
export default getFeedBack;