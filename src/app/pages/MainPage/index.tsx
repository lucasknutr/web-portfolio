"use client";
import React, { useState } from 'react'
import LanguageModal from '../../components/LanguageModal'

const MainPage = () => {
  const [language, setLanguage] = useState("");

  return (
    <div className="flex justify-center items-center h-[100svh]">
      {language === "" &&
      <LanguageModal setLanguage={setLanguage} />
      }
      {language === "portuguese" &&
        <h1>Portuguese</h1>
      }
      {language === "english" &&
        <h1>English</h1>
      }
    </div>
  )
}

export default MainPage
