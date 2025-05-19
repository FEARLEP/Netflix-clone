import React from 'react'

function Footer() {
  return (
    <>

 <footer className="netflix-footer">
 <div className="social-links">
   <a href="https://facebook.com/netflix">Facebook</a>
   <a href="https://instagram.com/netflix">Instagram</a>
   <a href="https://twitter.com/netflix">Twitter</a>
 </div>
 <div className="footer-links">
        <div className="links-column">
     <a href=".">Audio Description</a>
      <a href=".">Investor Relations</a>
      <a href=".">Legal Notices</a>
   </div>
    <div className="links-column">
     <a href=".">Help Center</a>
       <a href=".">Jobs</a>
        <a href=".">Cookie Preferences</a>
     </div>
     <div className="links-column">
       <a href=".">Gift Cards</a>
       <a href=".">Terms of Use</a>
       <a href=".">Corporate Information</a>
      </div>
      <div className="links-column">
        <a href=".">Media Center</a>
        <a href=".">Privacy</a>
       <a href=".">Contact Us</a>
       </div>
  </div>
  <div className="copyright">
    © 2023 Netflix, Inc.
   </div>
   </footer>

    </>
  )
}

export default Footer