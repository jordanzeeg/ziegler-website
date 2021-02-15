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
import objects.Reimbursement;
import users.User;

@WebServlet("/reimbAdjustment")
public class AdjustmentController extends HttpServlet{
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
		HttpSession session = req.getSession();
		PrintWriter writer = resp.getWriter();
		User currentUser;
		Reimbursement reimbursement = new Reimbursement();
		String username = (String) session.getAttribute("username");
		if (username == null) {
			resp.sendRedirect("login");
		}
		else {
			try {
				currentUser = Administration.getUserByUsername(username);
				String sreimb_id = req.getParameter("reimbursement_id");
				int reimb_id = Integer.parseInt(sreimb_id);
				String sstatus_id = req.getParameter("Status");
				int status_id = Integer.parseInt(sstatus_id);
				reimbursement = Administration.getReimbursementById(reimb_id);
				
				
				
				reimbursement.setResolver(currentUser.getId());
				reimbursement.setStatus_id(status_id);
				System.out.println(reimbursement.getId() +"Description" +reimbursement.getDescription() + "resolver" + reimbursement.getResolver() + "status" +reimbursement.getStatus_id());
				reimbursement.commitResolved();
				reimbursement.commitResolver();
				reimbursement.commitStatus_id();
				
				req.getRequestDispatcher("/managerpage").forward(req, resp);
				
				
				
				
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
			
	}

}
