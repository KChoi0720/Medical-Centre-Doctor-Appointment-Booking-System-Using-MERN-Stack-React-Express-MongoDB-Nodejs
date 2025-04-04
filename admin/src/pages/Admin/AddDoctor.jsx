import React from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {
  return (
    <form>

      <p>Add Doctor</p>

      <div>
        <div>
          <label htmlFor='doc-img'>
            <img src={assets.upload_area} alt='' />
          </label>

          <input type='file' id='doc-img' hidden />
          <p>Upload doctor <br />picture</p>

        <div>
          <div>
            <div>
              <p>Your name</p>
              <input type='text' placeholder='Name' required />
            </div>

            <div>
              <p>Doctor Email</p>
              <input type='email' placeholder='Email' required />
            </div>

            <div>
              <p>Doctor Password</p>
              <input type='password' placeholder='Password' required />
            </div>

            <div>
              <p>Experience</p>
              <select name='' id=''>
                <option value=''>1 years</option>
                <option value=''>2 years</option>
                <option value=''>3 years</option>
                <option value=''>4 years</option>
                <option value=''>5 years</option>
                <option value=''>6 years</option>
                <option value=''>7 years</option>
                <option value=''>8 years</option>
                <option value=''>9 years</option>
                <option value=''>10+ years</option>
              </select>
            </div>

            <div>
              <p>Experience</p>
              <input type='text' placeholder='Experience' required />
            </div>

            <div>
              <p>Fee per consultation</p>
              <input type='text' placeholder='Fee' required />
            </div>

            <div>
              <p>Timings</p>
              <input type='text' placeholder='Timings' required />
            </div>

            <div>
              <p>Phone</p>
              <input type='text' placeholder='Phone' required />
            </div>

            <div>
              <p>Address</p>
              <input type='text' placeholder='Address' required />
            </div>

            <div>
              <p>City</p>
              <input type='text' placeholder='City' required />
            </div>

            <div>
              <p>State</p>
              <input type='text' placeholder='State' required />
            </div>

            <div>
              <p>Country</p>
              <input type='text' placeholder='Country' required />
            </div>

            <div>
              <p>Pincode</p>
              <input type='text' placeholder='Pincode' required />
            </div>

            <div>
              <p>Gender</p>
              <select>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>' /
            </div>
          </div>
        </div>

        </div>
      </div>

    </form>
  )
}

export default AddDoctor
