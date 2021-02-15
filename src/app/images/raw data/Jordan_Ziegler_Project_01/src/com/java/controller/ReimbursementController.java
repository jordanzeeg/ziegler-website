package com.java.controller;

import java.awt.Image;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.Serializable;
import java.sql.SQLException;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import admin.Administration;
import database.Database;
@WebServlet("/reimburse")
public class ReimbursementController extends HttpServlet{
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession session = req.getSession();
		String authorUsername = (String) session.getAttribute("username");
		String description = req.getParameter("description");
		String amountString = req.getParameter("amount");
		double amount = 0;
		PrintWriter writer = resp.getWriter();
		if(StringUtils.isNumeric(amountString)) {
			amount = Integer.parseInt(amountString);
		}

		try {
			Administration.createReimbursement(amount, description, authorUsername);
			req.getRequestDispatcher("/employeepage").forward(req, resp);;
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			writer.println("class not found");
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			writer.println("sql not found");
			e.printStackTrace();
		}
	//controller to write reimbursements to xml
	
	}
}
	
	