package com.htsoft.oa.dao.archive.impl;
/*
 *  广州宏天软件有限公司 JOffice协同办公管理系统   -- http://www.jee-soft.cn
 *  Copyright (C) 2008-2009 GuangZhou HongTian Software Limited company.
*/
import com.htsoft.core.dao.impl.BaseDaoImpl;
import com.htsoft.oa.dao.archive.DocHistoryDao;
import com.htsoft.oa.model.archive.DocHistory;

public class DocHistoryDaoImpl extends BaseDaoImpl<DocHistory> implements DocHistoryDao{

	public DocHistoryDaoImpl() {
		super(DocHistory.class);
	}

}