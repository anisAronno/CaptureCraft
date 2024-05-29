# Full Page Screenshot Chrome Extension

## Overview

The **Full Page Screenshot** Chrome extension allows users to capture a full-page screenshot of any webpage with a single click. This extension is built using Manifest V3, ensuring compatibility with the latest standards and enhanced security features provided by the Chrome Extensions API.

## Features

- **Capture Full Page Screenshot**: Take a screenshot of the entire webpage, including content below the fold.
- **Simple and Intuitive UI**: A straightforward popup interface with a single button to initiate the screenshot.
- **High-Quality Image**: The screenshots are captured in high-resolution PNG format.

## Installation

1. Clone the repository or download the ZIP file and extract it.
    ```bash
    git clone https://github.com/anisAronno/CaptureCraft.git
    ```

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable **Developer mode** by toggling the switch in the top right corner.

4. Click the **Load unpacked** button and select the directory where you cloned or extracted the repository.

5. The **Full Page Screenshot** extension should now appear in your extensions list and the toolbar.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. Click the "Capture Full Page Screenshot" button.
3. The extension will capture the entire webpage and log the image data URL to the console (for demonstration purposes).

## Files

- **manifest.json**: The configuration file for the Chrome extension, specifying its properties and permissions.
- **popup.html**: The HTML file for the extension's popup interface.
- **popup.js**: The JavaScript file to handle user interactions in the popup.
- **background.js**: The background script (service worker) that handles the screenshot capture process.
- **content.js**: The content script that runs on the current webpage to facilitate the screenshot capture.
- **icon.png**: The icon for the Chrome extension.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
