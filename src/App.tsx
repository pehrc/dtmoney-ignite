import React, { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global"
import { NewModal } from "./components/NewModal";


export function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenIsModalOpen() {
    setIsModalOpen(true)
  }
  function handleCloseIsModalOpen() {
    setIsModalOpen(false)
  }

  return (
    <>
        <Header onOpenModal={handleOpenIsModalOpen}/>
        <NewModal isOpen={isModalOpen} onRequestClose={handleCloseIsModalOpen}/>
        <Dashboard/>
        <GlobalStyle/>     
    </>
  );
}