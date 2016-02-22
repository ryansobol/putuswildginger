// Created by iWeb 3.0.1 local-build-20091118

function createMediaStream_id3()
{return IWCreatePhotocast("http://www.summitwynds.com/%7Ewildginger/Wild_Ginger/Albums_%26_Movies/Pages/Good_Times_at_Wild_Ginger_files/rss.xml",true);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://www.summitwynds.com/%7Ewildginger/Wild_Ginger/Albums_%26_Movies/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://www.summitwynds.com/%7Ewildginger/Wild_Ginger/Albums_%26_Movies/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(3,new IWSize(152,152),new IWSize(152,32),new IWSize(183,199),27,27,0,new IWSize(12,12)),new IWPhotoFrame([IWCreateImage('Good_Times_at_Wild_Ginger_files/PrintedPaper_frame_01.png'),IWCreateImage('Good_Times_at_Wild_Ginger_files/PrintedPaper_frame_02.png'),IWCreateImage('Good_Times_at_Wild_Ginger_files/PrintedPaper_frame_03.png'),IWCreateImage('Good_Times_at_Wild_Ginger_files/PrintedPaper_frame_06.png'),IWCreateImage('Good_Times_at_Wild_Ginger_files/PrintedPaper_frame_09.png'),IWCreateImage('Good_Times_at_Wild_Ginger_files/PrintedPaper_frame_08.png'),IWCreateImage('Good_Times_at_Wild_Ginger_files/PrintedPaper_frame_07.png'),IWCreateImage('Good_Times_at_Wild_Ginger_files/PrintedPaper_frame_04.png')],null,0,1.000000,0.000000,0.000000,0.000000,0.000000,6.000000,6.000000,6.000000,6.000000,9.000000,9.000000,9.000000,9.000000,null,null,null,0.500000),imageStream,range,new IWShadow({blurRadius:5,offset:new IWPoint(0.7071,0.7071),color:'#000000',opacity:0.500000}),null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Good_Times_at_Wild_Ginger_files/Good_Times_at_Wild_GingerMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();initializeMediaStream_id3()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
