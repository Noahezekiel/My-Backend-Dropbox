import React, { useState, useEffect } from "react";
import { Storage } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    const list = await Storage.list("");
    setFiles(list);
  };

  const uploadFile = async () => {
    if (!file) return;
    setUploading(true);
    await Storage.put(file.name, file, { contentType: file.type });
    setUploading(false);
    setFile(null);
    fetchFiles();
  };

  const downloadFile = async (fileKey) => {
    const signedURL = await Storage.get(fileKey);
    window.open(signedURL, "_blank");
  };

  return (
    <div className="App">
      <h1>Dropbox Clone</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      
      <h2>Your Files</h2>
      <ul>
        {files.map((f) => (
          <li key={f.key}>
            {f.key} 
            <button onClick={() => downloadFile(f.key)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withAuthenticator(App);
