# file-comparator

`file-comparator` is an Electron application that allows users to load and compare the differences between two files. This app is built with Electron and provides a simple interface for file comparison.

## Features

- Load two files and compare their differences
- Highlight differences between the files
- Easy-to-use interface

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/YourUsername/file-comparator.git
    cd file-comparator
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the application:
    ```bash
    npm start
    ```

## Building

To build the application into an MSI installer for Windows:

1. Ensure `electron-builder` is installed as a development dependency.
2. Run the build script:
    ```bash
    npm run build
    ```

The MSI installer will be located in the `dist` folder.

## Download

You can download the latest version of the MSI installer [here](https://github.com/navercm418/fileCompare/releases/latest/download/DiffChecker.msi).

## Usage

1. Open the application.
2. Use the interface to select two files you wish to compare.
3. The application will highlight the differences between the files.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- Built with [Electron](https://www.electronjs.org/)
- Diff functionality powered by [diff](https://www.npmjs.com/package/diff)
- Syntax highlighting by [highlight.js](https://highlightjs.org/)
