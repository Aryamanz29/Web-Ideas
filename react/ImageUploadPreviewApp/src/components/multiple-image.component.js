import React, { Component } from 'react';

export default class MultipleImageComponent extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
      super(props)
      this.state = {
          file: [null]
      }
      this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
      this.upload = this.upload.bind(this)
    }

    uploadMultipleFiles(e) {
      this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
      this.setState({ file: this.fileArray })
    }

    upload(e) {
      e.preventDefault()
      console.log(this.state.file)
    }

    render() {
      return (
        <div className="container"> 
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form>
                  <div className="form-group multi-preview">
                      {(this.fileArray || []).map(url => (
                          <img src={url} alt="..." height="250" width="200"/>
                      ))}
                  </div>

                  <div className="form-group">
                      <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
                  </div>
                  <button type="button" className="btn btn-primary" onClick={this.upload}>Upload</button>
              </form >
            </div>
          </div>
        </div>
      )
    }
}