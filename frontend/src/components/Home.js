import Modal from 'react-modal';
import Axios from 'axios'
import React, { useEffect, useState } from 'react'

import CreateNote from './CreateNote'
// import EditNote from './EditNote'

import '../App.css';

import imgNote from '../img/note.png'
import imgDelete from '../img/delete.png'
import imgArchive from '../img/archive.png'
import imgEdit from '../img/edit.png'

function Home() {
  // http://localhost:3001/api/notes
  const this_url = process.env.REACT_APP_SERVER + process.env.REACT_APP_NOTES
  const [elements, setElements] = useState([])

  useEffect(() => {

    // Axios.get(this_url)
    //   .then((response) => { setElements(response.data) })
    //   .catch((error) => alert(error))

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
      {/* <header className="App-header">
        <p>
          Lady - tesis - borrador
        </p>

        <CreateNote />

        <a
          className="App-link"
          href="/ArchivedNotes"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Archived Notes
        </a>

      </header> */}

      <div className="navbar">
        <a href="#home">Home</a>
        <div className="subnav">
          <button className="subnavbtn">Torneos <i className="fa fa-caret-down"></i></button>
          <div className="subnav-content">
            <a href="#company">Yakarés MASC</a>
            <a href="#company">Yakarés FEM</a>
            <a href="#company">Super 8</a>
            <a href="#team">Femenino</a>
            <a href="#company">Zona centro</a>
            <a href="#careers">Sub intermedia</a>
            <a href="#careers">Intermedia</a>
            <a href="#careers">M18</a>
            <a href="#careers">M16</a>
            <a href="#careers">M14</a>
            <a href="#careers">Mini rugby</a>
          </div>
        </div>
        <div className="subnav">
          <button className="subnavbtn">Services <i className="fa fa-caret-down"></i></button>
          <div className="subnav-content">
            <a href="#bring">Bring</a>
            <a href="#deliver">Deliver</a>
            <a href="#package">Package</a>
            <a href="#express">Express</a>
          </div>
        </div>
        <div className="subnav">
          <button className="subnavbtn">Partners <i className="fa fa-caret-down"></i></button>
          <div className="subnav-content">
            <a href="#link1">Link 1</a>
            <a href="#link2">Link 2</a>
            <a href="#link3">Link 3</a>
            <a href="#link4">Link 4</a>
          </div>
        </div>
        <a href="#contact">Contact</a>
      </div>


      <div className="App-body">
        <div className="App-body-container">


          <div className="container">
            <div className="row">
              <div className="col-25">
                <label>Año</label>
              </div>
              <div className="col-75">
                <select id="country" name="country">
                  {[2022, 2021, 2020, 2019, 2018, 2017, 2016].map((element) => {
                    return (<option key={element} value={element}>{element}</option>)
                  })}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Torneo</label>
              </div>
              <div className="col-75">
                <select id="country" name="country">
                  {[
                    'URP - Primera - Clausura 2022',
                    'URP - Femenino - Clausura 2022',
                    'URP - Desarrollo (intermedia) 2022',
                    'URP - M14 - Apertura 2022',
                    'URP - M16 - Apertura 2022',
                    'URP - M18 - Apertura 2022',
                    'URP - Sub intermedia - Apertura 2022',
                    'URP - Intermedia - Apertura 2022',
                    'URP - Femenino - Apertura 2022',
                    'URP - Primera - Apertura 2022',
                  ].map((element) => {
                    return (<option key={element} value={element}>{element}</option>)
                  })}
                </select>
              </div>
            </div>


            {/* <div className="row">
              <div className="col-25">
                <label>Name</label>
              </div>
              <div className="col-75">
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
              </div>
            </div> */}

            <div className="row">
              <input type="submit" value="Buscar" />
            </div>
            <hr />
            <div>
              <p>URP - Primera - Apertura 2022</p>
              
              <table id="my_table">
                <thead>
                  <tr>
                    <th colSpan={6}>Fecha 4</th>
                  </tr>
                  <tr>
                    <th>Grupo</th>
                    <th>Cancha</th>
                    <th>Fecha - Hora</th>
                    <th>Equipo 1</th>
                    <th>Equipo 2</th>
                    <th>Resultado</th>
                  </tr>

                </thead>
                <tbody>
                  <tr>
                    <td>A</td>
                    <td>San Jose</td>
                    <td>23/10/2022 15:30</td>
                    <td className='winner'>San Jose</td>
                    <td>OKC - UAA</td>
                    <td>52 - 10</td>
                  </tr>
                  <tr>
                    <td>A</td>
                    <td>Curda</td>
                    <td>23/10/2022 15:30</td>
                    <td className='winner'>Curda</td>
                    <td>Cristo Rey</td>
                    <td>35 - 12</td>
                  </tr>
                  <tr>
                    <td>A</td>
                    <td>URP</td>
                    <td>23/10/2022 15:30</td>
                    <td>Villa Elisa</td>
                    <td className='winner'>Santa Clara</td>
                    <td>0 - 34</td>
                  </tr>
                  <tr>
                    <td>B</td>
                    <td>Luque</td>
                    <td>23/10/2022 15:30</td>
                    <td className='winner'>Luque</td>
                    <td>Monday</td>
                    <td>35 - 5</td>
                  </tr>
                  <tr>
                    <td>B</td>
                    <td>Franco</td>
                    <td>23/10/2022 15:30</td>
                    <td className='winner'>Franco</td>
                    <td>Itá</td>
                    <td>25 - 10</td>
                  </tr>
                  <tr>
                    <td>B</td>
                    <td>Area 1</td>
                    <td>23/10/2022 15:30</td>
                    <td>Area 1</td>
                    <td className='winner'>Jabalies</td>
                    <td>12 - 14</td>
                  </tr>
                </tbody>
              </table>

              <table id="my_table">
                <thead>
                  <tr>
                    <th colSpan={6}>Fecha 3</th>
                  </tr>
                  <tr>
                    <th>Grupo</th>
                    <th>Cancha</th>
                    <th>Fecha - Hora</th>
                    <th>Equipo 1</th>
                    <th>Equipo 2</th>
                    <th>Resultado</th>
                  </tr>

                </thead>
                <tbody>
                  <tr>
                    <td>A</td>
                    <td>San Jose</td>
                    <td>23/10/2022 15:30</td>
                    <td className='winner'>San Jose</td>
                    <td>OKC - UAA</td>
                    <td>52 - 10</td>
                  </tr>
                  <tr>
                    <td>A</td>
                    <td>Curda</td>
                    <td>23/10/2022 15:30</td>
                    <td className='winner'>Curda</td>
                    <td>Cristo Rey</td>
                    <td>35 - 12</td>
                  </tr>
                  <tr>
                    <td>A</td>
                    <td>URP</td>
                    <td>23/10/2022 15:30</td>
                    <td>Villa Elisa</td>
                    <td className='winner'>Santa Clara</td>
                    <td>0 - 34</td>
                  </tr>
                  <tr>
                    <td>B</td>
                    <td>Luque</td>
                    <td>23/10/2022 15:30</td>
                    <td className='winner'>Luque</td>
                    <td>Monday</td>
                    <td>35 - 5</td>
                  </tr>
                  <tr>
                    <td>B</td>
                    <td>Franco</td>
                    <td>23/10/2022 15:30</td>
                    <td className='winner'>Franco</td>
                    <td>Itá</td>
                    <td>25 - 10</td>
                  </tr>
                  <tr>
                    <td>B</td>
                    <td>Area 1</td>
                    <td>23/10/2022 15:30</td>
                    <td>Area 1</td>
                    <td className='winner'>Jabalies</td>
                    <td>12 - 14</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


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
        <p>Rugby Data Paraguay &copy; {new Date().getFullYear()}</p>
      </footer>
    </div >
  );
}

export default Home;
