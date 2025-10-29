### HTML (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Your Name</h1>
        <p>Web Developer | Designer | [Your Profession]</p>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="about">
        <h2>About Me</h2>
        <p>[A brief introduction about yourself, your background, and your interests.]</p>
    </section>

    <section id="projects">
        <h2>Projects</h2>
        <div class="project">
            <h3>Project Title 1</h3>
            <p>[Description of the project, technologies used, and your role.]</p>
            <a href="[link to project]">View Project</a>
        </div>
        <div class="project">
            <h3>Project Title 2</h3>
            <p>[Description of the project, technologies used, and your role.]</p>
            <a href="[link to project]">View Project</a>
        </div>
        <!-- Add more projects as needed -->
    </section>

    <section id="skills">
        <h2>Skills</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>[Other skills]</li>
        </ul>
    </section>

    <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <p>LinkedIn: <a href="[your LinkedIn profile link]">LinkedIn Profile</a></p>
        <p>GitHub: <a href="[your GitHub profile link]">GitHub Profile</a></p>
    </section>

    <footer>
        <p>&copy; 2023 Your Name. All rights reserved.</p>
    </footer>
</body>
</html>
```

### CSS (styles.css)

```css
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background: #35424a;
    color: #ffffff;
    padding: 20px 0;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: #ffffff;
    text-decoration: none;
}

section {
    padding: 20px;
    margin: 20px;
    background: #ffffff;
    border-radius: 5px;
}

.project {
    margin-bottom: 20px;
}

footer {
    text-align: center;
    padding: 10px 0;
    background: #35424a;
    color: #ffffff;
    position: relative;
    bottom: 0;
    width: 100%;
}
```

### Instructions to Customize

1. **Replace Placeholder Text**: Fill in your name, profession, and other personal details in the HTML file.
2. **Add Projects**: Include your actual projects in the "Projects" section, providing descriptions and links.
3. **Skills**: List your actual skills in the "Skills" section.
4. **Contact Information**: Update the contact section with your email, LinkedIn, and GitHub links.
5. **Styling**: Feel free to modify the CSS to match your personal style or branding.

### How to View Your Portfolio

1. Create a folder on your computer.
2. Inside that folder, create two files: `index.html` and `styles.css`.
3. Copy the HTML code into `index.html` and the CSS code into `styles.css`.
4. Open `index.html` in a web browser to view your portfolio.

This template provides a basic structure for a portfolio website. You can expand upon it by adding more sections, images, or even JavaScript for interactivity.