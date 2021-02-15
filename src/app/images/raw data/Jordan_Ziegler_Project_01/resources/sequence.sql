create sequence users_sequence
    minvalue 1
    start with 1
    increment by 1
	
create or replace procedure auto_increment_users(user_username in reimb_users.user_username%type, user_password in reimb_users.user_password%type, user_email in reimb_users.user_email%type, user_firstName in reimb_users.user_firstName%type, user_lastname in reimb_users.lastname%type, user_role in reimb_users.user_role%type)
is
begin
    insert into reimb_users values (users_sequence.nextval, user_username, user_password, user_email, user_firstName, user_lastname, user_role);
    
    commit;
end;
/
create sequence reimb_sequence
    minvalue 1
    start with 1
    increment by 1
    
create or replace procedure auto_increment_reimbursements(reimb_amount in reimbursement.reimb_account%type, reimb_description in reimbursement.reimb_description%type, reimb_author in reimbursement.reimb_author%type)
is
begin
	insert into reimbursement(reimb_id, reimb_amount, reimb_submitted, reimb_description, reimb_author, reimb_status_id, reimb_type_id)
	values (reimb_sequence.nextval, reimb_amount, CURRENT_TIMESTAMP, reimb_description, reimb_author, 0,0);
	commit;
	end;
	\ 


exec auto_increment_users('supersanta', 'super123', 'supersanta@gmail.com', 'Super', 'Santa', '123 north 123 street', 'north', 'north', '11111', '1234567890', 'Customer');

call auto_increment_users('supersanta1', 'super1231', 'supersanta@gmail.com1', 'Super', 'Santa', '123 north 123 street', 'north', 'north', '11111', '1234567890', 'Customer');


