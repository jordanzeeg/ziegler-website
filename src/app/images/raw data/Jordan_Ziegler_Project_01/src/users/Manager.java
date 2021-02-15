package users;


public class Manager extends User{

	public Manager(int dbId, String usernameDb, String password, String email, String firstName, String lastName,
			Role manager) {
		super(dbId, usernameDb, password, email, firstName, lastName, Role.Manager);
		// TODO Auto-generated constructor stub
	}
	
}
