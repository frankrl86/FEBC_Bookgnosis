import React from 'react';
import Navigation from '../Navigation';
import BookItems from "./BookItems";
import 'bootstrap/dist/css/bootstrap.min.css';

const teamMembers = [
    {
        name: 'Alexandra Ionescu',
        photo: './Alex.jpg',
        github: 'https://github.com/ionescuea',
    },
    {
        name: 'Fernanda Lujan',
        photo: './Fernanda.png',
        github: 'https://github.com/MaFer74',
    },
    {
        name: 'Frank Gabriel Rodriguez Lee',
        photo: './Frank.png',
        github: 'https://github.com/frankrl86',
    },
    {
        name: 'Jessica Santos',
        photo: './Jessica.jpg',
        github: 'https://github.com/jess-santos',
    },
    {
        name: 'Paul Asquith',
        photo: './Paul.jpg',
        github: 'https://github.com/Paul-codecourse',
    }]

function AboutUs() {
    return (
        <div>
            <div className="container">
                <h1 className="about-us-title">Our team</h1>
                <div className="row">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card">
                                <img src={member.photo} className="card-img-top" alt={member.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{member.name}</h5>
                                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub Profile</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
