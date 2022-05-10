import React from 'react'
import { Link } from "react-router-dom";
import "../ComponentsStyle/Daan.css"

const Home = () => {
  return (
    <div>
      <div id="banner">
        <div id='banner-overlay'>
          <h1>Find your perfect car.</h1>
          <Link to="./helper"><button>Use the helper</button></Link>
        </div>
      </div>
      <div id="homeHelperText">
          <h2>How we <span>help</span> you</h2>
          <p>We ask you a couple of questions about your preferences in a car and based on those questions we will give you recommendations.<br />
          <strong><span>Learn more about our helper...</span></strong>
          </p>
      </div>
      <div className='home-caroussel'>
        <h2>Best cars under <span>€2.500</span></h2>
        <div className='caroussel-wrapper'>
          <div className='caroussel-item'>
            <div className='classification'>#5</div>
            <img src="https://firebasestorage.googleapis.com/v0/b/carnext-44b47.appspot.com/o/Sirion-M2.JPG?alt=media&token=f3eab280-312b-4b88-88b4-a04ee4e8a177" alt="" />
            <div className='item-wrapper'>
              <p>Daihatsu Sirion</p>
              <p>2007</p>
            </div>
          </div>
          <div className='caroussel-item'>
            <div className='classification'>#4</div>
            <img src="https://firebasestorage.googleapis.com/v0/b/carnext-44b47.appspot.com/o/9098_78840_1000x700.jpg-604x467.jpg?alt=media&token=42541d06-8cd0-4d33-af88-6f4c64399b1b" alt="" />
            <div className='item-wrapper'>
              <p>Seat Ibiza</p>
              <p>2003</p>
            </div>
          </div>
          <div className='caroussel-item'>
            <div className='classification'>#3</div>
            <img src="https://firebasestorage.googleapis.com/v0/b/carnext-44b47.appspot.com/o/hyundai_accent_3-door_417.jpg?alt=media&token=bff857c0-9ce8-4296-a7e1-97aabc5dcd23" alt="" />
            <div className='item-wrapper'>
              <p>Hyundai Accent</p>
              <p>2007</p>
            </div>
          </div>
          <div className='caroussel-item'>
            <div className='classification'>#2</div>
            <img src="https://firebasestorage.googleapis.com/v0/b/carnext-44b47.appspot.com/o/MITSUBISHI_COLT_hatchback_3_2005_exterior-photos_o_mitsubishi-colt-hatchback-3-doors-2005-model-exterior-photos-2.jpg?alt=media&token=83e22800-60da-4564-a33f-2a73daa651d3" alt="" />
            <div className='item-wrapper'>
              <p>Mitsubishi Colt</p>
              <p>2005</p>
            </div>
          </div>
          <div className='caroussel-item'>
            <div className='classification'>#1</div>
            <img src="https://firebasestorage.googleapis.com/v0/b/carnext-44b47.appspot.com/o/Suzuki-Swift-2005-2010-02.jpg?alt=media&token=54cfa56b-23c6-4c60-beca-ec419552742a" alt="" />
            <div className='item-wrapper'>
              <p>Suzuki Swift</p>
              <p>2005</p>
            </div>
          </div>
        </div>
      </div>
      <div className='home-caroussel'>
        <h2>Best <span>electric</span> cars under <span>€20.000</span></h2>
        <div className='caroussel-wrapper'>
          <div className='caroussel-item'>
            <div className='classification'>#5</div>
            <img src="https://firebasestorage.googleapis.com/v0/b/carnext-44b47.appspot.com/o/Renault_Zoe_2019-01%402x.jpg?alt=media&token=1d40734a-0991-4fb6-90f5-946ac5c83318" alt="" />
            <div className='item-wrapper'>
              <p>Renault ZOE</p>
              <p>2019</p>
            </div>
          </div>
          <div className='caroussel-item'>
            <div className='classification'>#4</div>
            <img src="https://firebasestorage.googleapis.com/v0/b/carnext-44b47.appspot.com/o/2012-chevrolet-volt.jpg?alt=media&token=0d136b6f-acd2-45ba-ac7b-b3833d7ddc99" alt="" />
            <div className='item-wrapper'>
              <p>Chevrolet Volt</p>
              <p>2012</p>
            </div>
          </div>
          <div className='caroussel-item'>
            <div className='classification'>#3</div>
            <img src="https://firebasestorage.googleapis.com/v0/b/carnext-44b47.appspot.com/o/youyagsb5dup_800.jpg?alt=media&token=f4779a6f-b04f-4d4c-a8d2-91a6dbdd3f44" alt="" />
            <div className='item-wrapper'>
              <p>Nissan Leaf</p>
              <p>2015</p>
            </div>
          </div>
          <div className='caroussel-item'>
            <div className='classification'>#2</div>
            <img src="https://firebasestorage.googleapis.com/v0/b/carnext-44b47.appspot.com/o/carpixel.net-2017-hyundai-ioniq-electric-us-64627-wide.jpg?alt=media&token=8d5cce66-b85f-40c0-9d24-bf986356b819" alt="" />
            <div className='item-wrapper'>
              <p>Hyundai Ioniq</p>
              <p>2017</p>
            </div>
          </div>
          <div className='caroussel-item'>
            <div className='classification'>#1</div>
            <img src="https://firebasestorage.googleapis.com/v0/b/carnext-44b47.appspot.com/o/volkswagen-e-golf-285399-800.jpg?alt=media&token=b4efd1cb-d07f-4c84-8aa3-e15e56286397" alt="" />
            <div className='item-wrapper'>
              <p>Volkswagen e-Golf</p>
              <p>2018</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home