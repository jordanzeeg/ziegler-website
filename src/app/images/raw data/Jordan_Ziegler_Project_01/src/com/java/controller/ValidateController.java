package com.java.controller;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.xml.bind.JAXBException;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Element;

import admin.Administration;
import objects.Reimbursement;
import users.User;

@WebServlet("/validate") //called from logincontrollerform
public class ValidateController extends HttpServlet{
	private static Administration god = Administration.getAdministration();
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		String username = req.getParameter("username");
		String password = req.getParameter("password");
		String validationString;
		User currentUser; //user gets stored here for HttpSessions

		HttpSession session = req.getSession();
		// seession.invalidate(); to close session
		PrintWriter writer = resp.getWriter();
	
		//TODO if creating a file, do it here so that it recreates file every time user is redirected to home or logs in. 
		
			try { 
				validationString = userValidation(username, password, writer); //password currently does not work
				if(validationString == "password not found") {//if uservalidation does not find password do this
					req.setAttribute("message", "password is incorrect");
					writer.print("invalid Password");
					resp.sendRedirect("login");
					
					
				}
				else if (validationString == "username not found") { //if uservalidation does not find username do this
					 //redirects to login page TODO error message
					req.setAttribute("message", "User does not exist. please create your account");
					req.getRequestDispatcher("/createLogin").forward(req, resp);
					
					writer.print("Invalid username. create a new account");
					
				}
				else if (validationString == "Employee") {// if uservalidation found username and password and an employee user
				currentUser = Administration.getUserByUsername(username); //stores the user in currentUser;
				session.setAttribute("username", username); //sets the session for the user
				session.setAttribute("Role", "Employee");
			
				req.getRequestDispatcher("employeepage").forward(req, resp);
				}
				else if (validationString == "Manager") { //if uservalidation found username and password and a manager user
				currentUser = Administration.getUserByUsername(username); //stores the user in currentUser;
				session.setAttribute("username", username);
				session.setAttribute("Role", "Manager");
				req.getRequestDispatcher("managerpage").forward(req, resp);
				}
				else {
					
					
					//resp.sendRedirect("/createLogin"); //sends a get request, not a post
					 //sends a post, not a get. sends the same request 
					//paramaters are transferred	
				}
			} catch (ClassNotFoundException e) {
				writer.println("class not found " + e);
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				writer.println("class not found " + e);
				e.printStackTrace();
			}
			
				
			
			

	}
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		resp.sendRedirect("login");
	}
	private String userValidation(String username, String password, PrintWriter writer) //function to check username and password
			throws SQLException, FileNotFoundException, ClassNotFoundException, IOException { //against database. return missing element 
		if(username != null) {																					//or return user role
			if(god.checkUserName(username)) {
				
				if(god.checkPassword(username, password)) {
				
				User validatedUser = Administration.getUserByUsername(username);
				return validatedUser.getRole().toString();
				}
				else{
					
					
					return "password not found";
				}
			}
			else {
				
				return "username not found";
			}
			
		}else return "username not found";
	}
}
