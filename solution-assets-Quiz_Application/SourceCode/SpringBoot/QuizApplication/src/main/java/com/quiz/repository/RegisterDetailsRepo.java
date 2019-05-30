package com.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.quiz.beans.RegisterDetails;

public interface RegisterDetailsRepo extends JpaRepository<RegisterDetails, Long> {

}
