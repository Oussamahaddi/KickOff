import React, { ReactNode } from 'react'
import { Modal } from 'react-native'
interface Props {
  children : ReactNode
  transparent : boolean
  modalVisible : boolean
}

const ModalComponent = ({children, transparent, modalVisible} : Props) => {

  return (
      <Modal 
        animationType='slide'
        visible={modalVisible}
        transparent={transparent}
      >
        {children}
      </Modal>
  )
}

export default ModalComponent