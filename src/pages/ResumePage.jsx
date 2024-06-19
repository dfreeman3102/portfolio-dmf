export default function ResumePage() {
    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = '../public/dFreemanresume.pdf';
        link.download = 'dFreemanresume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
