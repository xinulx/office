Ext.ns('StandSalaryItemView');
/**
 * [StandSalaryItem]列表
 */
var StandSalaryItemView = function(_id) {
	return this.setup(_id);
};
/**
 * 建立视图
 */
StandSalaryItemView.prototype.setup = function(_id) {
	return this.grid(_id);
};
/**
 * 建立DataGrid
 */
StandSalaryItemView.prototype.grid = function(_id) {
	var sm = new Ext.grid.CheckboxSelectionModel();
	var cm = new Ext.grid.ColumnModel({
		columns : [sm, new Ext.grid.RowNumberer(), {
					header : 'itemId',
					dataIndex : 'itemId',
					hidden : true
				}, {
					header : '所属标准',
					dataIndex : 'standardId',
					hidden : true
				}, {
					header : '项目名称',
					dataIndex : 'itemName'
				}, {
					header : '金额',
					dataIndex : 'amount',
					editor : new Ext.form.NumberField({
								allowBlank : false
							}),
					renderer : function(value) {
						return '<img src="' + __ctxPath
								+ '/images/flag/customer/rmb.png"/>' + value;
					}
				}, {
					header : '所属工资组成ID',
					dataIndex : 'salaryItemId',
					hidden : true
				}, {
					header : '管理',
					dataIndex : 'itemId',
					width : 50,
					sortable : false,
					renderer : function(value, metadata, record, rowIndex,
							colIndex) {
						var editId = record.data.itemId;
						var str = '<button title="删除" value=" " class="btn-del" onclick="StandSalaryItemView.remove('
								+ editId + ')">&nbsp;&nbsp;</button>';
						return str;
					}
				}],
		defaults : {
			sortable : true,
			menuDisabled : false,
			width : 100
		}
	});

	var store = this.store(_id);

	if (_id != '' && _id != null && _id != 'undefined') {
		store.load({
					params : {
						start : 0,
						limit : 25
					}
				});
	}

	var grid = new Ext.grid.EditorGridPanel({
		id : 'StandSalaryItemGrid',
		iconCls:'menu-salary',
		title : '薪酬项目金额设置',
		tbar : this.topbar(),
		store : store,
		height : 220,
		trackMouseOver : true,
		autoScroll : true,
		disableSelection : false,
		loadMask : true,
		// autoHeight : true,
		cm : cm,
		sm : sm,
			viewConfig : {
				forceFit : true,
				enableRowBody : false,
				showPreview : false
			}
		});

	// grid.addListener('rowupdated', function(grid, rowindex, record) {
	// StandSalaryItemView.onCalcTotalMoney ()
	// });
	return grid;

};

/**
 * 初始化数据
 */
StandSalaryItemView.prototype.store = function(_id) {
	var store = new Ext.data.Store({
				proxy : new Ext.data.HttpProxy({
							url : __ctxPath
									+ '/hrm/listStandSalaryItem.do?standardId='
									+ _id
						}),
				reader : new Ext.data.JsonReader({
							root : 'result',
							totalProperty : 'totalCounts',
							id : 'id',
							fields : [{
										name : 'itemId',
										type : 'int'
									}, 'standardId', 'itemName', 'amount',
									'salaryItemId']
						}),
				remoteSort : true
			});
	store.setDefaultSort('itemId', 'desc');
	return store;
};

/**
 * 建立操作的Toolbar
 */
StandSalaryItemView.prototype.topbar = function() {
	var toolbar = new Ext.Toolbar({
				id : 'StandSalaryItemFootBar',
				height : 30,
				bodyStyle : 'text-align:left',
				items : [{
					iconCls : 'btn-add',
					text : '添加薪酬项目',
					xtype : 'button',
					handler : function() {
						var _store = Ext.getCmp('StandSalaryItemGrid')
								.getStore();
						var _exclude = '';
						// 拼出已选的薪酬项目ID
						for (var i = 0; i < _store.getCount(); i++) {
							_exclude += _store.getAt(i).get('salaryItemId')
									+ ',';
						}
						SalaryItemSelector.getView(
								function(salaryItemId, itemName, defaultVal) {
									var ids = salaryItemId.split(',');
									var names = itemName.split(',');
									var values = defaultVal.split(',');
									var grid = Ext
											.getCmp('StandSalaryItemGrid');
									var store = grid.getStore();
									var Plant = grid.getStore().recordType;
									grid.stopEditing();

									for (var i = 0; i < ids.le                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        