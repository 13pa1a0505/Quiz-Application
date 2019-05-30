package com.quiz.serviceimpl;

import java.io.File;
import java.io.StringWriter;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.apache.commons.lang.StringUtils;
import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.runtime.RuntimeConstants;
import org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.quiz.beans.Users;
import com.quiz.controllers.UserController;
import com.quiz.services.EmailService;

/**
 * @author bommidiv
 *
 */
@Service
@Transactional
public class EmailServiceImpl implements EmailService {

	private static final Logger logger = LoggerFactory.getLogger(UserController.class);

	@Value("${mail.from}")
	private String mailFrom;

	@Value("${mail.to}")
	private String mailTo;

	@Value("${email.cc}")
	private String[] cc;

	@Value("${email.subject}")
	private String subject;

	@Value("${email.regards}")
	private String regards;

	@Value("${email.toUsername}")
	private String toUsername;

	@Value("${email.pathToAttachments}")
	private String pathToAttachments;

	@Value("${context.username}")
	private String usernameKey;

	@Value("${context.cc}")
	private String ccKey;

	@Value("${context.subject}")
	private String subjectKey;

	@Value("${context.emailbody}")
	private String emailbodyKey;

	@Value("${context.id}")
	private String idKey;

	@Value("${context.type}")
	private String typeKey;

	@Value("${context.status}")
	private String statusKey;

	@Value("${context.regards}")
	private String regardsKey;

	@Value("${match.criteria}")
	private String matchCriteria;

	@Value("${context.attachment}")
	private String attachmentKey;

	@Value("${exception.occurred}")
	private String exceptionOccurred;

	@Value("${messagingexception.occurred}")
	private String messagingExceptionOccurred;

	@Value("${mailsuccess.statement}")
	private String mailSuccessStatement;

	@Value("${success.template}")
	private String successTemplate;

	@Value("${failure.template}")
	private String failureTemplate;

	@Value("${emailentry.file}")
	private String emailEntryFile;

	@Value("${cancelMail.file}")
	private String canceMailFile;

	@Value("${property.classpath}")
	private String classpath;

	@Value("${classpath.loader}")
	private String classpathLoader;

	@Autowired
	private JavaMailSender emailSender;

	public String sendSimpleMessage(Users users, String emailBody, String email, String ccemail) throws Exception {
		String selectTemplate = "";
		StringWriter writer = new StringWriter();
		VelocityContext context = new VelocityContext();
		FileSystemResource file = new FileSystemResource(new File(pathToAttachments));

		MimeMessage message = emailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message, true);
		VelocityEngine ve = new VelocityEngine();
		ve.setProperty(RuntimeConstants.RESOURCE_LOADER, classpath);
		ve.setProperty(classpathLoader, ClasspathResourceLoader.class.getName());
		ve.init();

		if (toUsername.equals(matchCriteria)) {
			selectTemplate = successTemplate;
		} else {
			selectTemplate = failureTemplate;
		}

		Template t = ve.getTemplate(selectTemplate);
		context.put(ccKey, ccemail);
		context.put(subjectKey, subject);
		context.put(emailbodyKey, emailBody);
		context.put(regardsKey, regards);

		t.merge(context, writer);

		try {
			helper.setTo(email);
			helper.setText(writer.toString());
			helper.setSubject(subject);
			helper.setCc(ccemail);

			if (StringUtils.isNotEmpty(pathToAttachments)) {
				helper.addAttachment(attachmentKey, file);
				context.put(attachmentKey, file);
			}

		} catch (MessagingException e) {
			logger.info(messagingExceptionOccurred);
		} catch (Exception e) {
			logger.info(exceptionOccurred);
		}
		emailSender.send(message);
		logger.info(mailSuccessStatement);
		return mailSuccessStatement;
	}

}