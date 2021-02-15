package users;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;


import database.Database;


public class User implements Comparable<User>, Serializable {
	private static final Logger LOGGER =  LogManager.getLogger(User.class);
	protected int id;
	protected String username;
	private String password;
	private String email;
	private String firstName;
	private String lastName;
	protected Role role;
	public static enum Role{
		Employee, Manager;
	}
	
public User(int id, String username, String password, String email, String firstName, String lastName, Role role) {
		
		if(id < 1)
			throw new IllegalArgumentException();
		
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
		
		if(role == null)
			throw new IllegalArgumentException();
		
		
		this.id = id; 
		this.username = username;
		this.password = password;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.role = role;
	} 
@Override
public int hashCode() { 
	return id;
}

@Override
public boolean equals(Object obj) {
	
	if(obj == null) 
		throw new IllegalArgumentException();
	
	
	if(!(obj instanceof User)) //classic check for instanceOf (capital O?)
		return false;
	
	
	return id == ((User)obj).id;
}

@Override
public int compareTo(User o) {
	
	if(o == null) 
		throw new IllegalArgumentException();
	
	
	return id - ((User)o).id;
}
public void setPassword(String password) {  //create password from application
	
	if(!StringUtils.isNoneBlank(password)) {
		throw new IllegalArgumentException();
	}
	
	if(password.length() < 3)
		throw new IllegalArgumentException();
	
	//TODO do validation
	this.password = password;
}

public void changePassword(String password) throws SQLException {
	if(!StringUtils.isNoneBlank(password)) {
		throw new IllegalArgumentException();
	}
	
	if(password.length() < 3)
		throw new IllegalArgumentException();
	setPassword(password);
	commitPassword();
}

public void commitPassword() throws SQLException {
	LOGGER.info("Changing user's password");
	
	Connection conn = Database.getConnection();
	
	String sql = "update reimb_users set user_password = ? where user_id = ?";
	
	PreparedStatement st = conn.prepareStatement(sql);
	
	st.setString(1, password);
	st.setInt(2, id);
	
	st.executeUpdate();
	
	conn.close();
}

public void setUsername(String username) {  //create username from application
	if(!StringUtils.isNoneBlank(username)) {
		throw new IllegalArgumentException();
	}
	
	if(username.length() < 4)
		throw new IllegalArgumentException();
	
	this.username = username;
}

public void changeUsername(String username) throws SQLException {
	if(!StringUtils.isNoneBlank(username)) {
		throw new IllegalArgumentException();
	}
	
	if(username.length() < 4)
		throw new IllegalArgumentException();
	
	setUsername(username);
	commitUserName();
}

public void commitUserName() throws SQLException {
	LOGGER.info("Changing user's username");
	
	Connection conn = Database.getConnection();
	
	String sql = "update reimb_users set user_username = ? where user_id = ?";
	
	PreparedStatement st = conn.prepareStatement(sql);
	
	st.setString(1, username);
	st.setInt(2, id);
	
	st.executeUpdate();
	
	conn.close();
	
}

public String getUsername() { //self explanatory
	return username;
}

public void setFirstName(String firstName) { 
	
	if(!StringUtils.isNoneBlank(firstName)) 
		throw new IllegalArgumentException();
	
	if(firstName.length() < 2)
		throw new IllegalArgumentException();
	
	this.firstName = firstName;
}

public void changeFirstName(String username) throws SQLException {
	if(!StringUtils.isNoneBlank(firstName)) 
		throw new IllegalArgumentException();
	
	if(firstName.length() < 2)
		throw new IllegalArgumentException();
	setFirstName(username);
	commitFirstName();
}

public void commitFirstName() throws SQLException {
	LOGGER.info("Changing user's first name");
	Connection conn = Database.getConnection();
	
	String sql = "update reimb_users set user_firstName = ? where user_id = ?";
	
	PreparedStatement st = conn.prepareStatement(sql);
	
	st.setString(1, firstName);
	st.setInt(2, id);
	
	st.executeUpdate();
	
	conn.close();
}
public int getId() {
	return this.id;
}
public String getFirstName() {
	return firstName;
}

public void setLastName(String lastName) {
	
	if(!StringUtils.isNoneBlank(lastName)) 
		throw new IllegalArgumentException();
	
	if(lastName.length() < 2)
		throw new IllegalArgumentException();
	
	this.lastName = lastName;
}

public void changeLastName(String lastName) throws SQLException {
	if(!StringUtils.isNoneBlank(lastName)) 
		throw new IllegalArgumentException();
	
	if(lastName.length() < 2)
		throw new IllegalArgumentException();
	setLastName(lastName);
	commitLastName();
}

public void commitLastName() throws SQLException {
	LOGGER.info("Changing user's last name");
	
	Connection conn = Database.getConnection();
	
	String sql = "update reimb_users set user_lastname = ? where user_id = ?";
	
	PreparedStatement st = conn.prepareStatement(sql);
	
	st.setString(1, lastName);
	st.setInt(2, id);
	
	st.executeUpdate();
	
	conn.close();
}

public String getLastName() {
	return lastName;
}

public void setEmail(String email) {
	if(!StringUtils.isNoneBlank(email)) 
		throw new IllegalArgumentException();
	
	if(email.length() < 4)
		throw new IllegalArgumentException();
	
	//TODO do validation
	this.email = email;
}

public void changeEmail(String email) throws SQLException {
	if(!StringUtils.isNoneBlank(email)) 
		throw new IllegalArgumentException();
	if(email.length() < 4)
		throw new IllegalArgumentException();
	setEmail(email);
	commitEmail();
}

public void commitEmail() throws SQLException {
	LOGGER.info("Changing user's email");
	
	Connection conn = Database.getConnection();
	
	String sql = "update reimb_users set user_email = ? where user_id = ?";
	
	PreparedStatement st = conn.prepareStatement(sql);
	
	st.setString(1, lastName);
	st.setInt(2, id);
	
	st.executeUpdate();
	
	conn.close();
}

public String getEmail() {
	return email;
}
public Role getRole() {
	return this.role;
}
public static class UsernameComparator implements Comparator<User>{

