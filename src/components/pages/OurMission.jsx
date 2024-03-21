import React from 'react';
import Navigation from '../Navigation';
import BookItems from "./BookItems";
import 'bootstrap/dist/css/bootstrap.min.css';

function OurMission() {
    return (
        <div className="our-mission">
            <div className="mission-section">
                <h1>What is BookGnosis?</h1>
                <p>BookGnosis is a virtual library housing a vast array of books and articles that are accessible online at no cost. This repository serves as a valuable resource for individuals with a thirst for knowledge, catering to various interests and fields of study. Whether you're a dedicated reader, a student seeking educational materials, or someone eager to delve into fresh ideas, BookGnosis offers an extensive collection that can broaden your horizons with just a click.</p>
                    <p>From classic literature to contemporary research papers, BookGnosis encompasses a diverse range of materials, ensuring there's something for everyone. Users can explore topics spanning literature, science, history, philosophy, and more, making it a versatile platform suitable for individuals with different intellectual pursuits.</p>
            </div>
            <div className="mission-section">
                <h1>What is our mission?</h1>
                <p>Our mission is to make books accessible to everyone with the click of a button. Our virtual library is free and easy to access from any device! We believe in the power of knowledge and aim to empower individuals by providing them with a vast array of resources to enhance their learning experience. With BookGnosis, you can discover new topics, explore diverse perspectives, and enrich your understanding of the world around you.</p>
            <p>The key aspect of BookGnosis lies in its commitment to offering content that is free of copyright restrictions. This means that users can read, access, and potentially utilize the information available on the platform without encountering legal barriers associated with copyright infringement. By curating a collection of materials that are freely accessible, BookGnosis promotes the dissemination of knowledge and encourages intellectual exploration without financial constraints.</p>
            </div>
        </div>
    );
}

export default OurMission;
