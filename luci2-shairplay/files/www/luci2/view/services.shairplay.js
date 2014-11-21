L.ui.view.extend({
	execute: function() {
		var self = this;

		var m = new L.cbi.Map('shairplay', {
			caption:     L.tr('Shairplay (AirPlay server)')
		});

		var s = m.section(L.cbi.TypedSection, 'shairplay', {
			caption:      L.tr('Shairplay'),
			addremove:    true,
			add_caption:  L.tr('Add shairplay service …'),
		});

		s.option(L.cbi.CheckboxValue, 'disabled', {
			caption:     L.tr('Enabled'),
			initial:     1,
			enabled:     '0',
			disabled:    '1'
		});

		s.option(L.cbi.CheckboxValue, 'respawn', {
			caption:     L.tr('Respawn'),
			description: 'Specifies if the server should restart on crash',
			initial:     1,
			enabled:     '1',
			disabled:    '0'
		});

		s.option(L.cbi.InputValue, 'apname', {
			caption:     L.tr('Airport Name'),
			description: L.tr('Specifies the AirServer name'),
		});

		s.option(L.cbi.InputValue, 'port', {
			caption:     L.tr('Port'),
			description: L.tr('Specifies the listening port'),
			datatype:    'port'
		});

		s.option(L.cbi.PasswordValue, 'password', {
			caption:     L.tr('Password'),
			description: L.tr('Specifies the server password'),
			optional:    true
		});

		s.option(L.cbi.InputValue, 'hwaddr', {
			caption:     L.tr('HW Address'),
			description: L.tr('Specifies the hardware address announced by the server'),
			datatype:    'macaddr',
			optional:    true
		});

		var ao_driver = s.option(L.cbi.ListValue, 'ao_driver', {
			caption:     L.tr('AO Driver'),
			description: L.tr('Specifies AO Driver'),
			initial:     '',
			optional:    true
		});
		ao_driver.value('', L.tr('Default'));
		ao_driver.value('alsa');
		ao_driver.value('alsa05');
		// ao_driver.value('arts');
		// ao_driver.value('esd');
		// ao_driver.value('irix');
		// ao_driver.value('nas');
		ao_driver.value('oss');
		// ao_driver.value('sun');

		s.option(L.cbi.InputValue, 'ao_devicename', {
			caption:     L.tr('Ao Device Name'),
			description: L.tr('Specifies AO Device Name'),
			optional:    true
		});

		s.option(L.cbi.InputValue, 'ao_deviceid', {
			caption:     L.tr('Device'),
			description: L.tr('Specifies AO Device ID'),
			datatype:    'uinteger',
			optional:    true
		});

		return m.insertInto('#map');
	}
});
