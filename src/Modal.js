import './css/App.css'
function Modal({ open, children, onClose }) {
  const handleClose = (e) => {
    if (e.target.className === 'modalContainer') {
      onClose()
    }
    return null
  }

  if (open) {
    return (
      <div className='modalContainer' onClick={handleClose}>
        <div className='modal'>
          <div className='modal-header'>
            <h2>Change Your Registration</h2>
            <span className='modal-close' onClick={onClose}>
              x
            </span>
          </div>
          {children}
        </div>
      </div>
    )
  }
  return null
}

export default Modal
