package com.java.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import admin.Administration;
import objects.Reimbursement;
import users.User;

@WebServlet("/employeepage")
public class EmployeeController extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		HttpSession session = req.getSession();
		PrintWriter writer = resp.getWriter();
		String username = (String) session.getAttribute("username");
		String role = (String) session.getAttribute("Role");
		if (role == "Employee") {

			// start writing page
			writer.print("<head>\r\n" + "<link rel= \"stylesheet\" href = \"css/bootstrap.css\">\r\n"
					+ "<link rel= \"stylesheet\" href = \"css/bootstrap-reboot.css\">\r\n"
					+ "<link rel= \"stylesheet\" href = \"css/bootstrap-grid.css\">\r\n"
					+ "<link rel= \"stylesheet\"	href = \"css/styles.css\">\r\n" + "<meta charset=\"UTF-8\">\r\n"
					+ "\r\n" + "<title>Employee Home</title>\r\n" + "</head>");

			writer.print("<body>"); // sends form to validate page
			try {
				List<Reimbursement> reimbursementList = Administration.getAllReimbursements();
				User currentUser = Administration.getUserByUsername((String) session.getAttribute("username"));
				writer.print("<h1>Welcome " + currentUser.getUsername() + "</h1>");
				writer.print("<h4>Reimbursements</h4>");
				writer.println("<a href ='CreateReimbursement.html'><button class = 'btn btn-primary'>Create Reimbursement</button></a>");
				writer.print("<table class=\"table table-striped\">\r\n" + "  <thead>\r\n" + "    <tr>\r\n"
						+ "      <th scope=\"col\">ID</th>\r\n" + "      <th scope=\"col\">Amount</th>\r\n"
						+ "      <th scope=\"col\">Submitted</th>\r\n" + "      <th scope=\"col\">Resolved</th>\r\n"
						+ "      <th scope=\"col\">Description</th>\r\n" + "      <th scope=\"col\">Author</th>\r\n"
						+ "      <th scope=\"col\">Resolver</th>\r\n" + "      <th scope=\"col\">Status</th>\r\n"
						+ "    </tr>\r\n" + "  </thead> <tbody>");
				for (int i = 0; i < reimbursementList.size(); i++) { // prints out the fields for each element
					if (reimbursementList.get(i).getAuthor() == currentUser.getId()) {
						writer.print("<tr>");
						writer.print("<td>" + reimbursementList.get(i).getId() + "</td>");
						writer.print("<td>" + reimbursementList.get(i).getAmount() + "</td>");
						writer.print("<td>" + reimbursementList.get(i).getSubmitted() + "</td>");
						writer.print("<td>" + reimbursementList.get(i).getResolved() + "</td>");
						writer.print("<td>" + reimbursementList.get(i).getDescription() + "</td>");
						writer.print("<td>" + reimbursementList.get(i).getAuthor() + "</td>");
						writer.print("<td>" + reimbursementList.get(i).getResolver() + "</td>");
						if (reimbursementList.get(i).getStatus_id() == 0) {
							writer.print("<td>Pending</td>");
						} else if (reimbursementList.get(i).getStatus_id() == 1) {
							writer.print("<td>Approved</td>");
						} else {
							writer.print("<td>Denied</td>");
						}

						writer.print("</tr>");
					}
				}
				writer.print(" </tbody>\r\n" + "</table>");

			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			writer.println(
					"<form action = 'logout' method = 'get'><input type = 'submit' class = 'btn btn-primary' value = 'logout'></form>");
			// closing page
			writer.print("<script type = \"text/javascript\" src = \"js/jquery.js\"></script>\r\n"
					+ " <script type = \"text/javascript\" src = \"js/javascript.js\"></script>\r\n"
					+ " <script type=\"text/javascript\"src = \"js/bootstrap.js\"></script>  \r\n" + " \r\n" + "\r\n"
					+ "</body></html>");
		} else {
			resp.sendRedirect("login");
		}
	}
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		resp.sendRedirect("login");
	}
}

