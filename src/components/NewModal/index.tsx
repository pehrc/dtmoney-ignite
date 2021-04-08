import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import * as Styled from './styles'

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}

export function NewModal({isOpen, onRequestClose}: ModalProps){
  return(
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg}  alt="closeModal"/>
      </button>
      <Styled.Container>
      <h2>Cadastrar transação</h2>
      <input placeholder="Titulo"/>
      <input type="number" placeholder="Valor"/>
      <input placeholder="Categoria"/>
      <button type="submit">Cadastrar</button>
      </Styled.Container>
    </Modal>
  )
}