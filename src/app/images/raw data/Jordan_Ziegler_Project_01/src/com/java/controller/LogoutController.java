package com.java.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/logout")
public class LogoutController extends HttpServlet{

	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        //req.getRequestDispatcher("/login");
		PrintWriter writer = resp.getWriter();
		req.getRequestDispatcher("/index.html").include(req, resp);  
		
        HttpSession session=req.getSession();  
        session.invalidate();  
        
        writer.print("You are successfully logged out!");  
        writer.close();
        
	}
}
