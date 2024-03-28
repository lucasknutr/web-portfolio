"use client";

import React, {useEffect} from 'react'
import Image from 'next/image'
import brazilFlag from '../../public/assets/br.svg'
import usaFlag from '../../public/assets/us.svg'

const LanguageModal = ({setLanguage}) => {
  const handleLanguage = (language: string) => {
    setLanguage(language);
  }

  return (
    <div className="flex flex-col items-center justify-center border-2 p-20 rounded-lg">
      <h2>Choose your language / Escolha seu idioma</h2>
      <div className="flags flex gap-4 items-center justify-center">
        <div className="portuguese flex flex-col justify-center items-center">
          <Image src={brazilFlag} alt="Brazil Flag" width="450" height="200" onClick={() => handleLanguage("portuguese")} />
          Português
        </div>
        <div className="english flex flex-col justify-center items-center">
          <Image src={usaFlag} alt="USA Flag" width="450" height="200" onClick={() => handleLanguage("english")} />
          English
        </div>
      </div>
    </div>
  )
}

export default LanguageModal
