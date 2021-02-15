package admin;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import database.Database;
import objects.Reimbursement;
import users.Employee;
import users.Manager;
import users.User;
import users.User.Role;

public class Administration {
	private static Administration sAdmin;
	private static final Logger LOGGER =  LogManager.getLogger(Administration.class);
	
	private Administration() {}
	
	public static Administration getAdministration() { //there is only one god and there are no gods before him
		
		if(sAdmin != null) {
			return sAdmin;
		}
		
		sAdmin = new Administration();
		
		return sAdmin;
		
	}
	//create functions should have more inputs to match constructor of user
	//create functions should have a field for role
	//technically currently creates employee, not user
	public User createUser(String username, String password, String email, String firstName, String lastName) throws SQLException, IOException, ClassNotFoundException, IOException {
		
		if(!StringUtils.isNoneBlank(username)) {
			throw new IllegalArgumentException();
		}
		
		if(username.length() < 4)
			throw new IllegalArgumentException();
		
		if(!StringUtils.isNoneBlank(password)) {
			throw new IllegalArgumentException();
		}
		
		if(password.length() < 3)
			throw new IllegalArgumentException();
		
		if(!StringUtils.isNoneBlank(email)) {
			throw new IllegalArgumentException();
		}
		
		if(email.length() < 4)
			throw new IllegalArgumentException();
		
		if(!StringUtils.isNoneBlank(firstName)) {
			throw new IllegalArgumentException();
		}
		
		if(firstName.length() < 2)
			throw new IllegalArgumentException();
		
		if(!StringUtils.isNoneBlank(lastName)) {
			throw new IllegalArgumentException();
		}
		
		if(lastName.length() < 2)
			throw new IllegalArgumentException();
		
		
		Database db = Database.getDatabase();
		
		int i = db.getLatestUserId();
		
		User user = new User(++i, username, password, email, firstName, lastName, Role.Employee);
		
		String call = "{call auto_increment_users(?, ?, ?, ?, ?, ?)}";
		
		Connection conn = DriverManager.getConnection(db.getDbUrl(), db.getDbUsername(), db.getDbPassword());
		
		CallableStatement cstmt = conn.prepareCall(call);
		
		cstmt.setString(1, username); //username
		cstmt.setString(2, password); //password
		cstmt.setString(3, email); //email
		cstmt.setString(4, firstName); //firstName
		cstmt.setString(5, lastName); //lastName
		cstmt.setLong(6, 0);
		
		cstmt.executeUpdate();
		
		String str = "select * from reimb_users where user_id = ?";
		
		cstmt = conn.prepareCall(str);
		
		int latest = db.getLatestUserId();
		
		cstmt.setInt(1, latest);
		
		ResultSet query = cstmt.executeQuery();
		
		query.next();
		
		user = new User(query.getInt(1), query.getString(2), query.getString(3), query.getString(4), query.getString(5),query.getString(6), Role.Employee);
		
		cstmt.close();
		
		LOGGER.info("new User created: " + user.getUsername());
		
		return user;
	}
	public static Reimbursement createReimbursement(double amount, String description,String authorusername) throws FileNotFoundException, ClassNotFoundException, IOException, SQLException {
		Database db = Database.getDatabase();
		Administration god = getAdministration();
		User user = god.getUserByUsername(authorusername); //get user from user who is logged in
		
		int author = user.getId(); //get id from user
		Reimbursement reimb = new Reimbursement(amount, description, author, 0); //instantiate the reimbursement object
		
		String call = "{call auto_increment_reimbursements(?,?,?)}";
		Connection conn = DriverManager.getConnection(db.getDbUrl(), db.getDbUsername(), db.getDbPassword());
		
		CallableStatement cstmt = conn.prepareCall(call);
		cstmt.setDouble(1, amount);
		cstmt.setString(2, description);
		cstmt.setInt(3, author);
		cstmt.executeUpdate();
		
		String str = "select * from reimbursement where reimb_id = ?";
		cstmt = conn.prepareCall(str);
		int latest = db.getLatestReimbursementId();
		cstmt.setInt(1, latest);
		
		ResultSet query = cstmt.executeQuery();
		
		query.next();
		reimb.setId(query.getInt(1));
		reimb.setAmount(query.getDouble(2));
		reimb.setSubmitted(query.getTimestamp(3));
		reimb.setResolved(query.getTimestamp(4));
		reimb.setDescription(query.getString(5));
		reimb.setAuthor(query.getInt(7));
		reimb.setResolver(query.getInt(8));
		reimb.setStatus_id(query.getInt(9));
		reimb.setType_id(0);
		cstmt.close();
		sendReimbursementToJson(reimb);
		return reimb;
	}
	public boolean checkUserName(String username) throws SQLException, FileNotFoundException, ClassNotFoundException, IOException {
		if(username == null)
			throw new IllegalArgumentException();
		
		Connection conn = Database.getConnection();
		
		String sql = "select user_username from reimb_users where user_username = ?";
		
		PreparedStatement st = conn.prepareStatement(sql);
		
		st.setString(1,  username);
		
		//executeQuery to search for usernames
		ResultSet resultSet = st.executeQuery();
		
		boolean result = resultSet.next();
		
		conn.close();
		
		return result;
	}
	public boolean checkPassword(String username, String password) throws SQLException {
		if(username == null)
			throw new IllegalArgumentException();
		if(password == null)
			throw new IllegalArgumentException();
		//executeQuery to search for password
		
		Connection conn = Database.getConnection();
		
		String sql = "select user_password from reimb_users where user_username = ?";
		
		PreparedStatement st = conn.prepareStatement(sql);
		
		st.setString(1, username);
		
		ResultSet result = st.executeQuery();
		
		String dbPassword = null;
		
		if(result.next()) {
			dbPassword = result.getString(1);
		} else {
			return false;
		}

		return password.equals(dbPassword);
	}
	
