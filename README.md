![image](https://github.com/sadanadsidhu/Simplileap_Task/assets/121937172/8ec8b5b2-7661-4e4e-a70f-0d003a3184a4)

![image](https://github.com/sadanadsidhu/Simplileap_Task/assets/121937172/2caafeb4-8ee2-4daf-91c1-2ce1f0dbda92)


<h1>Simplileap Task - Full Stack Project</h1>

<h2>Overview</h2>

<p>
    Simplileap Task is a full-stack web application designed to showcase the integration of React on the front end and Express.js with a MySQL database on the back end. The project aims to demonstrate the implementation of a simple deal tracking system, allowing users to view, add, and manage deals with associated details.
</p>

<h3>Front-end Technologies</h3>
<ul>
    <li><strong>React</strong>: The user interface is built using React, providing a dynamic and responsive user experience.</li>
    <li><strong>React Router</strong>: For client-side routing, enabling navigation between different sections of the application.</li>
    <li><strong>React Icons</strong>: Used for adding stylish icons to various components.</li>
</ul>

<h3>Back-end Technologies</h3>
<ul>
    <li><strong>Express.js</strong>: Serves as the web server, handling HTTP requests and responses.</li>
    <li><strong>MySQL Database</strong>: Stores deal information, and Sequelize is used as the ORM for database interactions.</li>
    <li><strong>Cors Middleware</strong>: Configured to allow requests from the front-end application running on <code>http://localhost:3000</code>.</li>
</ul>

<h2>Features</h2>
<ul>
    <li><strong>Deal Management</strong>: Users can view, add, and manage deals, including their address, area, appointment date, price, and status.</li>
    <li><strong>Database Integration</strong>: Data is stored and retrieved from a MySQL database, ensuring data persistence.</li>
    <li><strong>Sample Data</strong>: A SQL script (<code>sampledatas.sql</code>) is provided to set up the initial database schema and insert sample data for testing and demonstration purposes.</li>
</ul>

<h2>Getting Started</h2>
<ol>
     <li>Clone the repository to your local machine:</li>
      <pre><code>git clone https://github.com/your-username/simplileap-task.git</code></pre>
    
      <li> Navigate to the project directory:</li>
      <pre><code>cd simplileap-task</code></pre>
    
        <li> Install the front-end dependencies:</li>
        <pre><code>cd client</code></pre>
        <pre><code>npm install</code></pre>
    
        <li>Install the back-end dependencies:</li>
        <pre><code>cd ../server</code></pre>
        <pre><code>npm install</code></pre>
    
        <li>Start the back end:</li>
        <pre><code>npm start</code></pre>
    
        <li>Start the front end:</li>
        <pre><code>cd ../client</code></pre>
        <pre><code>npm start</code></pre>
    
        <li>Access the application in your web browser at <a href="http://localhost:3000">http://localhost:3000</a>.</li>   
</ol>


<h2>Database Setup</h2>
<p>
    To set up the initial database schema and insert sample data, you can use the provided SQL script. Here's how:
</p>
<ol>
    <li>Make sure you have MySQL installed and running on your local machine.</li>
    <li>Open a terminal and navigate to the project root directory.</li>
    <li>Run the SQL script using the MySQL command-line tool. Replace &lt;username&gt; and &lt;password&gt; with your MySQL username and password.</li>
    <pre><code>mysql -u &lt;username&gt; -p &lt;password&gt; &lt; sampledatas.sql</code></pre>
    <li>For example:</li>
    <pre><code>mysql -u root -p &lt; sampledatas.sql</code></pre>
    <li>This will create the database, table, and insert sample data.</li>
</ol>

<h2>Conclusion</h2>
<p>
    Simplileap Task serves as an example of a full-stack web application built with React, Express.js, and MySQL. It provides a foundation for further development and customization, making it a valuable resource for learning and experimentation.
</p>
