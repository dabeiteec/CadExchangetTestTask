import axios from 'axios';

const BASE_URL = 'http://vova-test-server.datareadable.com';

export const sendFeedback = async (name: string, email: string, message: string) => {
    const response = await axios.post(`${BASE_URL}/feedback_form`, { name, email, message });
    return response.data;
};
