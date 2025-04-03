// App.js
import React, { useEffect, useState } from "react";
import { Amplify } from 'aws-amplify';
import { getUrl, uploadData, remove, list } from '@aws-amplify/storage'; // Updated imports
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";
import { FiUpload, FiDownload } from "react-icons/fi";
import Sidebar from "./components/Sidebar";
import "./App.css";

Amplify.configure(awsconfig);

const App = ({ signOut, user }) => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const { items } = await list({ 
        path: '', 
        options: { accessLevel: 'guest' } // or 'private' depending on your config
      });
      setFiles(items);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  const uploadFile = async () => {
    if (!selectedFile) return;
    try {
      await uploadData({
        key: selectedFile.name,
        data: selectedFile,
        options: {
          accessLevel: 'guest', // or 'private'
          contentType: selectedFile.type
        }
      });
      fetchFiles();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const downloadFile = async (fileKey) => {
    try {
      const { url } = await getUrl({ 
        key: fileKey,
        options: { accessLevel: 'guest' }
      });
      window.open(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  // The rest of your component remains the same
  return (
    <div className="app-container">
      <Sidebar user={user} signOut={signOut} />
      <div className="main-content">
        <h1>Welcome, {user.username}</h1>
        <div className="upload-section">
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <button className="upload-btn" onClick={uploadFile}>
            <FiUpload /> Upload
          </button>
        </div>
        <h2>Uploaded Files</h2>
        <ul className="file-list">
          {files.map((file) => (
            <li key={file.key} className="file-item">
              {file.key} 
              <button className="download-btn" onClick={() => downloadFile(file.key)}>
                <FiDownload /> Download
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default withAuthenticator(App);