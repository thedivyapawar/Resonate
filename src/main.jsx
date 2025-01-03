import { createRoot } from 'react-dom/client'
import './index.css'
import { myRoutes } from './App.jsx'
import { RouterProvider } from 'react-router-dom'

// const setFavicon = (iconPath) => {
//   const link = document.createElement('link'); // Create a link element
//   link.rel = 'icon'; // Set it as a favicon link
//   link.type = 'image/jpeg'; // Specify the MIME type (change to image/png if needed)
//   link.href = iconPath; // Set the path to the favicon
//   document.head.appendChild(link); // Append it to the <head> of the document
// };

// // Example usage
// setFavicon('/favicon.jpg'); // Path to the favicon, typically from the public folders

createRoot(document.getElementById('root')).render(
  <RouterProvider router = {myRoutes}/>
)