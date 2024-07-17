import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'


export const HeaderSocial = () => {
  return (
    <div>
      <div className="header-socials">
        <a href="https://www.linkedin.com/in/abdo-ali-2133a5309/" target="_blank" rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/AbdallahMooharam" target="_blank" rel='noreferrer'><BsGithub /></a>
      </div>
    </div>
  )
}
