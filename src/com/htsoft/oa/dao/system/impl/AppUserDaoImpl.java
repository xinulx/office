                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                { department.getPath()+"%",Constants.FLAG_UNDELETED };		
		return findByHql(hql,params);
	}

	@Override
	public List findByRole(Long roleId) {
		String hql="select vo from AppUser vo join vo.roles roles where roles.roleId=? and vo.delFlag = ?";
		Object[] objs={roleId,Constants.FLAG_UNDELETED};
		return findByHql(hql, objs);
	}

	@Override
	public List findByRole(Long roleId, PagingBean pb) {
		String hql="select vo from AppUser vo join vo.roles roles where roles.roleId=? and vo.delFlag = ?";
		Object[] objs={roleId,Constants.FLAG_UNDELETED};
		return findByHql(hql,objs,pb);
	}

	@Override
	public List<AppUser> findByDepartment(String path) {
		String hql="select vo2 from Department vo1,AppUser vo2 where vo1.depId=vo2.depId and vo1.path like ? and vo2.delFlag =?";
		Object[] params = {path+"%",Constants.FLAG_UNDELETED };		
		return findByHql(hql,params);
	}
	
	public List findByRoleId(Long roleId){
		String hql="select vo from AppUser vo join vo.roles as roles where roles.roleId=? and vo.delFlag =?";
		return findByHql(hql,new Object[]{roleId ,Constants.FLAG_UNDELETED});
	}
	
	public List findByUserIds(Long... userIds){
		String hql="select vo from AppUser vo where vo.delFlag=? ";

		if(userIds==null || userIds.length==0) return null;
		hql+=" where vo.userId in (";
		int i=0;
		for(Long userId:userIds){
			if(i++>0){
				hql+=",";
			}
			hql+="?";
		}
		hql+=" )";
		
		return findByHql(hql,new Object[]{Constants.FLAG_UNDELETED,userIds});
	}

	@Override
	public List<AppUser> findSubAppUser(String path,Set<Long> userIds,PagingBean pb) {
		String st="";
		if(userIds.size()>0){
			Iterator<Long> it=userIds.iterator();
			StringBuffer sb=new StringBuffer();			
			while(it.hasNext()){
				sb.append(it.next().toString()+",");
			}
			sb.deleteCharAt(sb.length()-1);
			st=sb.toString();
		}
		
		List list=new ArrayList();
		StringBuffer hql=new StringBuffer();
		if(path!=null){
			hql.append("select vo2 from Department vo1,AppUser vo2 where vo1=vo2.department ");
		  hql.append(" and vo1.path like ?");
		  list.add(path+"%");
		}else{
			hql.append("from AppUser vo2 where 1=1 ");
		}
		if(st!=""){
		  hql.append(" and vo2.userId not in ("+st+")");
		}		
		hql.append(" and vo2.delFlag = ?");
		list.add(Constants.FLAG_UNDELETED);
		return findByHql(hql.toString(),list.toArray(),pb);
	}

	@Override
	public List<AppUser> findSubAppUserByRole(Long roleId, Set<Long> userIds,
			PagingBean pb) {
		String st="";
		if(userIds.size()>0){
			Iterator<Long> it=userIds.iterator();
			StringBuffer sb=new StringBuffer();			
			while(it.hasNext()){
				sb.append(it.next().toString()+",");
			}
			sb.deleteCharAt(sb.length()-1);
			st=sb.toString();
		}
		StringBuffer hql=new StringBuffer("select vo from AppUser vo join vo.roles roles where roles.roleId=?");
		List list=new ArrayList();
		list.add(roleId);
		if(st!=""){
		  hql.append(" and vo.userId not in ("+st+")");
		}
		hql.append(" and vo.delFlag =?");
		list.add(Constants.FLAG_UNDELETED);
		return findByHql(hql.toString(),list.toArray(),pb);
	}
}
