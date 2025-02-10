import React from "react";

const Footer = () => {
  return (
    <footer class="dark:bg-black dark:text-white bg-white text-black p-6 text-center">
      <div class="mb-6">
        <h3 class="text-lg font-bold">Contact Us</h3>
        <p>Email: ayushmishra1672003@gmail.com | Phone: +91-1234567890</p>
        <p>Address: New Delhi, Delhi, India</p>
      </div>
      <div class="mb-6">
        <h3 class="text-lg font-bold">Quick Links</h3>
        <div class="flex justify-center space-x-4">
          <a href="/" class="hover:underline">
            Home
          </a>
          <a href="/about" class="hover:underline">
            About
          </a>
          <a href="/" class="hover:underline">
            Contact
          </a>
          <a href="/" class="hover:underline">
            FAQ
          </a>
        </div>
      </div>
      <div class="mb-6">
        <h3 class="text-lg font-bold">Follow Us</h3>
        <div class="flex justify-center space-x-4">
          <a href="https://facebook.com" class="hover:underline">
            Facebook
          </a>
          <a href="https://twitter.com" class="hover:underline">
            Twitter
          </a>
          <a href="https://instagram.com" class="hover:underline">
            Instagram
          </a>
          <a href="https://linkedin.com" class="hover:underline">
            LinkedIn
          </a>
        </div>
      </div>
      <div class="mt-6">
        <p>&copy; 2025 DriveOn Car Rental Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
