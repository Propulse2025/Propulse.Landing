# Landing Page Project

This project is a simple landing page that utilizes HTML, Sass for styling, and JavaScript for interactivity. Below are the details for setting up and running the project.

## Project Structure

```
landing-page
├── src
│   ├── index.html        # Main HTML document
│   ├── styles
│   │   ├── main.scss     # Main Sass stylesheet
│   │   └── _variables.scss # Sass variables
│   ├── scripts
│   │   └── main.js       # JavaScript code
├── package.json          # npm configuration
├── gulpfile.js           # Gulp configuration
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd landing-page
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Compile Sass and run the project:**
   Use Gulp to compile Sass and watch for changes:
   ```
   npx gulp
   ```

4. **Open the landing page:**
   Open `src/index.html` in your browser to view the landing page.

## Usage

- Modify the styles in `src/styles/main.scss` and `_variables.scss` to change the appearance of the landing page.
- Add interactivity by editing `src/scripts/main.js`.
- Update `gulpfile.js` if you need to add more tasks or modify existing ones.

## License

This project is licensed under the MIT License.