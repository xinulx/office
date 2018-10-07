package com.htsoft.oa.dao.admin.impl;
/*
 *  广州宏天软件有限公司 OA办公管理系统   --  http://www.jee-soft.cn
 *  Copyright (C) 2008-2009 GuangZhou HongTian Software Company
*/

import com.htsoft.core.dao.impl.BaseDaoImpl;
import com.htsoft.oa.dao.admin.BookTypeDao;
import com.htsoft.oa.model.admin.BookType;

public class BookTypeDaoImpl extends BaseDaoImpl<BookType> implements BookTypeDao{

	public BookTypeDaoImpl() {
		super(BookType.class);
	}

}