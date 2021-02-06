async function fileUpload(fileForm) {
    const formData = new FormData(fileForm);
    try {
      const response = await fetch("http://localhost:3000/file-upload", {
        method: "POST",
        body: formData,
        dataType:"JsonP"
      });
   
      if (response.status === 200 || response.status === 201) {
        alert("successfully uploaded file");
      } else {
        alert("failed to upload");
      }
    } catch (e) {
        console.log(e);
      alert("some error occured while uploading file");
    }
  }