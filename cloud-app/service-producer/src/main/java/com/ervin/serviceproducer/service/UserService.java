package cn.ervin.serviceproducer.service;

import cn.ervin.serviceproducer.mapper.UserMapper;
import cn.ervin.serviceproducer.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    public User queryById(Long id) {
        return userMapper.findById(id);
    }
}