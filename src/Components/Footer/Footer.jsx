import React from 'react'
import logo from '../../assets/logo.jpg'
import { TiSocialFacebook } from 'react-icons/ti'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'

function Footer() {
  return (
    <div className='footer'>

      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} className='Logo' />
          </div>
          <p>your mind should be stronger than your feeling, flyy!</p>

          <div className="socialIcon flex">
            <TiSocialFacebook className='icon' />
            <AiFillTwitterSquare className='icon' />
            <AiFillInstagram className='icon' />
            <BsPinterest className='icon' />

          </div>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">check-in</a>
          </li>
          <li>
            <a href="">manager your book</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick guide</span>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">How to</a>
          </li>
          <li>
            <a href="">features</a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">Route-map</a>
          </li>

        </div>

      </div>


      <div className="copyRightDiv flex">
        <p>GROUPP 5 | Develloped by <a href="https://
      www.facebook.com/paddyanh.0207/" target='_blank'>NGO QUANG ANH VA NHUNG NGUOI BAN</a></p>
      </div>

    </div>
  )
}

export default Footer