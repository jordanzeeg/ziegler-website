package objects;

import java.awt.Image;
import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Date;


import database.Database;

public class Reimbursement implements Serializable{
		

		private int id;
		private double amount;
		private Timestamp submitted;
		private Timestamp resolved;
		private String description;
		private Image image;
		private int author_id;
		private int resolver;
		private int status_id;
		private int type_id; //data from sql table
		
		
		
		public Reimbursement( double amount, String description, int author, int status_id) {

			if(amount < 0) {
				throw new IllegalArgumentException();
			}

			if(description == null) {
				throw new IllegalArgumentException();
			}
			
			if(author < 0) {
				throw new IllegalArgumentException();
			}

			this.amount = amount;
			this.author_id = author;
			this.status_id = status_id;
			this.description = description;
		}
		
		public Reimbursement() {
			 id = 0;
			amount = 0;
			author_id = 0;
			resolver = 0;
			status_id = 0;
			type_id = 0; //data from sql table
		}

		public Timestamp getSubmitted() {
		return submitted;
		}
		public void setSubmitted(Timestamp submitted) {
			this.submitted = submitted;
		}
		public void commitSubmitted() throws SQLException {
			
			Connection conn = Database.getConnection();
			
			String sql = "update reimbursement set reimb_submitted = CURRENT_TIMESTAMP where reimb_id = ?";
			
			PreparedStatement st = conn.prepareStatement(sql);
			
			st.setInt(1, id);
			
			st.executeUpdate();
			
			conn.close();
		}
		
		
		public Timestamp getResolved() {
			return resolved;
		}

		public void setResolved(Timestamp resolved) {
			this.resolved = resolved;
		}
		public void commitResolved() throws SQLException {
			
			Connection conn = Database.getConnection();
			
			String sql = "update reimbursement set reimb_resolved = CURRENT_TIMESTAMP where reimb_id = ?";
			
			PreparedStatement st = conn.prepareStatement(sql);
			
			st.setInt(1, id);
			
			st.executeUpdate();
			
			conn.close();
		}
		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}
		public void commitDescription() throws SQLException {
			
			Connection conn = Database.getConnection();
			
			String sql = "update reimbursement set reimb_description = ? where reimb_id = ?";
			
			PreparedStatement st = conn.prepareStatement(sql);
			
			st.setString(1, description);
			st.setInt(1, id);
			
			st.executeUpdate();
			
			conn.close();
		}

		public Image getImage() {
			return image;
		}

		public void setImage(Image image) {
			this.image = image;
		}
		
		//TODO if ambitious, commit image to database

		public int getAuthor() {
			return author_id;
		}

		public void setAuthor(int author) {
			this.author_id = author;
		}
		public void commitAuthor() throws SQLException {
			
			Connection conn = Database.getConnection();
			
			String sql = "update reimbursement set reimb_author = ? where reimb_id = ?";
			
			PreparedStatement st = conn.prepareStatement(sql);
			
			st.setInt(1, author_id);
			st.setInt(2, id);
			st.executeUpdate();
			
			conn.close();
		}

		public int getAuthor_id() {
			return author_id;
		}

		public void setAuthor_id(int author_id) {
			this.author_id = author_id;
		}

		public int getId() {
			return id;
		}

		public double getAmount() {
			return amount;
		}

		public int getResolver() {
			return resolver;
		}

		public void setResolver(int resolver) {
			this.resolver = resolver;
		}
		public void commitResolver() throws SQLException {
			
			Connection conn = Database.getConnection();
			
			String sql = "update reimbursement set reimb_resolver = ? where reimb_id = ?";
			
			PreparedStatement st = conn.prepareStatement(sql);
			
			st.setInt(1, resolver);
			st.setInt(2, id);
			st.executeUpdate();
			
			conn.close();
		}
		public int getStatus_id() {
			return status_id;
		}

		public void setStatus_id(int status_id) {
			this.status_id = status_id;
		}
		public void commitStatus_id() throws SQLException {
			
			Connection conn = Database.getConnection();
			
			String sql = "update reimbursement set reimb_status_id = ? where reimb_id = ?";
			
			PreparedStatement st = conn.prepareStatement(sql);
			
			st.setInt(1, status_id);
			st.setInt(2, id);
			st.executeUpdate();
			
			conn.close();
		}
		public int getType_id() {
			return type_id;
		}

		public void setType_id(int type_id) {
			this.type_id = type_id;
		}
		public void commitType_id() throws SQLException {
			
			Connection conn = Database.getConnection();
			
			String sql = "update reimbursement set reimb_type_id = 0 where reimb_id = ?";
			
			PreparedStatement st = conn.prepareStatement(sql);
			
			st.setInt(1, id);
			st.executeUpdate();
			
			conn.close();
		}
		public void setId(int id) {
			this.id = id;
		}

		public void setAmount(double amount) {
			this.amount = amount;
		}

	
}