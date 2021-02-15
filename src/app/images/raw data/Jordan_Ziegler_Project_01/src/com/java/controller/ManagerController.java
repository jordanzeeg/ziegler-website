package com.java.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import admin.Administration;
import objects.Reimbursement;
import users.User;

@WebServlet("/managerpage")
public class ManagerController extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		HttpSession session = req.getSession();
		PrintWriter writer = resp.getWriter();
		String username = (String) session.getAttribute("username");
		String role = (String) session.getAttribute("Role");
		if (role == "Manager") {
			// start writing page
			writer.print("<head>\r\n" + "<link rel= \"stylesheet\" href = \"css/bootstrap.css\">\r\n"
					+ "<link rel= \"stylesheet\" href = \"css/bootstrap-reboot.css\">\r\n"
					+ "<link rel= \"stylesheet\" href = \"css/bootstrap-grid.css\">\r\n"
					+ "<link rel= \"stylesheet\"	href = \"css/styles.css\">\r\n" + "<meta charset=\"UTF-8\">\r\n"
					+ "\r\n" + "<title>Manager Home</title>\r\n" + "</head>");

			writer.print("<body>"); // sends form to validate page
			try {
				List<Reimbursement> reimbursementList = Administration.getAllReimbursements();
				User currentUser = Administration.getUserByUsername((String) session.getAttribute("username"));
				writer.print("<h1>Welcome " + currentUser.getUsername() + "</h1>");
				writer.print("<h4>Reimbursements</h4>");
				writer.print("<div class = 'justify-content-right align-items-right'>");
//				writer.print("<select id='StatusFilter' onchange='myFunction()'>" + //currently doesn't work
//						"<option value='Filter'>Filter</option>" +
//						"<option value='Pending'>Pending</option>" +
//						"<option value='Approved'>Approved</option>" +
//						"<option value='Denied'>Denied</option>" +
//						"</select>");
				writer.print("<table class='table table-striped' id = 'myTable'>\r\n" + "  <thead>\r\n" + "    <tr>\r\n"
						+ "      <th scope=\"col\">ID</th>\r\n" + "      <th scope=\"col\">Amount</th>\r\n"
						+ "      <th scope=\"col\">Submitted</th>\r\n" + "      <th scope=\"col\">Description</th>\r\n"
						+ "      <th scope=\"col\">Author</th>\r\n" + "      <th scope=\"col\">Resolver</th>\r\n"
						+ "      <th scope=\"col\">Status</th>\r\n" + "    </tr>\r\n" + "  </thead> <tbody>");
				for (int i = 0; i < reimbursementList.size(); i++) { // prints out the fields for each element
					writer.print("<tr>");
					writer.print("<td>" + reimbursementList.get(i).getId() + "</td>");
					writer.print("<td>" + reimbursementList.get(i).getAmount() + "</td>");
					writer.print("<td>" + reimbursementList.get(i).getSubmitted() + "</td>");
					writer.print("<td>" + reimbursementList.get(i).getDescription() + "</td>");
					writer.print("<td>" + reimbursementList.get(i).getAuthor() + "</td>");
					writer.print("<td>" + reimbursementList.get(i).getResolver() + "</td>");
					if (reimbursementList.get(i).getStatus_id() == 0) {
						writer.print("<td><form action='ManagerHome2.html' method='GET'>"
								+ "<input type = 'hidden' name = 'reimb_id' value = " + reimbursementList.get(i).getId()
								+ "/>"
								+ "<input type = 'submit' class = 'btn btn-primary' value = 'Pending'></form> </td>");
					} else if (reimbursementList.get(i).getStatus_id() == 1) {
						writer.print("<td>Approved</td>");
					} else {
						writer.print("<td>Denied</td>");
					}
					writer.print("</tr>");

				}

				writer.println("</table>");

			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			// closing page
			writer.println(
					"</tbody><form action = 'logout' method = 'get'><input type = 'submit' class = 'btn btn-primary' value = 'logout'></form>");
			writer.print(" <script type='text/javascript' src = 'js/manager.js'></script> "
					+"<script type = 'text/javascript' src = 'js/jquery.js'></script>"
					+ " <script type = 'text/javascript' src = 'js/javascript.js'></script>"
					+ " <script type='text/javascript' src = 'js/bootstrap.js'></script> "
					
					+"<script> 	document.getElementById('StatusFilter').onchange = function (){ alert('Hello');}"
					+ "myFunction{ var input, filter, table, tr, td, i, txtValue;\r\n" + 
					" alert('Hello');"+
					"	input = document.getElementById(\"StatusFilter\");\r\n" + 
					"	  table = document.getElementById(\"myTable\");\r\n" + 
					"	  tr = table.getElementsByTagName(\"tr\");\r\n" + 
					"	filter = input.value;\r\n" + 
					"	for (i = 0; i < tr.length; i++) {\r\n" + 
					"		  td = tr[i].getElementsByTagName(\"td\")[7];\r\n" + 
					
					"	      txtValue = td.textContent || td.innerText ||td.value;\r\n" + 
					"	      if (txtValue == filter) {\r\n" + 
					"	        tr[i].style.display = \"\";\r\n" + 
					"	      } else {\r\n" + 
					"	        tr[i].style.display = \"none\";\r\n" + 
					"	      }\r\n" + 
					"	    }"+
					"	  } </script>"
					
					+ "</body></html>");
		}
		else { resp.sendRedirect("login");}
	}
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		resp.sendRedirect("login");
	}
}