	@Override
	public int compare(User o1, User o2) {
		
		if(o1 == null) 
			throw new IllegalArgumentException();
		
		
		if(o2 == null) 
			throw new IllegalArgumentException();
		
		
		return ((User)o1).username.compareTo(((User)o2).username);
	}
	
}

public static class firstNameComparator implements Comparator<User>{

	@Override
	public int compare(User o1, User o2) {
		
		if(o1 == null) 
			throw new IllegalArgumentException();
		
		
		if(o2 == null) 
			throw new IllegalArgumentException();
		
		
		return ((User)o1).firstName.compareTo(((User)o2).firstName);
	}
	
}

public static class lastNameComparator implements Comparator<User>{

	@Override
	public int compare(User o1, User o2) {
		
		if(o1 == null) 
			throw new IllegalArgumentException();
		
		
		if(o2 == null) 
			throw new IllegalArgumentException();
		
		
		return ((User)o1).lastName.compareTo(((User)o2).lastName);
	}
	
}
public void displayPersonalInformation(){
	System.out.println("Personal Information");
	System.out.println("Username: " + this.username);
	System.out.println("Name:" + this.firstName + " " + this.lastName);

}
public User getUserById(int userId) throws SQLException, FileNotFoundException, ClassNotFoundException, IOException {
	if(userId < 1)
		throw new IllegalArgumentException();
	
	Connection conn = Database.getConnection();
	
	String sql = "select * from reimb_users where user_id = ?";
	
	PreparedStatement st = conn.prepareStatement(sql);
	
	st.setInt(1, userId);
	
	ResultSet result = st.executeQuery();
	
	User user = null;
	
	if(result.next()) {
		int dbId = result.getInt(result.findColumn("id"));
		
		String usernameDb = result.getString(result.findColumn("username"));
		String password = result.getString(result.findColumn("password"));
		String email = result.getString(result.findColumn("email"));
		String firstName = result.getString(result.findColumn("firstName"));
		String lastName = result.getString(result.findColumn("lastName"));
		String role = result.getString(result.findColumn("role"));
		
		if(role.equals("Employee")) {
			user = new Employee(dbId, usernameDb, password, email, firstName, lastName, Role.Employee);
		} else if(role.equals("Manager")) {
			user = new Manager(dbId, usernameDb, password, email, firstName, lastName, Role.Manager);
		}
	}
	
	
	conn.close();
	
	return user;
}
	//TODO retool this for getReimbursementsByUsername
	/*
	 * public List<Account> getAccountsByUsername(String username) throws
	 * FileNotFoundException, ClassNotFoundException, IOException, SQLException{
	 * if(!StringUtils.isNoneBlank(username)) { throw new
	 * IllegalArgumentException(); } LOGGER.info("Getting all accounts held by " +
	 * username);
	 * 
	 * ArrayList<Account> resultAccount = new ArrayList<>();
	 * 
	 * Connection conn = Database.getConnection();
	 * 
	 * String sql =
	 * "select account.id as id, users.id as ownerId, account.label as label, " +
	 * "account.amount as amount, account.type as type, account.ownership as ownership, account.status as status "
	 * + "from account_owner " + "join users on users.id = account_owner.ownerid " +
	 * "join account on account.id = account_owner.id " +
	 * "where users.username = ?";
	 * 
	 * PreparedStatement st = conn.prepareStatement(sql);
	 * 
	 * st.setString(1, username);
	 * 
	 * ResultSet result = st.executeQuery();
	 * 
	 * Map<Integer, Account> accounts = new HashMap<>();
	 * 
	 * if(result.next()) {
	 * 
	 * do {
	 * 
	 * int accountId = result.getInt(1); int ownerId = result.getInt(2); String
	 * label = result.getString(3); double amount = result.getDouble(4); String
	 * dbType = result.getString(5); String dbOwnership = result.getString(6);
	 * String dbStatus = result.getString(7);
	 * 
	 * Account account = null;
	 * 
	 * Type type = null;
	 * 
	 * if(dbType.equals("Checking")) { type = Type.Checking; } else
	 * if(dbType.equals("Saving")) { type = Type.Saving; } else
	 * if(dbType.equals("MoneyMarket")) { type = Type.MoneyMarket; } else
	 * if(dbType.equals("IRA")) { type = Type.IRA; } else
	 * if(dbType.equals("Brokerage")) { type = Type.Brokerage; } else
	 * if(dbType.equals("CD")) { type = Type.CD; }
	 * 
	 * Account.Status status = null;
	 * 
	 * if(dbStatus.equals("Denied")) { status = Account.Status.Denied; } else
	 * if(dbStatus.equals("Approved")) { status = Account.Status.Approved; } else
	 * if(dbStatus.equals("Closed")) { status = Account.Status.Closed; } else
	 * if(dbStatus.equals("Pending")) { status = Account.Status.Pending; }
	 * 
	 * if(dbOwnership.equals("Single")) {
	 * 
	 * account = new SingleAccount(accountId, label, ownerId, amount, type, status);
	 * accounts.put(accountId, account);
	 * 
	 * } else if(dbOwnership.equals("Joint")) {
	 * 
	 * if(accounts.containsKey(accountId)) {
	 * ((JointAccount)accounts.get(accountId)).setSecondOwnerId(ownerId); } else {
	 * account = new JointAccount(accountId, label, ownerId, amount, type, status);
	 * accounts.put(accountId, account); }
	 * 
	 * }
	 * 
	 * } while(result.next());
	 * 
	 * }
	 * 
	 * for(Integer key: accounts.keySet()) { resultAccount.add(accounts.get(key)); }
	 * 
	 * conn.close();
	 * 
	 * return resultAccount; }
	 */


//TODO retool this for getReimbursementRequestsById
/*public Account getAccountById(int id) throws FileNotFoundException, ClassNotFoundException, SQLException, IOException{
	if(id < 1)
		throw new IllegalArgumentException();
	
	Connection conn = Database.getConnection();
	
	String sql = "select account.id as accountId, account.label as label, account.amount as amount, account.type as type, account.ownership as ownership, account.status as status, user.id as userid "
			+ "from account "
			+ "join account_owner on account_owner.id = account.id "
			+ "where account.id = ?";
	
	PreparedStatement st = conn.prepareStatement(sql);
	
	st.setInt(1, id);
	
	ResultSet result = st.executeQuery();
	
	Account account = null;
	
	if(result.next()) {
		
		int accountId = result.getInt(1);
		String label = result.getString(2);
		double amount = result.getDouble(3);
		String dbType = result.getString(4);
		String dbOwnership = result.getString(5);
		String dbStatus = result.getString(6);
		int ownerId = result.getInt(7);
		
		Type type = null;
		
		if(dbType.equals("Checking")) {
			type = Type.Checking;
		} else if(dbType.equals("Saving")) {
			type = Type.Saving;
		}  else if(dbType.equals("MoneyMarket")) {
			type = Type.MoneyMarket;
		}  else if(dbType.equals("IRA")) {
			type = Type.IRA;
		}  else if(dbType.equals("Brokerage")) {
			type = Type.Brokerage;
		}  else if(dbType.equals("CD")) {
			type = Type.CD;
		}
		
		Account.Status status = null;
		
		if(dbStatus.equals("Denied")) {
			status = Account.Status.Denied;
		} else if(dbStatus.equals("Approved")) {
			status = Account.Status.Approved;
		} else if(dbStatus.equals("Closed")) {
			status = Account.Status.Closed;
		} else if(dbStatus.equals("Pending")) {
			status = Account.Status.Pending;
		}
		
		if(dbOwnership.equals("Single")) {
			account = new SingleAccount(accountId, label, ownerId, amount, type, status);
		} else if(dbOwnership.equals("Joint")) {
			account = new JointAccount(accountId, label, ownerId, amount, type, status);
			
			result.next();
			
			ownerId = result.getInt(7);
			
			JointAccount joint = (JointAccount)account;
			
			joint.setSecondOwnerId(ownerId);
		}
		
	}
	
	conn.close();
	
	return account;
}*/

//TODO retool these to approve/disapprove reimbursement
public void disapproveAccount(int accountId) throws SQLException {
	
	Connection conn = Database.getConnection();
	
	String sql = "update account set status = 'Denied' where id = " + accountId;
	
	Statement st = conn.createStatement();
	
	st.executeUpdate(sql);
	
	conn.close();
}

public void approveAccount(int accountId) throws SQLException {

	Connection conn = Database.getConnection();
	
	String sql = "update account set status = 'Approved' where id = " + accountId;
	
	Statement st = conn.createStatement();
	
	st.executeUpdate(sql);
	
	conn.close();
	
}

//TODO retool for getPendingReimbursements()
	/*
	 * public List<Account> getPendingAccounts() throws SQLException,
	 * FileNotFoundException, ClassNotFoundException, IOException {
	 * 
	 * List<Account> pendingAccounts = new ArrayList<>();
	 * 
	 * Connection conn = Database.getConnection();
	 * 
	 * String sql =
	 * "select account.id as id, users.id as ownerId, account.label as label, " +
	 * "account.amount as amount, account.type as type, account.ownership as ownership "
	 * + "from account_owner " + "join users on users.id = account_owner.ownerid " +
	 * "join account on account.id = account_owner.id " +
	 * "where account.status = 'Pending'";
	 * 
	 * PreparedStatement st = conn.prepareStatement(sql);
	 * 
	 * ResultSet result = st.executeQuery();
	 * 
	 * Map<Integer, Account> accounts = new HashMap<>();
	 * 
	 * if(result.next()) {
	 * 
	 * do {
	 * 
	 * int accountId = result.getInt(1); int ownerId = result.getInt(2); String
	 * label = result.getString(3); double amount = result.getDouble(4); String
	 * dbType = result.getString(5); String dbOwnership = result.getString(6);
	 * 
	 * Account account = null;
	 * 
	 * Type type = null;
	 * 
	 * if(dbType.equals("Checking")) { type = Type.Checking; } else
	 * if(dbType.equals("Saving")) { type = Type.Saving; } else
	 * if(dbType.equals("MoneyMarket")) { type = Type.MoneyMarket; } else
	 * if(dbType.equals("IRA")) { type = Type.IRA; } else
	 * if(dbType.equals("Brokerage")) { type = Type.Brokerage; } else
	 * if(dbType.equals("CD")) { type = Type.CD; }
	 * 
	 * if(dbOwnership.equals("Single")) {
	 * 
	 * account = new SingleAccount(accountId, label, ownerId, amount, type,
	 * Account.Status.Pending); accounts.put(accountId, account);
	 * 
	 * } else if(dbOwnership.equals("Joint")) {
	 * 
	 * if(accounts.containsKey(accountId)) {
	 * ((JointAccount)accounts.get(accountId)).setSecondOwnerId(ownerId); } else {
	 * account = new JointAccount(accountId, label, ownerId, amount, type,
	 * Account.Status.Pending); accounts.put(accountId, account); }
	 * 
	 * }
	 * 
	 * } while(result.next());
	 * 
	 * }
	 * 
	 * for(Integer key: accounts.keySet()) { pendingAccounts.add(accounts.get(key));
	 * }
	 * 
	 * conn.close();
	 * 
	 * return pendingAccounts; }
	 */




}
