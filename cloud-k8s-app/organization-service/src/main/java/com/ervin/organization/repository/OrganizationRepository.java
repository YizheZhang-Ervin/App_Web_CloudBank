package com.ervin.organization.repository;

import org.springframework.data.repository.CrudRepository;

import com.ervin.organization.model.Organization;

public interface OrganizationRepository extends CrudRepository<Organization, String> {
	
}
