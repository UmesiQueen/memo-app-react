import React from "react";

function Footer() {
  const date = new Date();
  return (
    <footer>
      <p>copyright &#169; Queen {date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
