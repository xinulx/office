package com.htsoft.oa.dao.archive.impl;
/*
 *  广州宏天软件有限公司 JOffice协同办公管理系统   -- http://www.jee-soft.cn
 *  Copyright (C) 2008-2009 GuangZhou HongTian Software Limited company.
*/
import com.htsoft.core.dao.impl.BaseDaoImpl;
import com.htsoft.oa.dao.archive.ArchivesDao;
import com.htsoft.oa.model.archive.Archives;

public class ArchivesDaoImpl extends BaseDaoImpl<Archives> implements ArchivesDao{

	public ArchivesDaoImpl() {
		super(Archives.class);
	}

}