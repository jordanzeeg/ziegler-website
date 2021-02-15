create table user_roles(
role_id number not null,
user_role varchar2(10),
PRIMARY KEY (role_id)
);
create table reimbursement_type(
reimb_type_id number not null,
reimb_type varchar2(10),
PRIMARY KEY (reimb_type_id)
);

create table reimbursement_status( 
reimb_status_id number not null,
reimb_status varchar2(10),
PRIMARY KEY(reimb_status_id)
);

create table reimb_users (
user_id number NOT NULL,
user_username varchar2(50) NOT NULL,
user_password varchar2(50) NOT NULL,
user_email varchar2(150) NOT NULL,
user_firstName varchar2(100) NOT NULL,
user_lastname varchar2(100) NOT NULL,
user_role_id number NOT NULL,
PRIMARY KEY (user_id),
FOREIGN KEY (user_role_id) references user_roles (role_id),
constraint unique_username UNIQUE (user_username),
constraint unique_email UNIQUE (user_email)
);

create table reimbursement(
reimb_id number NOT NULL,
reimb_amount number NOT NULL,
reimb_submitted timestamp not null,
reimb_resolved timestamp,
reimb_description varchar2(250),
reimb_receipt blob,
reimb_author number not null,
reimb_resolver number,
reimb_status_id number not null,
reimb_type_id number not null,
PRIMARY KEY (reimb_id),
FOREIGN KEY (reimb_type_id) references reimbursement_type (reimb_type_id),
FOREIGN KEY(reimb_status_id) references reimbursement_status (reimb_status_id),
FOREIGN KEY (reimb_author) references reimb_users (user_id),
FOREIGN KEY (reimb_resolver) references reimb_users(user_id)
);

