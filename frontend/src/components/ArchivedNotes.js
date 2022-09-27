import Modal from 'react-modal';
import Axios from 'axios'
import React, { useEffect, useState } from 'react'

import '../App.css';

import imgNote from '../img/note.png'
import imgDelete from '../img/delete.png'
import imgArchive from '../img/archive.png'
import imgEdit from '../img/edit.png'

import imgUnarchive from '../img/unarchive.png'

function ArchivedNotes() {
  // http://localhost:3001/api/notes
  const this_url = process.env.REACT_APP_SERVER + process.env.REACT_APP_NOTES
  const [elements, setElements] = useState([])

  useEffect(() => {
    Axios.get(this_url)
      .then((response) => { setElements(response.data) })
      .catch((error) => alert(error))

  }, [this_url]);

  const deleteFunction = (_id) => {
    if (window.confirm('Are you sure you want to DELETE this document?')) {
      Axios.delete(this_url + _id)
        .then(() => window.location.reload())
        .catch((error) => alert(error))
    }
  };

  const archiveFunction = (_id) => {
    if (window.confirm('Are you sure you want to archive this document?')) {
      Axios.patch(this_url + _id, { archived: true })
        .then(() => window.location.reload())
        .catch((error) => alert(error))
    }
  };





  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [editID, setEditID] = useState(0)
  const [editTitle, setEditTitle] = useState(0)
  const [editContent, setEditContent] = useState(0)

  function openModal(element) {
    setEditID(element._id)
    setEditTitle(element.title)
    setEditContent(element.content)

    setIsOpen(true);
  }

  function afterOpenModal() {

  }

  function closeModal() {
    setIsOpen(false);
  }

  const editFunction = (_id, title, content) => {
    Axios.patch(this_url + editID, { title, content })
      .catch((error) => alert(error))
  };


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Archived Notes
        </p>


        <a
          className="App-link"
          href="/Home"
        >
          Go back to unarchived notes
        </a>

      </header>

      <div className="App-body">
        <div className="App-body-container">
          {elements.map((element) => {
            const updatedAt = new Date(element.updatedAt).toLocaleDateString()//"en-US");

            return (
              <div key={element._id} className="note-div">
                <div className='note-div-logo'>
                  <img src={imgNote} alt='archive' className='img-note' />
                </div>
                <div className='note-div-title-and-last-edit'>
                  <p>Title: {element.title} </p>
                  <p className='note-div-last-edit-label'>Last edit: {updatedAt}</p>
                </div>
                <div className='note-div-buttons'>
                  <img src={imgArchive} alt='archive' className='img-button'
                    onClick={() => { archiveFunction(element._id) }} />



                  <>
                    <img src={imgEdit} alt='edit' className='img-button'
                      onClick={() => { openModal(element) }} />

                    <Modal
                      isOpen={modalIsOpen}
                      onAfterOpen={afterOpenModal}
                      onRequestClose={closeModal}
                      style={customStyles}
                      contentLabel="Example Modal"
                    >
                      <div className="container col-md-6 mt-4">
                        <h1>Edit Note</h1>
                        {/* <form onSubmit={editFunction(editID)}> */}
                        <form >
                          <div className="center">
                            <div className="columns">
                              <label className='label-left'>Title</label>
                              <input type="text" className="input-right" required placeholder='Title'
                                onChange={e => setEditTitle(e.target.value)} value={editTitle} />

                            </div>
                            <div className="columns">
                              <label className='label-left'>Content</label>
                              <textarea className="input-right-multiline" required placeholder='Content'
                                onChange={e => setEditContent(e.target.value)} value={editContent} />
                            </div>
                          </div>
                          <div className="right">
                            <button onClick={closeModal}>Cancel</button>
                            {/* <button type="submit" className="btn btn-primary">Save</button> */}
                            {/* <button onClick={editFunction} >Save</button> */}
                            <button onClick={() => editFunction(editID, editTitle, editContent)} >Save</button>


                          </div>
                        </form>

                      </div >
                    </Modal>
                  </>



                  <img src={imgDelete} alt='delete' className='img-button'
                    onClick={() => { deleteFunction(element._id) }} />
                </div>
              </div>
            )
          })}

          {/* 
          <p>
            Notes list:
          </p>
        
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lista.map((val) => {
              return (
                <tr key={val._id}>
                  <td>{val.title}</td>
                  <td>{val.content}</td>
                  <td>
                    <img src={imgArchive} alt='archive' width='25px'
                      onClick={() => { archiveFunction(val._id) }} />
                  </td>
                  <td>
                    <img src={imgEdit} alt='edit' width='25px'
                      onClick={() => { editFunction(val._id) }} />
                  </td>
                  <td>
                    <img src={imgDelete} alt='delete' width='25px'
                      onClick={() => { deleteFunction(val._id) }} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table> */}

        </div>
      </div>

      <footer className="App-footer">
        <p>Made by Rodrigo Centurión &copy; {new Date().getFullYear()}</p>
      </footer>
    </div >
  );
}

export default ArchivedNotes;
