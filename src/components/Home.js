import React from 'react';
import { Link } from 'react-router-dom';



export default function Home(){
    return (
       <>
        <div className="home">
        <Link className="home-link" to="/nasaphoto">Click to view Astronomy Picture of the Day</Link>

        </div>
        <div className="description">
        Astronomy Picture of the Day is a website provided by NASA and Michigan Technological University. According to the website, "Each day a different image or photograph of our universe is featured, along with a brief explanation written by a professional astronomer." The photograph does not necessarily correspond to a celestial event on the exact day that it is displayed, and images are sometimes repeated. However, the pictures and descriptions often relate to current events in astronomy and space exploration. The text has several hyperlinks to more pictures and websites for more information. The images are either visible spectrum photographs, images taken at non-visible wavelengths and displayed in false color, video footage, animations, artist's conceptions, or micrographs that relate to space or cosmology. Past images are stored in the APOD Archive, with the first image appearing on June 16, 1995. This initiative has received support from NASA, the National Science Foundation, and MTU. The images are sometimes authored by people or organizations outside NASA, and therefore APOD images are often copyrighted, unlike many other NASA image galleries.
        </div>
       </>
    );
}
