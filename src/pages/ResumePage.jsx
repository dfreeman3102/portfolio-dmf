import React from 'react';

function ResumePage() {
    const downloadFile = () => {
        const fileUrl = `https://docs.google.com/document/d/1MijPWBE1iIAroY32SUJrDgWU8hUiU6BEAWG1IwkPU1I/edit?usp=sharing`
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'dFreemanResume.pdf';
        link.click();
    };

    return (
        <div>
            <h1>Resume and Proficiencies</h1>
            <button onClick={downloadFile}>Download my Resume Here!</button>

            <h2>Proficiencies</h2>
            <ul>
                <li>Node.js</li>
                <li>React</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>SQL</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        </div>
    );
}

export default ResumePage;