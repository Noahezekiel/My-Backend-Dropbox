## Welcome to My Backend Dropbox  
A serverless file synchronization system inspired by **Dropbox**, built with **ReactJS**, **AWS Amplify**, **S3**, and **Lambda**.  
This backend app enables secure authentication, file uploading, downloading, and versioning — all deployed in the cloud for free.

## Task
- ✅ User authentication with AWS Cognito
- ✅ File uploads to S3
- ✅ File download links (private, secure)
- ✅ Automatic file versioning
- ✅ Fully hosted in the cloud with public URL
- ✅ Styled interface with custom design
- ✅ One React component per file
- ✅ Component-specific CSS files

## Installation
git clone https://git.us.qwasar.io/my_backend_dropbox_180640_oluho_/my_backend_dropbox.git
cd my-backend-dropbox
npm install
amplify init
amplify add auth
amplify add storage
amplify add function
amplify push
npm start

## Usage
1. Authenticate (sign in/up)
2. Upload files via the UI
3. View uploaded files
4. Click to download (generates secure S3 link)
5. File versioning is handled via S3 automatically

## The Core Team
Developer: Anong Haruna
Developer: Noah Ezekiel

Hosting
URL: https://d1qaw3oquodtq6.cloudfront.net