import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface ContextProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const ModalContext = createContext<ContextProps>({} as ContextProps);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);  

  return (
    <ModalContext.Provider value={{isOpen, setIsOpen}}>
      { children }
    </ModalContext.Provider>
  )
}

const useModal = () => {
  const context = useContext(ModalContext)
  return context
}

export { useModal, ModalProvider }