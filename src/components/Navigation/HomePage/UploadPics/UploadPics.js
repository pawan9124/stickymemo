import React,{Component} from 'react';
import { Upload, Icon, Modal } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css';

class UploadPics extends Component{
	state = {
	    previewVisible: false,
	    previewImage: '',
	    loading: false,
    	iconLoading: false,
    	textareaData:'',
	    fileList: [{
	      uid: -1,
	      name: 'xxx.png',
	      status: 'done',
	      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	    }],
	    inputData:'',
	};
  //call of the image upload function
  handleCancel = () => this.setState({ previewVisible: false })

	handlePreview = (file) => {
		console.log("FILE",file);
	    this.setState({
	      previewImage: file.url || file.thumbUrl,
	      previewVisible: true,
	    });
	}

  handleChange = ({ fileList }) => {
  	this.setState({ fileList })
  }


  enterLoading = () => {
  	// console.log("PostUpload",this.state.fileList,this.state.textareaData);
    this.setState({ loading: true });
    this.props.setPostData(this.state.fileList,this.state.textareaData);
    this.setState({ loading: false });
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }

  setInputData = (e)=>{
  	this.setState({inputData:e.target.value})
  }
  handleTextArea = (e)=> {
  	this.setState({textareaData:e.target.value})
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
		<div className="clearfix">
			<div style={{"width":"650px"}}>
			<textarea rows="10" cols="100" onChange={this.handleTextArea}></textarea>
			<div className="display-flex" style={{"float":"right"}}>
				<Upload
				action="//jsonplaceholder.typicode.com/posts/"
				listType="picture-card"
				fileList={fileList}
				onPreview={this.handlePreview}
				onChange={this.handleChange}
				className="display-flex"
				>
				{fileList.length >= 3 ? null : uploadButton}
				</Upload>
				<Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
					<img alt="example" style={{ width: '100%' }} src={previewImage} />
				</Modal>
				<Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
		          Post
		        </Button>
		        </div>
			</div>
			{/*<div>{this.state.fileList.length > 1 ?<img src={this.state.fileList[1].thumbUrl}></img>:null}</div>*/}
		</div>
    );
  }
}

export default UploadPics;