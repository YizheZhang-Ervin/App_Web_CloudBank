package cn.ervin.serviceproducer.mapper;

import cn.ervin.serviceproducer.pojo.User;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface UserMapper {
    
    @Select("select * from clouduser where id = #{id}")
    User findById(@Param("id") Long id);
}