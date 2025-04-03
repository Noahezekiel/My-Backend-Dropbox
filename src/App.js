// App.js
import React, { useEffect, useState } from "react";
import { Amplify, Storage } from "aws-amplify";
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
      const fileList = await Storage.list("");
      setFiles(fileList);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  const uploadFile = async () => {
    if (!selectedFile) return;
    try {
      await Storage.put(selectedFile.name, selectedFile, {
        contentType: selectedFile.type,
      });
      fetchFiles();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const downloadFile = async (fileKey) => {
    try {
      const url = await Storage.get(fileKey);
      window.open(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

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
