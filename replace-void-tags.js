const fs = require("fs");
const path = require("path");

// The folder you want to process (change this if necessary)
const folderPath = "./"; // Put the path to your HTML files here

// Regex pattern to match void tags and remove the trailing slash
const regex = /<(meta|br|hr|img|input|link|source)([^>]*)\s*\/>/g;

// Function to replace void tags
function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");

  // Replace void tags
  content = content.replace(regex, "<$1$2>");

  // Write the updated content back to the file
  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`Processed: ${filePath}`);
}

// Function to process all HTML files in a folder
function processFolder(folderPath) {
    fs.readdirSync(folderPath).forEach((file) => {
        const filePath = path.join(folderPath, file);

        if (fs.statSync(filePath).isDirectory()) {
        processFolder(filePath); // Recursively process directories
        } else if (filePath.endsWith(".html")) {
        processFile(filePath); // Process HTML files
        }
    });
}

// Run the function on your folder
processFolder(folderPath);
