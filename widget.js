InviteMasterObj=function(){

var invitemaster_domain='http://www.invitemaster.ru';

if(typeof invitemaster_user=='undefined'){invitemaster_user='auto'}
if(typeof invitemaster_form=='undefined'){invitemaster_form=1}
if(typeof invitemaster_zindex=='undefined'){invitemaster_zindex=1000}
if(typeof invitemaster_form_linkid=='undefined'){invitemaster_form_linkid=''}
if(typeof invitemaster_form_refid=='undefined'){invitemaster_form_refid=''}
if(typeof invitemaster_imgtype=='undefined'){invitemaster_imgtype=''}
if(typeof invitemaster_tab_orientation=='undefined'){invitemaster_tab_orientation='right'}
if(typeof invitemaster_tab_color=='undefined'){invitemaster_tab_color='orange'}
if(typeof invitemaster_tab_offset=='undefined'){invitemaster_tab_offset=200}
if(typeof invitemaster_display_tab=='undefined'){invitemaster_display_tab=0}
if(typeof invitemaster_page_url=='undefined'){invitemaster_page_url=''}
if(typeof invitemaster_page_title=='undefined'){invitemaster_page_title=''}
if(typeof invitemaster_page_description=='undefined'){invitemaster_page_description=''}
if(typeof invitemaster_page_parse=='undefined'){invitemaster_page_parse='no'}
if(typeof invitemaster_imgpath=='undefined'||invitemaster_imgpath==''){invitemaster_imgpath='http://static.invitemaster.ru/images'}
if(typeof invitemaster_engine=='undefined'){invitemaster_engine=''}
if(!invitemaster_user){invitemaster_user='auto';invitemaster_form=1;}

this.CreateLayers=function()
{
document.write('<style type="text/css">')
document.write('#invitemaster_block{position:fixed;width:640px;height:460px;top:0px;left:0px;margin:0px;border-style:none;border-width:0px;z-index:'+invitemaster_zindex+';}')
document.write('#invitemaster_fader{position:fixed;width:100%;height:100%;left:0px;top:0px;right:0px;bottom:0px;background-color:#000000;border-style:none;border-width:0px;z-index:'+(invitemaster_zindex-1)+';opacity:0.6;-moz-opacity:0.6;-khtml-opacity:0.6;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=60)}')
document.write('</style>')
document.write('<div id="invitemaster_fader" style="display:none;" onclick="InviteMaster.CloseInviteForm()"></div><div id="invitemaster_block" style="display:none;"></div>')

if(invitemaster_imgtype=="tab"||invitemaster_display_tab==1){this.CreateTabLayer()}
}

this.CreateTabLayer=function()
{
telltab_pos=0;
invitemaster_tab_image=invitemaster_imgpath+'/telltab_'+invitemaster_tab_color+'_'+invitemaster_tab_orientation+'.png';
if(invitemaster_tab_orientation=='left'||invitemaster_tab_orientation=='right'){telltab_img_w=30;telltab_img_h=190}else{telltab_img_w=190;telltab_img_h=30}
if(invitemaster_tab_orientation=='left'){telltab_pos='left:0px;top:'+invitemaster_tab_offset+'px'}
if(invitemaster_tab_orientation=='right'){telltab_pos='right:0px;top:'+invitemaster_tab_offset+'px'}
if(invitemaster_tab_orientation=='top'){telltab_pos='top:0px;left:'+invitemaster_tab_offset+'px'}
if(invitemaster_tab_orientation=='bottom'){telltab_pos='bottom:0px;left:'+invitemaster_tab_offset+'px'}

document.write('<style type="text/css">.invitetab{position:fixed;z-index:'+(invitemaster_zindex-2)+';'+telltab_pos+'}* html .invitetab{position:absolute}</style>\n');
document.write('<div class="invitetab">\n');
document.write('<a href="'+invitemaster_domain+'/form/'+invitemaster_user+'_'+invitemaster_form+'/" target="_blank"  onclick="InviteMaster.ShowInviteForm();return false;">\n');
document.write('<image src="'+invitemaster_tab_image+'" border="0" alt="" style="margin:0px;padding:0px;border-style:none;border-width:0px;" />\n');
document.write('</a></div>');
}

this.getScrollPos=function(){return document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.scrollTop:document.body.scrollTop}
this.getWindowWidth=function(){return document.compatMode=='CSS1Compat'&&!window.opera?document.documentElement.clientWidth:document.body.clientWidth}
this.getWindowHeight=function(){return window.innerHeight||(document.documentElement && document.documentElement.clientHeight)||(document.body.clientHeight)}

this.ShowInviteForm=function(data)
{
if(!data){data={user:'', form:'', url:'', title:'', description:'', zindex:'', linkid:'', refid:'', parsing:'', encoding:'', postID:''}}

//if(invitemaster_user=='auto'){invitemaster_page_parse='yes'}

invitemaster_current_user=invitemaster_user
invitemaster_current_form=invitemaster_form
invitemaster_current_url=""
invitemaster_page_title=""
invitemaster_page_description=""

if(data.user){invitemaster_current_user=data.user}
if(data.form){invitemaster_current_form=data.form}
if(data.url){invitemaster_current_url=data.url}
if(data.title){invitemaster_page_title=data.title}
if(data.description){invitemaster_page_description=data.description}
if(data.zindex){invitemaster_zindex=data.zindex}
if(data.linkid){invitemaster_form_linkid=data.linkid}
if(data.refid){invitemaster_form_refid=data.refid}
if(data.parsing){invitemaster_page_parse=data.parsing}

if(invitemaster_engine=="blogger"){invitemaster_page_title=document.getElementById('invitemaster_'+data.postID).innerHTML}

if(!invitemaster_current_url){invitemaster_current_url=document.location.href||window.location}
if(!invitemaster_page_title){invitemaster_page_title=document.title}
if(!invitemaster_page_description){invitemaster_page_description=""}

invitemaster_current_url=invitemaster_current_url.substring(0,100)
invitemaster_page_title=invitemaster_page_title.substring(0,200)
invitemaster_page_description=invitemaster_page_description.substring(0,200)

invitemaster_current_url=encodeURIComponent(invitemaster_current_url)
invitemaster_page_title=encodeURIComponent(invitemaster_page_title)
invitemaster_page_description=encodeURIComponent(invitemaster_page_description)

invitemaster_page_encoding=data.encoding||document.charset||document.characterSet
invitemaster_page_data='&url='+invitemaster_current_url+'&parse='+invitemaster_page_parse+'&title='+invitemaster_page_title+'&description='+invitemaster_page_description+'&encoding='+invitemaster_page_encoding+"&engine="+invitemaster_engine

//if(document.getElementById('invitemaster_block').innerHTML==""){
var invitemaster_contents='<table width="100%" border="0" cellspacing="0" cellpadding="0" style="padding:0px;margin:0px"><tr><td>&nbsp;</td><td align="center" width="32"><img src="'+invitemaster_imgpath+'//close_w.png" width="32" height="32" alt="X" border="0" onclick="InviteMaster.CloseInviteForm()" style="margin:0px;padding:0px;border-style:none;border-width:0px;cursor:pointer;align:right"></td></tr></table>\n'+
'<iframe src="'+invitemaster_domain+'/widget/'+invitemaster_current_user+'_'+invitemaster_current_form+'_'+invitemaster_form_refid+'/?id='+invitemaster_form_linkid+invitemaster_page_data+'" style="width:640px;height:460px;border-style:none;border-width:0px;" marginwidth="0" marginheight="0" frameborder="0" align="left">error</iframe>'
document.getElementById('invitemaster_block').innerHTML=invitemaster_contents
//}

use_fader=1;
if(typeof invitemaster_fader=='string'){if(invitemaster_fader=='off'){use_fader=0}}
if(use_fader==1)
{
//document.getElementById('invitemaster_fader').style.top=this.getScrollPos()+'px';
document.getElementById('invitemaster_fader').style.display="block"
}

var tellafriend_block=document.getElementById('invitemaster_block');
tellafriend_block.style.left=Math.round(this.getWindowWidth()/2-320)+'px';
tellafriend_block.style.top=Math.round(this.getWindowHeight()/2-270)+'px';

this.DynamicFadeOn('invitemaster_block',0)
}

this.DynamicFadeOn=function(obj,opvalue)
{
var o=document.getElementById(obj);

var p;
if (typeof document.body.style.opacity == 'string') p = 'opacity';
else if (typeof document.body.style.MozOpacity == 'string') p = 'MozOpacity';
else if (typeof document.body.style.KhtmlOpacity == 'string') p = 'KhtmlOpacity';
else if (document.body.filters && navigator.appVersion.match(/MSIE ([\d.]+);/)[1]>=5.5) p = 'filter';

//o.style.filter='alpha(opacity='+opvalue*100+')';
//document.getElementById(obj).style.opacity=opvalue;

o.style.display="block";
}

this.CloseInviteForm=function()
{
document.getElementById('invitemaster_block').style.display="none";
document.getElementById('invitemaster_fader').style.display="none";
}

}

InviteMaster=new InviteMasterObj()
InviteMaster.CreateLayers()
function ShowInviteForm(data){InviteMaster.ShowInviteForm(data)}