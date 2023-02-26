({
	init: function(c,e,h) {
		if(c.get('v.finalUrl') != '') { return }
		let filterString = c.get('v.filterString')
		let specificFieldsArray = c.get('v.specificFieldsArray')
		if(c.get('v.recordId') != '' && filterString && filterString.length > 0) {
			if(c.get('v.field1')) { specificFieldsArray.push(c.get('v.field1')) }
			if(c.get('v.field2')) { specificFieldsArray.push(c.get('v.field2')) }
			if(c.get('v.field3')) { specificFieldsArray.push(c.get('v.field3')) }
			if(c.get('v.idSource')) { specificFieldsArray.push(c.get('v.idSource')) }
			c.set('v.specificFieldsArray', specificFieldsArray)

			try {
				c.find("recordLoader").reloadRecord(true,function() {
					h.recordUpdated(c,e,h)
				})
			} catch(e) {
				console.log(e)
			}
		} else {
			h.recordUpdated(c,e,h)
		}
	}
})
