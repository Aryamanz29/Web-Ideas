import React, { Component } from 'react';

export default class SingleImageComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
        file: null
    }
    this.uploadSingleFile = this.uploadSingleFile.bind(this)
    this.upload = this.upload.bind(this)
  }

  uploadSingleFile(e) {
    this.setState({
      file: URL.createObjectURL(e.target.files[0])
    })
  }

  upload(e) {
    e.preventDefault()
  }

  render() {
    let imgPreview;
    if (this.state.file) {
      imgPreview = <img src={this.state.file} alt='' height="250" width="250"/>;
    }
    return (

    <div className="container"> 
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <form>
            <div className="form-group preview">
                {imgPreview}
            </div>

            <div className="form-group">
                <input type="file" className="form-control" onChange={this.uploadSingleFile} />
            </div>
            <button type="button" className="btn btn-primary btn-block" onClick={this.upload}>Upload</button>
          </form >
        </div>
      </div>
    </div>
        
    )
  }
}