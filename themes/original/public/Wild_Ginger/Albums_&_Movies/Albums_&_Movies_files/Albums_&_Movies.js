// Created by iWeb 3.0.1 local-build-20091118

function createMediaStream_id2()
{return IWCreateMediaCollection("http://www.summitwynds.com/%7Ewildginger/Wild_Ginger/Albums_%26_Movies/Albums_%26_Movies_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://www.summitwynds.com/%7Ewildginger/Wild_Ginger/Albums_%26_Movies',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget7'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://www.summitwynds.com/%7Ewildginger/Wild_Ginger/Albums_%26_Movies',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(228,171),new IWSize(228,28),new IWSize(274,214),27,27,0,new IWSize(86,63)),new IWPhotoFrame([IWCreateImage('Albums_%26_Movies_files/organic_ul.png'),IWCreateImage('Albums_%26_Movies_files/organic_top.png'),IWCreateImage('Albums_%26_Movies_files/organic_ur.png'),IWCreateImage('Albums_%26_Movies_files/organic_right.png'),IWCreateImage('Albums_%26_Movies_files/organic_lr.png'),IWCreateImage('Albums_%26_Movies_files/organic_bottom.png'),IWCreateImage('Albums_%26_Movies_files/organic_ll.png'),IWCreateImage('Albums_%26_Movies_files/organic_left.png')],null,0,0.698772,0.000000,18.000000,0.000000,16.000000,76.000000,57.000000,45.000000,68.000000,30.000000,80.000000,144.000000,80.000000,null,null,null,0.500000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget7',null,'widget8',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Albums_&_Movies_files/Albums_&_MoviesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
