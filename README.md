# Application Table Component

This React application provides a user-friendly, interactive table to display a list of applications with features such as sorting, pagination, and search.

## Features

- **Responsive Design**: The table is fully responsive and works well on both desktop and mobile.
- **Sorting**: Sort the table by Application No, Applicant Name, or Application Date.
- **Pagination**: Display a maximum of 10 applications per page.
- **Search**: Filter applications by Applicant Name, Status (English or Arabic), or Student ID.

## Prerequisites

- Node.js (v14 or later)
- React 18
- Ant Design 5.14
- Axios

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/Chirag-Paneliya/educhain-react-demo.git
   cd educhain-react-demo
   ```

2. Install dependencies:
    ```
    npm install
    ```

3. Run the development server:
    ```
    npm start
    ```

## Deployment

1. Build the production version of the app:
    ```
    npm run build
    ```

2. Deploy to your preferred hosting service.

## API Integration

This app fetches the list of applications from the following endpoint:

```
GET https://educhain.free.beeceptor.com/applications
```

Please ensure that the backend API is accessible, or modify the API endpoint if necessary.