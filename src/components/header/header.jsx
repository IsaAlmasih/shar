"use client"
import React, { useState } from 'react'

import styles from "./styles.module.css"
import clsx from 'clsx'
import Link from 'next/link'


const Header = () => {
    const [isVisible,setIsVisible]=useState(true)
    const headerClasses=clsx(styles.header,{
    [styles.isVisible]:isVisible
    })
  return (
    <header className={headerClasses}>
      <Link className={styles.logo} href={"/"}>SHAROV technologies</Link>
      <div className={styles.navigation}>
        <Link href={"/"}>Главная страница</Link>
        <Link href={"/"}>О нас</Link>
        <Link href={"/"}>Контакты</Link>
      </div>
    </header>
  );
}

export default Header