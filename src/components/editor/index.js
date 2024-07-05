import "./index.css";
import { Component } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaEllipsisH } from 'react-icons/fa';
import { RiUpload2Fill } from "react-icons/ri";

// Mock data
const tabsList = [
  {
    tabName: "Terminals",
    id: 'terminals'
  },
  {
    tabName: "Transport",
    id: 'transport'
  },
  {
    tabName: "Contact details",
    id: 'contactDetails'
  }
];

const terminalList = [
  {
    imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1720167973/card_img_lg5nus.jpg",
    name: "Terminal 1",
    description: "Optional metadata should be two lines."
  },
  {
    imgUrl: "https://res.cloudinary.com/dwwunc51b/image/upload/v1720167973/card_img_lg5nus.jpg",
    name: "Terminal 2",
    description: "Optional metadata should be two lines."
  }
];

class Editor extends Component {
  state = {
    isModalOpen: false,
    newTerminal: {
      imgUrl: "",
      name: "",
      description: ""
    }
  };

  onClickBack = ()=>{
    const {onClickBackBtn} = this.props
    onClickBackBtn()
  }

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      newTerminal: {
        ...prevState.newTerminal,
        [name]: value
      }
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { newTerminal } = this.state;
    terminalList.push(newTerminal);
    this.toggleModal();
  };

  render() {
    const { details } = this.props;
    const { isModalOpen, newTerminal } = this.state;

    if (!details || details.length === 0) {
      return <div>Loading...</div>;
    }

    const airportDetails = details[0];

    return (
      <div className="edit-container">
        <div className="edit-name">
          <h2 className="side-header btn" onClick={this.onClickBack}>Airports</h2>
          <MdKeyboardArrowRight />
          <h2 className="side-header-bold">{airportDetails.airport}</h2>
        </div>
        <h1 className="header">{airportDetails.airport}</h1>
        <div className="tab-con">
          {tabsList.map(eachTab => (
            <h2 key={eachTab.id} className="tab-name">{eachTab.tabName}</h2>
          ))}
        </div>
        <hr />
        <div className="card-con">
          {terminalList.map(eachCard => (
            <div key={eachCard.name} className="card">
              <img src={eachCard.imgUrl} className="card-img" alt="card-img" />
              <div className="card-text-details">
                <div className="text-dots">
                  <h2 className="terminal-name">{eachCard.name}</h2>
                  <button type="button" className='more-options'><FaEllipsisH /></button>
                </div>
                <p className="description">{eachCard.description}</p>
              </div>
            </div>
          ))}
          <button type="button" className="terminal-btn" onClick={this.toggleModal}>
            + Add Terminal
          </button>
        </div>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">

              <form onSubmit={this.handleSubmit} className="modal-form">
                <label className="modal-label">
                  Terminal title:
                  <input
                    type="text"
                    name="name"
                    value={newTerminal.name}
                    onChange={this.handleInputChange}
                    required
                    className="modal-input"
                  />
                </label>
                <label className="modal-label">
                  Description:
                  <input
                    type="text"
                    name="description"
                    value={newTerminal.description}
                    onChange={this.handleInputChange}
                    required
                    className="modal-input"
                  />
                </label>
                <div className="modal-buttons">
                  <button type="button" className="file-btn modal-upload-btn">
                    <RiUpload2Fill size={15} className="upload" /> upload image
                  </button>
                  <button type="button" className="modal-btn modal-cancel-btn" onClick={this.toggleModal}>
                    Cancel
                  </button>
                  <button type="submit" className="modal-btn modal-continue-btn">
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <h1 className="side-headers">Services</h1>
        <div className="service-con">
          <h2 className="service-head">
            Lost & found
          </h2>
          <hr />
          <div className="option-con">
            <div className="option">
              <h2 className="service-head">Service Name</h2>
              <select name='subCategory' className="select">
                <option>Lost & found</option>
                <option>Option 2</option>
              </select>
            </div>
            <div className="option">
              <h2 className="service-head">Category</h2>
              <select name='subCategory' className="select">
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div className="option">
              <h2 className="service-head">Sub Category</h2>
              <select name='subCategory' className="select">
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <button type="file" className="file-btn"><RiUpload2Fill size={15} className="upload" /> upload image</button>
          </div>
          <button type="button" className="add-btn save">Save</button>
          <h2 className="service-head">Lounge</h2>
          <hr />
          <h2 className="service-head">Money Exchange</h2>
          <hr />
        </div>
      </div>
    );
  }
}

export default Editor;
