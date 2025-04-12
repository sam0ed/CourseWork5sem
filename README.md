# CrossGen - Crossword Puzzle Generator

## Project Description
CrossGen is a desktop application for generating crossword puzzles. The application allows you to create crossword layouts based on specific topics, with customizable word counts and clue styles (including cryptic clues).
- The application uses a pipeline approach to generate crosswords:
  1. Word retrieval based on a topic
  2. Clue generation for each word
  3. Layout generation to create the crossword grid

## Prerequisites
- Node.js (v12.0 or higher)
- npm (v6.0 or higher)
- Electron
- LM Studio with a local API server running at http://127.0.0.1:1234

## Installation

1. Clone the repository:
```
git clone https://github.com/sam0ed/CourseWork5sem.git
cd CourseWork5sem
```

2. Install dependencies:
```
# Install main application dependencies
npm install

# Install React frontend dependencies
cd renderer
npm install
cd ..
```

## How to Run the Project

1. Start the React development server:
```
# In the renderer directory
cd renderer
npm start
```

2. In a separate terminal, start the Electron application:
```
# In the root directory
npm start
```

The application should launch automatically and connect to the React frontend running on http://localhost:3000.

## Build
To create a production build, run `npm run build` in the renderer directory

