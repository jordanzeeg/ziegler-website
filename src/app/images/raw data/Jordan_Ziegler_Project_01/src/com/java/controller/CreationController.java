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
import users.User;


@WebServlet("/creation")
public class CreationController extends HttpServlet{
	private static Administration god = Administration.getAdministration();
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession session = req.getSession();
		String username = req.getParameter("username");
		String password = req.getParameter("password");
		String email= req.getParameter("email");
		String firstName = req.getParameter("fname");
		String lastName = req.getParameter("lname");
		PrintWriter writer = resp.getWriter();
		try {
			User currentUser = god.createUser(username, password, email, firstName, lastName);
			session.setAttribute("username", currentUser.getUsername());
			resp.sendRedirect("login");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			writer.println("class not found");
			resp.sendRedirect("login");
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			writer.println("sql not found");
			resp.sendRedirect("login");
			e.printStackTrace();
		} catch(IllegalArgumentException e) {
			resp.sendRedirect("login");
		}
		

	}
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String username = req.getParameter("username");
		String password = req.getParameter("password");
		String email= req.getParameter("email");
		String firstName = req.getParameter("fname");
		String lastName = req.getParameter("lname");
		PrintWriter writer = resp.getWriter();
		try {
			god.createUser(username, password, email, firstName, lastName);
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			writer.println("class not found");
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			writer.println("sql not found");
			e.printStackTrace();
		}

	}
}
