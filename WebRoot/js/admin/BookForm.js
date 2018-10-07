var BookForm = function(bookId) {
	this.bookId = bookId;
	var fp = this.setup();
	var window = new Ext.Window({
		id : 'BookFormWin',
		title : '图书详细信息',
		iconCls:'menu-book-manage',
		width : 500,
		autoHeight : true,
		shadow : false,
		modal : true,
		layout : 'anchor',
		plain : true,
		bodyStyle : 'padding:5px;',
		buttonAlign : 'center',
		items : [this.setup()],
		buttons : [{
					text : '保存',
					iconCls : 'btn-save',
					handler : function() {
						var fp = Ext.getCmp('BookForm');
						if (fp.getForm().isValid()) {
							fp.getForm().submit({
										method : 'post',
										waitMsg : '正在提交数据...',
										success : function(fp, action) {
											Ext.ux.Toast.msg("操作信息", "成功保存信息！");
											Ext.getCmp('BookGrid').getStore()
													.reload();
											window.close();
										},
										failure : function(fp, action) {
											Ext.MessageBox.show({
														title : '操作信息',
														msg : '信息保存出错，请联系管理员！',
														buttons : Ext.MessageBox.OK,
														icon : 'ext-mb-error'
													});
											window.close();
										}
									});
						}
					}
				}, {
					text : '取消',
					iconCls : 'btn-cancel',
					handler : function() {
						window.close();
					}
				}]
	});
	window.show();
};

BookForm.prototype.setup = function() {
	// 获取图书类别下位选框
	var _url = __ctxPath + '/admin/treeBookType.do?method=1';
	var bookTypeSelector = new TreeSelector('bookTypeSelect', _url, '图书类别',
			'typeId');
	var formPanel = new Ext.FormPanel({
		url : __ctxPath + '/admin/saveBook.do',
		layout : 'form',
		id : 'BookForm',
		frame : true,
		defaults : {
			widht : 400,
			anchor : '100%,100%'
		},
		formId : 'BookFormId',
		defaultType : 'textfield',
		items : [{
					name : 'book.bookId',
					id : 'bookId',
					xtype : 'hidden',
					value : this.bookId == null ? '' : this.bookId
				}, {
					name : 'book.typeId',
					id : 'typeId',
					xtype : 'hidden'
				}, {
					name : 'book.leftAmount',
					id : 'leftAmount',
					xtype : 'hidden'
				}, {
					xtype : 'label'
				}, bookTypeSelector, {
					fieldLabel : '书名',
					name : 'book.bookName',
					id : 'bookName',
					allowBlank : false,// 不允许为空
					blankText : '书名不能为空'
				}, {
					fieldLabel : '作者',
					name : 'book.author',
					id : 'author',
					allowBlank : false,// 不允许为空
					blankText : '作者不能为空'
				}, {
					fieldLabel : 'ISBN号',
					name : 'book.isbn',
					id : 'isbn',
					allowBlank : false,// 不允许为空
					blankText : 'ISBN号不能为空'
				}, {
					fieldLabel : '出版社',
					name : 'book.publisher',
					id : 'publisher'
				}, {
					fieldLabel : '图书价格',
					name : 'book.price',
					id : 'price',
					xtype : 'numberfield',// 价格只能输入数字，可以有小数点
					nanText : '只能输入数字',
					allowBlank : false,// 不允许为空
					blankText : '价格不能为空'
				}, {
					fieldLabel : '存放地点',
					name : 'book.location',
					id : 'location',
					allowBlank : false,// 不允许为空
					blankText : '存放地点不能为空'
				}, {
					xtype : 'container',
					layout : 'column',
					id : 'amoutContainer',
					style : 'padding-left:0px;margin-left:0px;margin-bottom:4px;',
					defaultType : 'textfield',
					height : 26,
					items : [{
						xtype : 'label',
						text : '数量:',
						style : 'padding-left:0px;margin-left:0px;margin-bottom:2px;',
						width : 100
					}, {
						name : 'book.amount',
						id : 'amount',
						xtype : 'numberfield',// 数量只能输入数字
						allowDecimals : false,// 只允许输入整数
						nanText : '只能输入数字',
						allowBlank : false,// 不允许为空
						blankText : '数量不能为空',
						minValue : 1,
						minText : '图书数量必须大于0'
		                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    