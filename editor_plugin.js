(function() {
	// Load plugin specific language pack
	tinymce.PluginManager.requireLangPack('InviteMaster');

	tinymce.create('tinymce.plugins.InviteMaster', {
		/**
		 * Initializes the plugin, this will be executed after the plugin has been created.
		 * This call is done before the editor instance has finished it's initialization so use the onInit event
		 * of the editor instance to intercept that event.
		 *
		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		 * @param {string} url Absolute URL to where the plugin is located.
		 */
		init : function(ed, url) {
			// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceInvite');
			ed.addCommand('mceInvite', function() {
				var content = tinyMCE.activeEditor.selection.getContent({format : 'raw'});
				var newcontent = '[invitemaster]';
				
				tinyMCE.activeEditor.selection.setContent(newcontent);
			});
			
			// Register InviteMaster button
			ed.addButton('invitemaster', {
				title : 'разместить кнопку рекомендаций InviteMaster',
				cmd : 'mceInvite',
				image : url + '/inviteeditor.png'
			});
			
		},

		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
				longname : 'InviteMaster plugin',
				author : 'InviteMaster.ru',
				authorurl : 'http://invitemaster.ru',
				infourl : 'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/invitemaster/',
				version : "1.0"
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('InviteMaster', tinymce.plugins.InviteMaster);
})();
