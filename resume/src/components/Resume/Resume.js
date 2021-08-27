import React from'react';

function Resume () {
    return(
        <section>
        <div className="container">
            <div className="about-intro hero-background contact-form">
                <ul className="resume-list">Front-end Skills
                    <li>○ HTML</li>
                    <li>○ CSS</li>
                    <li>○ JavaScript</li>
                    <li>○ JQuery</li>
                    <li>○ React</li>
                    <li>○ Bootstrap</li>
                    <li>○ Materialize</li>
                    <li>○ Handlebars</li>
                </ul>
                <ul className="resume-list">Back-end Skills
                    <li>○ Node</li>
                    <li>○ Express</li>
                    <li>○ MySQL, Sequelize</li>
                    <li>○ MongoDB, Mongoose</li>
                </ul>
            </div>
        </div>
        </section>
    );
}

export default Resume;