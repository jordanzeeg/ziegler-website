package com.java.controller;



import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import admin.Administration;
import database.Database;


//TODO replace this later
@WebServlet("/login")
public class LoginPageServlet extends HttpServlet{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {

		HttpSession session = req.getSession();
		PrintWriter writer = resp.getWriter();
		
		String message = (String)(req.getAttribute("message"));
		String username = (String) session.getAttribute("username");
		if(username != null)
		{
			String role = (String) session.getAttribute("Role");
			if(role == "Employee") {
				req.getRequestDispatcher("employeepage");
			} else if (role == "Manager") {
				req.getRequestDispatcher("managerpage");
			}
		}
		writer.println("<html><body>");
		
		if(message!= null) {
			writer.println(message);
		}
		writer.print("<html><head>\r\n" + "<link rel= \"stylesheet\" href = \"css/bootstrap.css\">\r\n"
				+ "<link rel= \"stylesheet\" href = \"css/bootstrap-reboot.css\">\r\n"
				+ "<link rel= \"stylesheet\" href = \"css/bootstrap-grid.css\">\r\n"
				+ "<link rel= \"stylesheet\"	href = \"css/styles.css\">\r\n" + "<meta charset=\"UTF-8\">\r\n"
				+ "\r\n" + "<title>Login Page</title>\r\n" + "</head>");
		writer.println("<body><div class = 'backgroundImage'>");
		writer.println("<form action = 'validate' method = 'post'>"); //sends form to validate page
		writer.println("<div class='row justify-content-center align-items-center' style='height:100vh'>");
		writer.println("<div class = 'container'>");
		writer.println("<div class = 'col-6'>");
		writer.println("<div class = 'card card-body'>");
		writer.println("<h3 class = 'text-center'> Please Login</h3>");
		writer.println("<div class = 'form-group'></br> ");
		writer.println("Username: <input type = 'text' name = 'username'>");
		writer.println("</div>");
		writer.println("<div class = 'form-group'>");
		writer.println("Password: <input type = 'password' name = 'password'> </br>");
		writer.println("</div><div class = 'row justify-content-center align-items-center'>");
		writer.println("<input type = 'submit' class = 'btn btn-primary' value = 'Submit'> </br>");
		writer.println("</div></form></br>");
		writer.println("<div class = 'row justify-content-center align-items-center'><form action = 'createLogin' method = 'post'><input type = 'submit' class = 'btn btn-primary' value = 'Create Account'> </form></br>"
				+ "</div></div></div></div></div></div></div>");
		writer.println("</body></html>");
		try {
			Database.getDatabase();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		//TODO 
		//text validation using xml
		//writer.println("<script> var xhttp = new XMLHttpRequest();");
		//writer.println("xhttp.onreadystatechange = function() {\r\n" + 
		//		"    if (this.readyState == 4 && this.status == 200) {");
		
		
		
		
		
	}

}
