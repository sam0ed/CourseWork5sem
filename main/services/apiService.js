const axios = require('axios');
const { API_ENDPOINT } = require('../config/constants');

/**
 * Service class for handling API communications
 */
class ApiService {
    /**
     * Makes a request to the chat completions API
     * @param {Array} messages - Array of message objects with role and content
     * @param {Object} options - Additional API options
     * @returns {Promise<Object>} - API response
     */
    async chatCompletion(messages, options = {}) {
        try {
            const defaultOptions = {
                temperature: 0.7,
                max_tokens: 150,
                stream: false
            };
            
            const response = await axios.post(API_ENDPOINT, {
                messages,
                ...defaultOptions,
                ...options
            });
            
            return response.data.choices[0].message;
        } catch (error) {
            console.error('API request failed:', error.message);
            throw new Error(`API request failed: ${error.message}`);
        }
    }
}

module.exports = new ApiService(); 