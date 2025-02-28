## Project Setup
### 1. Install Dependencies
Make sure you have **Node.js** installed. Then, install all required dependencies:

```sh
npm install
```
### 2. Configure Environment Variables
Before running the project, create a `.env` file in the root directory and add the following configuration:

```plaintext
PORT=3000
MONGO_URI=<your_mongodb_connection_string>
```
Replace <your_mongodb_connection_string> with your actual MongoDB URI.
### 3. Run the Application
```sh
npm run dev
```
