import React from 'react'
import Image from 'next/image'
import brazilFlag from '../../public/assets/br.svg'
import usaFlag from '../../public/assets/us.svg'

const LanguageModal = () => {
  return (
    <div className="flex flex-col">
      <h3>Choose your language / Escolha seu idioma</h3>
      <div className="flags flex">
        <div className="portuguese flex flex-col justify-center items-center">
          <Image src={brazilFlag} alt="Brazil Flag" width="450" height="200"/>
          Português
        </div>
        <div className="english flex flex-col justify-center items-center">
          <Image src={usaFlag} alt="USA Flag" width="500" height="250" />
          English
        </div>
      </div>
    </div>
  )
}

export default LanguageModal
