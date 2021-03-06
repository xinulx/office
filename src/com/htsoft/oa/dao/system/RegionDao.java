package com.htsoft.oa.dao.system;
/*
 *  广州宏天软件有限公司 OA办公管理系统   --  http://www.jee-soft.cn
 *  Copyright (C) 2008-2009 GuangZhou HongTian Software Company
*/
import java.util.List;

import com.htsoft.core.dao.BaseDao;
import com.htsoft.oa.model.system.Region;

/**
 * 
 * @author 
 *
 */
public interface RegionDao extends BaseDao<Region>{

	public List<Region> getProvince();

	public List<Region> getCity(Long regionId);
	
}