import Axios from 'axios'
import React, { useState } from 'react'
import Modal from 'react-modal';
import '../App.css';

export default function CreateNote() {
    // http://localhost:3001/api/notes
    const this_url = process.env.REACT_APP_SERVER + process.env.REACT_APP_NOTES

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

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
    }

    function openModalForEdit() {
        setIsOpen(true);
    }

    const [title, setTitle] = useState(0)
    const [content, setContent] = useState(0)

    const insertFunction = () => {
        const newDocument = { title, content }
        Axios.post(this_url, newDocument);
    };


    return (
        <>
            <button onClick={openModal}>Create note</button>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="container col-md-6 mt-4">
                    <h1>Create Note</h1>
                    <form onSubmit={insertFunction}>
                        <div className="center">
                            <div className="columns">
                                <label className='label-left'>Title</label>
                                <input type="text" className="input-right" required placeholder='Title'
                                    onChange={e => setTitle(e.target.value)} />
                            </div>
                            <div className="columns">
                                <label className='label-left'>Content</label>
                                <textarea className="input-right-multiline" required placeholder='Content'
                                    onChange={e => setContent(e.target.value)} />
                            </div>
                        </div>
                        <div className="right">
                            <button onClick={closeModal}>Cancel</button>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>

                </div >
            </Modal>
        </>
    )
}
