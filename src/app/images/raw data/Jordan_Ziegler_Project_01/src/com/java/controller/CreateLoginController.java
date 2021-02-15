package com.java.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/createLogin")
public class CreateLoginController extends HttpServlet{
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		
		PrintWriter writer = resp.getWriter();
		String message = (String)(req.getAttribute("message"));


		
		//----------------------------------------------------------------------------------------------------
		writer.print("<html><head>\r\n" + "<link rel= \"stylesheet\" href = \"css/bootstrap.css\">\r\n"
				+ "<link rel= \"stylesheet\" href = \"css/bootstrap-reboot.css\">\r\n"
				+ "<link rel= \"stylesheet\" href = \"css/bootstrap-grid.css\">\r\n"
				+ "<link rel= \"stylesheet\"	href = \"css/styles.css\">\r\n" + "<meta charset=\"UTF-8\">\r\n"
				+ "\r\n" + "<title>Create Account</title>\r\n" + "</head>");
		writer.println("<body><div class = 'backgroundImage'>");
		writer.println("<form action = './creation' method = 'post'>"); //sends form to validate page
		writer.println("<div class='row justify-content-center align-items-center' style='height:100vh'>");
		writer.println("<div class = 'container'>");
		writer.println("<div class = 'col-6'>");
		writer.println("<div class = 'card card-body'>");
		writer.println("<h3 class = 'text-center'> Please Create An Account</h3>");
		writer.println("<div class = 'form-group'></br> ");
		writer.println("</br> Username: <input type = 'text' name = 'username'><br/>");
		writer.println("</div>");
		writer.println("<div class = 'form-group'>");
		writer.println("Password: <input type = 'password' name = 'password'> </br>");
		writer.println("</div>");
		writer.println("<div class = 'form-group'>");
		writer.println("Email: <input type = 'text' name = 'email'></br>");
		writer.println("</div>");
		writer.println("<div class = 'form-group'>");
		writer.println("First Name: <input type = 'text' name = 'fname'> </br>");
		writer.println("</div>");
		writer.println("<div class = 'form-group'>");
		writer.println("Last Name: <input type = 'text' name = 'lname'> <br/>");
		writer.println("</div>");
		writer.println("<div class = 'row justify-content-center align-items-center'><input type = 'submit' class = 'btn btn-primary' value = 'Submit'></div> </br>");
		writer.println("</form>");
		writer.println("<div class = 'row justify-content-center align-items-center'><form action = 'login'><input type = 'submit' class = 'btn btn-primary' value = 'Redirect to Login'> </form></div>");
		writer.println("</div></div></div></div></div></div>");
		writer.println("</body></html>");
	}
}
