package com.ervin.department.repository;

import java.util.List;

import com.ervin.department.model.Department;
import org.springframework.data.repository.CrudRepository;

public interface DepartmentRepository extends CrudRepository<Department, String> {

	List<Department> findByOrganizationId(String organizationId);
	
}
