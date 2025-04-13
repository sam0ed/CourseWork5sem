# CrossGen - Crossword Puzzle Generator

## Project Description
CrossGen is a desktop application for generating crossword puzzles. The application allows you to create crossword layouts based on specific topics, with customizable word counts and clue styles (including cryptic, humorous, and pessimistic clues).

## Architecture
The application uses a pipeline approach to generate crosswords:
1. **Word retrieval** - Generates words related to a chosen topic
2. **Clue generation** - Creates clues for each word in the selected style
3. **Layout generation** - Arranges words in a crossword grid

## Prerequisites
- Node.js (v14.0 or higher)
- npm (v6.0 or higher)
- Electron
- LM Studio with a local API server running at http://127.0.0.1:1234

## Installation

1. Clone the repository:
```bash
git clone https://github.com/sam0ed/CourseWork5sem.git
cd CourseWork5sem
```

2. Install dependencies:
```bash
# Install main application dependencies
npm install

# Install React frontend dependencies
cd renderer
npm install
cd ..
```

## Running the Application

1. Start LM Studio and set up the local API server

2. Start the React development server:
```bash
# In the renderer directory
cd renderer
npm start
```

3. In a separate terminal, start the Electron application:
```bash
# In the root directory
npm start
```

The application should launch automatically and connect to the React frontend running on http://localhost:3000.

## Building for Production

To create a production build:

```bash
# Build the React frontend
cd renderer
npm run build

# Package the Electron application
cd ..
npm run make
```

The packaged application will be available in the `out` directory.

## Features
- Generate crosswords on any topic
- Three crossword sizes: small, medium, and large
- Three clue styles: cryptic, humorous, and pessimistic
- Interactive crossword grid
- Word generation with AI assistance

