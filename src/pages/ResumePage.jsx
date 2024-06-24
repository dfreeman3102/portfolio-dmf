export default function ResumePage() {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/dFreemanresume.pdf";
    link.download = "dFreemanresume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
     
      <button className="btn btn-outline-dark text-light fs-4" onClick={downloadFile}>
        Download my Resume Here!
      </button>

      <h2>Proficiencies</h2>
      <ul className="list-group list-group-flush">
        <li className="list-group-item fs-3 ">Node.js</li>
        <li className="list-group-item fs-3 ">React</li>
        <li className="list-group-item fs-3 ">Express</li>
        <li className="list-group-item fs-3 ">MongoDB</li>
        <li className="list-group-item fs-3 ">SQL</li>
        <li className="list-group-item fs-3 ">JavaScript</li>
        <li className="list-group-item fs-3 ">HTML</li>
        <li className="list-group-item fs-3 ">CSS</li>
      </ul>
    </div>
  );
}
