({
	recordUpdated : function(c,e,h) {
		let filterString = c.get('v.filterString')
		if(filterString && filterString.length > 0) {
			if(c.get('v.field1')) {
				if(c.get('v.field1') == 'CurrentUser.Email') {
					filterString = filterString.replace('field1', $A.get( "$SObjectType.CurrentUser.Email"))
				} else {
					filterString = filterString.replace('field1', c.get('v.record.' + c.get('v.field1')))
				}
			}
			if(c.get('v.field2')) { filterString = filterString.replace('field2', c.get('v.record.' + c.get('v.field2'))) }
			if(c.get('v.field3')) { filterString = filterString.replace('field3', c.get('v.record.' + c.get('v.field3'))) }
			if(c.get('v.idSource')) { filterString = filterString.replace('idSource', c.get('v.record.' + c.get('v.idSource'))) }
			c.set('v.finalFilter', filterString)
			if(c.get('v.finalUrl') == '') {
				const finalUrl = c.get('v.powerBiUrl') + '&$filter=' + filterString
				c.set('v.finalUrl', finalUrl)
			}
		} else {
			if(c.get('v.finalUrl') == '') {
				c.set('v.finalUrl', c.get('v.powerBiUrl'))
			}
		}
	}
})
