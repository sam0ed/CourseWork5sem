/**
 * Constants for crossword generation functionality
 */

// Options for clue styles supported by the application
const CLUE_STYLE_OPTIONS = ['cryptic', 'humorous', 'pessimistic'];

// Size presets for crossword with corresponding word counts
const SIZE_OPTIONS = {
    'small': 10,
    'medium': 20,
    'large': 30
};

// API endpoints
const API_ENDPOINT = 'http://127.0.0.1:1234/v1/chat/completions';

module.exports = {
    CLUE_STYLE_OPTIONS,
    SIZE_OPTIONS,
    API_ENDPOINT
}; 