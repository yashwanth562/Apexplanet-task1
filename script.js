<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Intermediate Web Project</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header>
    <h1>My Intermediate Web Project</h1>
    <nav>
      <ul>
        <li><a href="#contact">Contact Form</a></li>
        <li><a href="#todo">To-Do List</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <!-- Contact Form -->
    <section id="contact">
      <h2>Contact Us</h2>
      <form id="contactForm">
        <label>Name:
          <input type="text" id="name" required />
        </label>
        <label>Email:
          <input type="email" id="email" required />
        </label>
        <label>Message:
          <textarea id="message" required></textarea>
        </label>
        <button type="submit">Submit</button>
        <p id="formMessage"></p>
      </form>
    </section>

    <!-- To-Do List -->
    <section id="todo">
      <h2>To-Do List</h2>
      <input type="text" id="taskInput" placeholder="Add a task" />
      <button onclick="addTask()">Add Task</button>
      <ul id="taskList"></ul>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 Intermediate Web Project</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
