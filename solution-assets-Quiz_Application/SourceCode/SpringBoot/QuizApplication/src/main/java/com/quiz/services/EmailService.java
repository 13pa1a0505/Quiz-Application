package com.quiz.services;

import com.quiz.beans.Users;

/**
 * @author bommidiv
 *
 */
public interface EmailService {
	public String sendSimpleMessage(Users users, String emailBody, String email, String ccemail) throws Exception;
}
