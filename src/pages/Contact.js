import React from 'react';
import {MdCall} from 'react-icons/md';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import Layout from "../components/Layout/Layout"; 
import '../styles/contact.css';

export default function Contact() {
  return (
    <div className='contact'>
      <Layout>

      
      {/* <div>
        <h2 className='h2'>Easy to contact us</h2>
        <p>We are always ready to help by providing the best services for you.</p>
      </div> */}
      <div className='leftside'>
        <div className='contact-container'>
          <h3 className='foods'>Join Us</h3>
          <h3>Reach out here</h3>
          <p>Do you think you can become our advertiser?</p>
        </div>
        <h4 className='icon'>{<MdCall/>}256 787878985</h4>
        <br>
        </br>
        <div className='specialist-container'>
          <h3>Speak to a Specialist</h3>
          <p>You can reach us directly in case you need to know something sensitive.</p>
          <h4 className='icon'>{<MdCall/>}256 787878985</h4>
          <h4 className='icon'>{<MdCall/>}256 787878985</h4>
        </div>
      </div>
      <div className='rightside'>
        <h4>Get in Touch</h4>
        <form id="contact-form">
          <label for="name">Full Name</label>
          <input name="name" placeholder='Enter full name....' type='text'/>
          <label for="name">Email</label>
          <input name="email" placeholder='Enter email....' type='email'/>
          <textarea
            rows='6'
            placeholder='Enter message....'
            name='message'
            required
          ></textarea>
          <button type='submit'>Send </button>
        </form>
      </div>
      <div class="social flex">
        <h2>Follow us on</h2>
        <FiFacebook className='icons' />
        <FiTwitter className='icons'/>
        <FiInstagram className='icons' />
      </div>
      </Layout>
    </div>
  );
}
