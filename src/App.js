import './App.css';
//import ScriptTag from 'react-script-tag';
import { Component } from 'react';
//function App() {
 class App extends Component
 { 
  filetest =() =>
  {
    alert("okk");
  };


  constructor() {
    super();
    this.fileUploadfunc = this.fileUploadfunc.bind(this);
  }

  async fileUploadfunc(formElement)
  {
   

    const formData = new FormData(formElement.target);
    try {
      const response = await fetch("http://localhost:3000/file-upload", {
        method: "POST",
        body: formData,
        dataType:"JsonP"
      });
      if (response.status === 200 || response.status === 201) {
        alert("File Uploaded");
      } else {
        alert("Failed");
      }
    } catch (e) {
        console.log(e);
      alert("Error");
    }
  }
render()
{
 
  return (
    <div className="App">
     <form onSubmit={this.fileUploadfunc}>
      <div className="App">
        <label>Upload File</label>
        <input name="picture" type="file" id="formFile" />
      </div>
      <div>
          <button type="submit">Upload File</button>
      </div>
    </form>

    </div>
  );
}
}

export default App;

/*</div> <form onsubmit="fileUpload(this);return false;">
<form onSubmit={"fileUploadfunc(this);return false;"}>*/