	public static User getUserByUsername(String username) throws SQLException, FileNotFoundException, ClassNotFoundException, IOException {
		if(username == null)
			throw new IllegalArgumentException();
		
		Connection conn = Database.getConnection();
		
		String sql = "select * from reimb_users where user_username LIKE ?";
		
		PreparedStatement st = conn.prepareStatement(sql);
		
		st.setString(1, username + "%");
		
		ResultSet result = st.executeQuery();
		
		User user = null;
		
		if(result.next()) {
			int id = result.getInt(result.findColumn("user_id"));
			
			String usernameDb = result.getString(result.findColumn("user_username"));
			String password = result.getString(result.findColumn("user_password"));
			String email = result.getString(result.findColumn("user_email"));
			String firstName = result.getString(result.findColumn("user_firstName"));
			String lastName = result.getString(result.findColumn("user_lastName"));
			int role = result.getInt(result.findColumn("user_role_id"));
			
			if(role ==0) {
				user = new Employee(id, usernameDb, password, email, firstName, lastName,Role.Employee);
			} else if(role == 1) {
				user = new Manager(id, usernameDb, password, email, firstName, lastName,Role.Manager);
			}
		}
		
		
		conn.close();
		
		return user;
	}
	public static Reimbursement getReimbursementById(int id) throws SQLException, FileNotFoundException, ClassNotFoundException, IOException {
		if(id <= 0)
			throw new IllegalArgumentException();
		
		Connection conn = Database.getConnection();
		
		String sql = "select * from reimbursement where reimb_id = ?";
		
		PreparedStatement st = conn.prepareStatement(sql);
		
		st.setInt(1, id);
		
		ResultSet result = st.executeQuery();
		
		Reimbursement reimbursement = new Reimbursement();
		
		if(result.next()) {
			id = result.getInt(result.findColumn("reimb_id"));
			
			double amount = result.getDouble(result.findColumn("reimb_amount"));
			Timestamp submitted = result.getTimestamp("reimb_submitted");
			Timestamp resolved = result.getTimestamp("reimb_resolved");
			String description = result.getString("reimb_description");
			int author = result.getInt("reimb_author");
			int resolver = result.getInt("reimb_resolver");
			int status_id = result.getInt("reimb_status_id");
			int type_id = result.getInt("reimb_type_id");
			
			reimbursement.setId(id);
			reimbursement.setAmount(amount);
			reimbursement.setSubmitted(submitted);
			reimbursement.setResolved(resolved);
			reimbursement.setDescription(description);
			reimbursement.setAuthor(author);
			reimbursement.setStatus_id(status_id);
			reimbursement.setResolver(resolver);
			reimbursement.setType_id(type_id);
		}
		
		
		conn.close();
		
		return reimbursement;
	}
	public static void changeRole(int id, Role role) throws SQLException {
		if(id < 1)
			throw new IllegalArgumentException();
		if(role == null)
			throw new IllegalArgumentException();
		
		Connection conn = Database.getConnection();
		
		String sql = "update reimb_users set user_role = ? where user_id = ?";
		
		PreparedStatement st = conn.prepareStatement(sql);
		
		
		if(role.equals(Role.Employee)) {
			st.setString(1, "Employee");
			st.setInt(2, id);
		} else if(role.equals(Role.Manager)) {
			st.setString(1, "Manager");
			st.setInt(2, id);

		} 
		
		st.setInt(2, id);
		
		st.executeUpdate();
		
		conn.close();
	}
	public static List<Reimbursement> getAllReimbursements() throws SQLException, JsonGenerationException, JsonMappingException, IOException{
		
		List<Reimbursement> reimbursementList = new ArrayList<>();
		Map<Integer, Reimbursement> reimbursements = new HashMap<>();
		
		Connection conn = Database.getConnection();
		
		String sql = "select * from reimbursement";
		
		
		PreparedStatement st = conn.prepareStatement(sql);
		
		ResultSet result = st.executeQuery();
		
		if (result.next()) {
			do {
				int reimb_id = result.getInt(1);
				double reimb_amount = result.getDouble(2);
				Timestamp reimb_submitted = result.getTimestamp(3);
				Timestamp reimb_resolved = result.getTimestamp(4);
				String reimb_description = result.getString(5);
				//skip 6 because it's the blob image
				int reimb_author = result.getInt(7);
				int reimb_resolver = result.getInt(8);
				int reimb_status_id = result.getInt(9);
				int reimb_type_id = result.getInt(10);
				
				Reimbursement reimbursement = new Reimbursement();
				//set all values
				reimbursement.setId(reimb_id);
				reimbursement.setAmount(reimb_amount);
				reimbursement.setSubmitted(reimb_submitted);
				reimbursement.setResolved(reimb_resolved);
				reimbursement.setDescription(reimb_description);
				reimbursement.setAuthor(reimb_author);
				reimbursement.setResolver(reimb_resolver);
				reimbursement.setStatus_id(reimb_status_id);
				reimbursement.setType_id(reimb_type_id);
				reimbursements.put(reimb_id, reimbursement);
			}while(result.next());
		}
		for(Integer key: reimbursements.keySet()) {
			reimbursementList.add(reimbursements.get(key));
		}
		conn.close();
		for(int i = 0; i <reimbursementList.size(); i++) {
			sendReimbursementToJson(reimbursementList.get(i)); //testing the json code
		}
		return reimbursementList;
	}
	public static void sendReimbursementToJson(Reimbursement r) throws JsonGenerationException, JsonMappingException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		int rId =r.getId();
		String fileName = "C:/Users/Jordan/eclipse-workspace/Project1/WebContent/reimbursement" + rId +".json";
		
		mapper.writeValue(new File(fileName), r);
		
	}
	


}
