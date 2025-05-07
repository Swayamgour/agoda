// import React from 'react'

// function ProfilePage () {

//   return (

//   )
// }

// export default ProfilePage

import React from 'react'
import '../../style/Profile.css' // We'll create this CSS file next

const ProfilePage = () => {
  return (
    <div style={{ marginTop: '100px' }} className='user-details-container'>
      <h1>User details</h1>

      <div className='detail-row'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '12%', minWidth: '50px' }}>
            <img
              src={
                'https://imgs.search.brave.com/On1jUTlYXU0nMnY-dqmpNg0PIqUoPv_J_lcSWebc9bY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/OTQyMDM0My9waG90/by9zbWlsaW5nLW1h/bi1vdXRkb29ycy1p/bi10aGUtY2l0eS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/OGwtZ09ib0dFRlN5/Q0ZYcjA5RWd1RG1W/MEUwYkZUNXVzQW1z/MXd5RkJoOD0'
              }
              alt='Profile'
              className='rounded-circle'
              style={{
                width: 40,
                height: 40,
                objectFit: 'cover',
                borderRadius: '50%'
              }}
            />
          </div>
          <div>
            <div className='detail-label'>Name</div>
            <div className='detail-value'>Swayam Gaur</div>
          </div>
        </div>
        <div className='detail-value'>Edit</div>
      </div>

      <div className='detail-row-second'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <div className='detail-label'>Gmail</div>
            <div className='detail-value'>support@gmail.com</div>
          </div>
        </div>
        <div className='detail-value'>Edit</div>
      </div>

      <div className='detail-row-second'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <div className='detail-label'>Phone</div>
            <div className='detail-value'>9090909090</div>
          </div>
        </div>
        <div className='detail-value'>Edit</div>
      </div>

      <div className='detail-row-second'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <div className='detail-label'>Password</div>
            <div className='detail-value'>******</div>
          </div>
        </div>
        <div className='detail-value'>Edit</div>
      </div>
    </div>
  )
}

export default ProfilePage
