export default function Project() {
    const projectInfo = [
        {
          title: "E Auto Care",
          description:
            "A full-stack application for managing auto care services. Users can create appointments, view available services, and manage their personal appointments through a user-friendly interface. The application ensures smooth handling of data with MySQL and provides secure authentication for user sessions.",
          imageUrl: "https://via.placeholder.com/150",
          projectUrl: "https://e-auto-care-6acb9e4162bf.herokuapp.com/",
          repoUrl: "https://github.com/dfreeman3102/e-auto-care",
        },
        {
          title: "Five Dudes Pizza",
          description: "A front-end application for a 'pizza restaurant'. Users can view the calendar on the homepage for their closed holidays, their about page, the menu and place an order.",
          imageUrl: "https://via.placeholder.com/150",
          projectUrl: "https://dfreeman3102.github.io/five-dudes-pizza/",
          repoUrl: "https://github.com/dfreeman3102/five-dudes-pizza",
        },
        {
          title: "Weather Search",
          description: "A front-end application that allows users to search for the current weather in a city. The application uses the OpenWeather API to retrieve weather data and display it to the user. The user can search for a city and view the current temperature, humidity, and wind speed.",
          imageUrl: "https://via.placeholder.com/150",
          projectUrl: "https://dfreeman3102.github.io/weather-search/",
          repoUrl: "https://github.com/dfreeman3102/weather-search",
        },
        {
          title: "Social Network API",
          description: "A backend application for a social network. Users can create accounts, add friends, share thoughts, and react to friends' thoughts. The application uses MongoDB for data storage and Mongoose for object modeling.",
          imageUrl: "https://via.placeholder.com/150",
          projectUrl: "Not Deployed",
          repoUrl: "https://github.com/dfreeman3102/social-network-backend-api",
        },
        {
          title: "MVC Blog Website",
          description: "A full-stack application for a blog website. Users can create accounts, create blog posts, and comment on other users' posts. The application uses MySQL for data storage and Handlebars.js for templating.",
          imageUrl: "https://via.placeholder.com/150",
          projectUrl: "https://mvc-blog-website-dfreeman-7df0bd050636.herokuapp.com/",
          repoUrl: "https://github.com/dfreeman3102/mvc-blog-website",
        },
        {
          title: "Note Taker",
          description: "A full-stack application for taking notes. Users can create, view, and delete notes through a user-friendly interface. The application ensures smooth handling of data with Express.js and provides storage for user notes.",
          imageUrl: "https://via.placeholder.com/150",
          projectUrl: "https://note-taker-dmf-a72c620801f2.herokuapp.com/",
          repoUrl: "https://github.com/dfreeman3102/note-taker",
        },
      ];
      return (
        <div>
          {projectInfo.map((project, index) => (
            <div key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <img src={project.imageUrl} alt={project.title} />
              <div>
                <a href={project.projectUrl}>View Project</a>
              </div>
              <div>
                <a href={project.repoUrl}>View Repository</a>
              </div>
            </div>
          ))}
        </div>
      );
}