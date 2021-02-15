package com.java.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import admin.Administration;
import objects.Reimbursement;
import users.User;

@WebServlet("/changedata")
public class ChangeDataController extends HttpServlet{
	@Override
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		PrintWriter writer = resp.getWriter();
		HttpSession session = req.getSession();
		System.out.println(); 
		String s_id =  req.getParameter("reimb_selected");
		int r_id =  Integer.parseInt(s_id);
		int status_id = Integer.parseInt(req.getParameter("reimb_status"));
		//get resolver
		
		int resolver_id = 0;
	
			try {
				User currentUser = Administration.getUserByUsername((String) session.getAttribute("username"));
				resolver_id = currentUser.getId();
				Reimbursement reimbursement = Administration.getReimbursementById(r_id);
				reimbursement.setResolver(resolver_id);
				reimbursement.setStatus_id(status_id);
				reimbursement.commitResolved();
				reimbursement.commitResolver();
				reimbursement.commitStatus_id();
				//commit new status
				//commit resolver and timestamp
				resp.sendRedirect("login");
			} catch (ClassNotFoundException e) {
				writer.print("File not found. " + e);
				e.printStackTrace();
			} catch (SQLException e) {
				writer.print("SQL error " + e);
				e.printStackTrace();
			}
		

		
		
		
	}
}
